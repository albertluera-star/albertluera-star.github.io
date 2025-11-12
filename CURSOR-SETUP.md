# Custom Cursor Setup

## What You Need

Create 2 cursor images and place them in the `assets/` folder:

1. **cursor.png** - Default cursor (shown everywhere)
2. **cursor-pointer.png** - Pointer cursor (shown on links/buttons)

## Image Specifications

- **Format**: PNG with transparency
- **Size**: 32x32 pixels (recommended)
- **File size**: Under 10KB
- **Background**: Transparent

## Quick Setup

1. Create or find your cursor images
2. Resize to 32x32px
3. Save as PNG with transparency
4. Name them exactly:
   - `cursor.png`
   - `cursor-pointer.png`
5. Place in `assets/` folder

## File Structure

```
assets/
├── cursor.png              ← Default cursor
├── cursor-pointer.png      ← Hover cursor (for links/buttons)
├── landing-video.mp4
└── projects/
```

## Example Cursor Ideas

For your zine/halftone aesthetic:
- Crosshair/target symbol
- Custom hand pointer
- Halftone dot pattern
- Glitch effect cursor
- Simple geometric shape

## Finding Cursor Images

You can:
1. Design your own in Photoshop/Illustrator
2. Convert existing images to 32x32px
3. Use free cursor resources online
4. Create simple shapes in any design tool

## Optional: Remove Custom Cursor

If you decide not to use custom cursors, you can remove them by deleting these lines from `css/style.css` (lines 18-23):

```css
cursor: url('../assets/cursor.png'), auto;
```

and

```css
a, button, .work-item, .project-card, .gallery-item {
    cursor: url('../assets/cursor-pointer.png'), pointer;
}
```

## Testing

After adding your cursor images:
1. Open the website in browser
2. Move mouse around - should see custom cursor
3. Hover over links - should see pointer cursor
4. If not working, check:
   - File names are correct (case-sensitive)
   - Files are in `assets/` folder
   - File format is PNG
   - Clear browser cache

## Browser Support

Custom cursors work in:
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓

If the browser doesn't support custom cursors, it will fallback to the system cursor automatically.
