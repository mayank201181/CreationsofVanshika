# Creations of Vanshika

A simple, cheerful web gallery for showcasing Vanshika's artwork. Plain HTML +
CSS + JavaScript &mdash; no build step, no frameworks, easy to update.

## Project layout

```
.
├── index.html        Main page
├── styles.css        Styling
├── script.js         Gallery + lightbox logic
├── gallery.json      The list of artwork entries (edit this to add new pieces)
└── images/           Photos of the artwork
```

## Adding the starter images

Save the three photos you already have into the `images/` folder with these
filenames so the gallery picks them up:

| Filename                  | Drawing                                                |
| ------------------------- | ------------------------------------------------------ |
| `images/octopus.jpg`      | Black-marker octopus with eight tentacles              |
| `images/brown-friend.jpg` | Round brown-faced character with big white eyes        |
| `images/robot-buddy.jpg`  | Robot built piece by piece (hat, eyes, body, legs ...) |

If a file is missing, the card still shows but with a small palette icon
instead of the photo.

## Adding new artwork later

1. Take a clear photo of the drawing.
2. Save it into `images/` with a short, lowercase, dash-separated filename
   (e.g. `images/rainbow-cat.jpg`).
3. Open `gallery.json` and add a new entry at the top of the list:
   ```json
   {
     "title": "Rainbow cat",
     "image": "images/rainbow-cat.jpg",
     "date": "2026-06",
     "notes": "A cat sitting under a big rainbow."
   }
   ```
4. Commit and push the changes &mdash; the site updates automatically.

## Viewing the site locally

Because the page loads `gallery.json` via `fetch`, opening `index.html` directly
in the browser via `file://` will not work in all browsers. Run a tiny local
server from this folder:

```sh
# Python 3
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publishing it on the web (GitHub Pages)

1. Push this repository to GitHub (already done if you are reading this on
   GitHub).
2. On GitHub, open **Settings &rarr; Pages**.
3. Under **Build and deployment**, set:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` &middot; **Folder**: `/ (root)`
4. Save. After a minute the site will be live at:
   `https://<your-github-username>.github.io/CreationsofVanshika/`

Every time you push a new commit to `main`, GitHub Pages will redeploy the
site automatically &mdash; no extra steps needed.
