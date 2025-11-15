# Image Management System

This website now has a dynamic image management system that makes it easy to add and organize your artwork images.

## Folder Structure

```
images/
├── artwork/          # Main artwork images
├── gallery/          # Gallery images organized by category
└── about/           # About page specific images
```

## How to Add Images

### 1. Add Your Images to the Folders

Place your images in the appropriate folders:
- **artwork/**: Your main artwork images (recommended: 800x1000px or similar)
- **gallery/**: Gallery images (recommended: 600x800px for portraits, 600x900px for covers)
- **about/**: About page images like your studio photo

### 2. Update the Image Configuration

Edit `images-config.js` to point to your actual images:

```javascript
// Example: Replace placeholder with your actual image
'ethereal-visions': {
    image: 'images/artwork/ethereal-visions.jpg',        // Your image
    alt: 'Ethereal Visions - A surreal digital painting...',
    title: 'ETHEREAL VISIONS'
}
```

### 3. Image Naming Convention

Use descriptive, consistent names:
- `ethereal-visions.jpg` (main artwork)
- `fantasy-cover-1.jpg` (gallery image)
- `self-portrait.png` (about page image)

## Features

### ✅ Automatic Image Loading
- All images are loaded dynamically from the configuration
- No need to manually update HTML files when adding new artwork

### ✅ Responsive Images
- Optimized image loading
- Automatic fallback to placeholders during development

### ✅ Easy Management
- Centralized image configuration
- Easy to add new artwork or gallery items
- Automatic categorization for gallery filtering

### ✅ SEO Friendly
- Proper alt text for all images
- Descriptive titles and captions
- Optimized loading

## Quick Start

1. **Add your first image:**
   - Save your artwork as `images/artwork/my-artwork.jpg`
   - Create a thumbnail as `images/thumbnails/my-artwork-thumb.jpg`
   - Update the configuration in `images-config.js`

2. **Test the changes:**
   - Refresh your website
   - Your image should appear automatically

3. **Add more images:**
   - Follow the same pattern for each new artwork
   - Update the configuration file accordingly

## Image Specifications

### Recommended Sizes:
- **Main Artwork**: 800x1000px (4:5 ratio)
- **Gallery Images**: 600x800px (portraits) or 600x900px (covers)
- **About Page**: 500x600px

### File Formats:
- **JPEG**: Best for photographs and complex artwork
- **PNG**: Best for artwork with transparency
- **WebP**: Best for modern browsers (smaller file sizes)

## Troubleshooting

### Images Not Loading?
1. Check that the file paths in `images-config.js` match your actual files
2. Ensure image files are in the correct folders
3. Check browser console for any error messages

### Images Too Large?
1. Optimize your images before uploading
2. Use appropriate thumbnail sizes
3. Consider using WebP format for better compression

### Need to Add New Categories?
1. Add new categories to the `IMAGES.gallery` object
2. Update the `getCategoryForImage()` function in `script.js`
3. Add corresponding filter buttons in `gallery.html`

## Development Mode

The system automatically generates placeholder images during development. To disable this and use your real images:

1. Comment out or remove this line in `images-config.js`:
   ```javascript
   // ImageManager.generatePlaceholders();
   ```

2. Add your actual images to the folders
3. Update the configuration file with your image paths

Your website is now ready for easy image management! 🎨
