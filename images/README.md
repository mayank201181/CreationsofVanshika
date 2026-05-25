# Artwork images

Drop Vanshika's artwork photos in this folder.

The filename of each photo doesn't matter &mdash; what matters is that the
filename you upload here matches the `image` field of its entry in
`../gallery.json`.

## Adding a new piece

1. Upload the photo here through GitHub's "Add file &rarr; Upload files" button.
   Whatever filename your phone or iPad gives it (e.g. `IMG_1234.jpeg`) is fine.
2. Open `../gallery.json` and add a new entry at the top, pointing at that
   exact filename:
   ```json
   {
     "title": "My new drawing",
     "image": "images/IMG_1234.jpeg",
     "date": "2026-06",
     "notes": "A short description."
   }
   ```
3. Commit. GitHub Pages will redeploy automatically.
