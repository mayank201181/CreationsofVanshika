(function () {
  "use strict";

  const galleryEl = document.getElementById("gallery");
  const countEl = document.getElementById("art-count");
  const yearEl = document.getElementById("year");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  yearEl.textContent = new Date().getFullYear();

  let items = [];
  let activeIndex = 0;

  function formatDate(value) {
    if (!value) return "";
    // Accepts "YYYY-MM" or "YYYY-MM-DD"
    const parts = value.split("-");
    const year = parts[0];
    const month = parts[1];
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    if (month) {
      const idx = parseInt(month, 10) - 1;
      if (idx >= 0 && idx < 12) return `${monthNames[idx]} ${year}`;
    }
    return year;
  }

  function makeCard(item, index) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-label", `Open ${item.title}`);

    const imgWrap = document.createElement("div");
    imgWrap.className = "card-image-wrap";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = item.title;
    img.src = item.image;
    img.onerror = function () {
      img.remove();
      const ph = document.createElement("span");
      ph.className = "placeholder";
      ph.textContent = "🎨"; // palette emoji
      imgWrap.appendChild(ph);
    };
    imgWrap.appendChild(img);

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = item.title;

    const meta = document.createElement("p");
    meta.className = "card-meta";
    meta.textContent = formatDate(item.date);

    body.appendChild(title);
    if (meta.textContent) body.appendChild(meta);

    if (item.notes) {
      const notes = document.createElement("p");
      notes.className = "card-notes";
      notes.innerHTML = item.notes;
      body.appendChild(notes);
    }

    card.appendChild(imgWrap);
    card.appendChild(body);

    card.addEventListener("click", function () {
      openLightbox(index);
    });

    return card;
  }

  function render(list) {
    galleryEl.innerHTML = "";
    list.forEach(function (item, i) {
      galleryEl.appendChild(makeCard(item, i));
    });
    countEl.textContent = list.length;
  }

  function openLightbox(index) {
    activeIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const item = items[activeIndex];
    if (!item) return;
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    const dateStr = formatDate(item.date);
    lightboxCaption.textContent = dateStr ? `${item.title} · ${dateStr}` : item.title;
  }

  function step(direction) {
    if (!items.length) return;
    activeIndex = (activeIndex + direction + items.length) % items.length;
    updateLightbox();
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", function () { step(-1); });
  nextBtn.addEventListener("click", function () { step(1); });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  // Load gallery data. Falls back gracefully if fetch isn't available
  // (e.g. when opening the file directly via file://).
  fetch("gallery.json", { cache: "no-store" })
    .then(function (r) {
      if (!r.ok) throw new Error("Failed to load gallery.json");
      return r.json();
    })
    .then(function (data) {
      items = Array.isArray(data) ? data : [];
      render(items);
    })
    .catch(function () {
      galleryEl.innerHTML =
        '<p style="grid-column:1/-1;text-align:center;color:var(--ink-soft)">' +
        "Could not load the gallery. If you opened this file directly, please " +
        "view it through a local server or via GitHub Pages.</p>";
    });
})();
