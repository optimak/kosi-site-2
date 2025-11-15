# Image Management System

This website uses a dynamic image management system with Cloudinary CDN integration for optimized image delivery.

## Image Hosting

All images are hosted on **Cloudinary** (cloud-based image management and delivery service). This provides:
- Automatic image optimization and compression
- Responsive image delivery (different sizes for different devices)
- Fast global CDN delivery
- Automatic format conversion (WebP, AVIF when supported)

## Cloudinary Setup

Your Cloudinary account details:
- **Cloud Name**: `dx8cmsjdw`
- **Base URL**: `https://res.cloudinary.com/dx8cmsjdw/image/upload/`

## How to Add Images

### 1. Upload Images to Cloudinary

1. Log in to your Cloudinary account
2. Upload your images to the media library
3. Note the public ID of each uploaded image

### 2. Update the Image Configuration

Edit `images-config.js` to add your Cloudinary image URLs:

```javascript
// Example: Adding a new artwork
'new-artwork-id': {
    image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/your_image_public_id.jpg',
    fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/your_image_public_id.jpg',
    alt: 'Description of your artwork',
    title: 'ARTWORK TITLE'
}
```

### 3. Cloudinary URL Format

The URLs use Cloudinary transformations:
- **Grid/Thumbnail images**: `w_400,q_80,f_auto` (width 400px, quality 80%, auto format)
- **Full-size images**: `w_1200,q_80,f_auto` (width 1200px, quality 80%, auto format)

### 4. Image Naming Convention

Use descriptive, consistent public IDs in Cloudinary:
- Use lowercase with underscores or hyphens: `opium_nnzolb`, `the_alchemist_jnxsts`
- Keep the Cloudinary-generated suffix if present

## Features

### ✅ Automatic Image Loading
- All images are loaded dynamically from the configuration
- No need to manually update HTML files when adding new artwork
- Images are served from Cloudinary CDN for fast loading

### ✅ Responsive Images
- Cloudinary automatically optimizes images for different screen sizes
- Automatic format conversion (WebP, AVIF) for modern browsers
- Lazy loading implemented for better performance

### ✅ Easy Management
- Centralized image configuration in `images-config.js`
- Easy to add new artwork or gallery items
- Automatic categorization for gallery filtering
- Cloudinary dashboard for managing uploaded images

### ✅ SEO Friendly
- Proper alt text for all images
- Descriptive titles and captions
- Optimized loading with Cloudinary transformations

## Quick Start

1. **Upload your first image to Cloudinary:**
   - Log in to Cloudinary dashboard
   - Upload your artwork image
   - Copy the public ID (e.g., `my_artwork_abc123`)

2. **Add to configuration:**
   - Open `images-config.js`
   - Add a new entry in the `IMAGES.artwork` object:
   ```javascript
   'my-artwork': {
       image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/my_artwork_abc123.jpg',
       fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/my_artwork_abc123.jpg',
       alt: 'Description of artwork',
       title: 'ARTWORK TITLE'
   }
   ```

3. **Test the changes:**
   - Refresh your website
   - Your image should appear automatically

## Image Specifications

### Recommended Upload Sizes:
- **Main Artwork**: Upload at high resolution (2000px+ width recommended)
- **Gallery Images**: Upload at high resolution (1500px+ width recommended)
- Cloudinary will automatically resize based on the transformation parameters

### Cloudinary Transformations Used:
- **Grid/Thumbnail**: `w_400,q_80,f_auto` - 400px width, 80% quality, auto format
- **Full View**: `w_1200,q_80,f_auto` - 1200px width, 80% quality, auto format
- **About Page**: `w_400,q_95,f_auto` - 400px width, 95% quality, auto format

### Supported Upload Formats:
- **JPEG**: Best for photographs and complex artwork
- **PNG**: Best for artwork with transparency
- **WebP**: Automatically converted by Cloudinary when supported
- Cloudinary supports many other formats and will convert as needed

## Configuration Structure

The `images-config.js` file contains three main sections:

1. **`IMAGES.artwork`**: Main artwork displayed on the portfolio/index page
2. **`IMAGES.gallery`**: Gallery images organized by category (covers, portraits, traditional)
3. **`IMAGES.about`**: About page specific images

Each image entry requires:
- `image`: Cloudinary URL for thumbnail/grid view
- `fullImage`: Cloudinary URL for full-size view
- `alt`: Alt text for accessibility
- `title`: Display title

## Troubleshooting

### Images Not Loading?
1. Verify the Cloudinary URLs in `images-config.js` are correct
2. Check that the public ID matches what's in your Cloudinary account
3. Check browser console for any CORS or 404 errors
4. Verify your Cloudinary account is active and images are publicly accessible

### Images Too Large/Slow?
1. Cloudinary automatically optimizes, but you can adjust quality:
   - Change `q_80` to `q_70` for smaller file sizes
   - Adjust width parameters (`w_400` to `w_300` for thumbnails)
2. Ensure you're using the correct transformation for the use case
3. Check Cloudinary dashboard for image optimization suggestions

### Need to Add New Categories?
1. Add new categories to the `IMAGES.gallery` object in `images-config.js`
2. Update the `getCategoryForImage()` function in `script.js` if needed
3. Add corresponding filter buttons in `gallery.html`

## Local Image Folders

The `images/` folder structure exists for reference and potential future use, but currently all images are served from Cloudinary. If you need to switch to local images:

1. Place images in the appropriate folders (`images/artwork/`, `images/gallery/`, `images/about/`)
2. Update `images-config.js` to use local paths instead of Cloudinary URLs
3. Remove Cloudinary transformations from the URLs

Your website is now ready for easy image management with Cloudinary! 🎨
