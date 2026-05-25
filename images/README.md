# Artwork images

Drop Vanshika's artwork photos in this folder.

For the three starter pieces, save the photos here with these filenames:

- `octopus.jpg` &mdash; the black-marker octopus with eight tentacles
- `brown-friend.jpg` &mdash; the brown round-faced character with white eyes
- `robot-buddy.jpg` &mdash; the robot built piece by piece

These names match the entries in `../gallery.json`.

## Adding a new piece later

1. Save the photo here (JPG or PNG works best; keep file size under ~2 MB if you can).
2. Open `../gallery.json` and add a new entry at the top:
   ```json
   {
     "title": "My new drawing",
     "image": "images/my-new-drawing.jpg",
     "date": "2026-06",
     "notes": "A short description."
   }
   ```
3. Commit and push &mdash; GitHub Pages will redeploy automatically.
