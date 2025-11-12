# Art Portfolio Website

A minimal zine-inspired portfolio website with halftone aesthetic and bold typography.

## Project Structure

```
portfolio/
├── index.html              # Landing page with video
├── home.html              # Main home page
├── projects.html          # Client work showcase
├── personal.html          # Personal art gallery
├── about.html             # About page
├── contact.html           # Contact form
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js           # JavaScript interactions
└── assets/               # Media files
    ├── landing-video.mp4  # Landing page video
    ├── landing-video.mov  # Alternative format
    ├── projects/          # Project folders
    │   ├── project1/
    │   ├── project2/
    │   └── ...
    └── personal/          # Personal art files
```

## Setup Instructions

### 1. Add Your Content

#### Landing Video
- Place your landing video in `assets/` folder
- Name it `landing-video.mp4` or `landing-video.mov`
- Recommended: 1920x1080px, under 10MB for web performance

#### Project Images/Videos
- Create folders for each project in `assets/projects/`
- Example: `assets/projects/project-name/`
- Add cover images and media files

#### Personal Art
- Add artwork to `assets/personal/`
- Supports images (.jpg, .png) and videos (.mp4)

### 2. Customize Text Content

Replace placeholder text in all HTML files:
- `YOUR NAME` - Your name/brand
- `your.email@example.com` - Your email
- Social media links
- Project descriptions
- About page content

### 3. Update CSS Variables (Optional)

In `css/style.css`, you can customize colors:

```css
:root {
    --primary-black: #0a0a0a;
    --off-white: #f5f5f5;
    --accent-red: #ff0000;
}
```

## GitHub Setup & Deployment

### 1. Initialize Git Repository

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `portfolio` or `yourusername.github.io`)
3. Don't initialize with README (you already have one)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/yourusername/repository-name.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

**Note:** If you name your repository `yourusername.github.io`, it will be accessible at `https://yourusername.github.io/`

## File Organization Tips

### Organizing Project Folders

Each project should have its own folder structure:

```
assets/projects/project-name/
├── cover.jpg           # Main cover image
├── image1.jpg          # Additional images
├── image2.jpg
└── video.mp4           # Optional video
```

Then reference them in `projects.html`:

```html
<img src="assets/projects/project-name/cover.jpg" alt="Project Name">
```

### Asset Optimization

- **Images**: Optimize for web (max 2000px width, 80-90% quality)
- **Videos**: Compress for web, use H.264 codec
- Use tools like:
  - [TinyPNG](https://tinypng.com/) for images
  - [HandBrake](https://handbrake.fr/) for videos

## Features

- ✨ Minimal zine aesthetic with halftone effects
- 🎬 Video landing page
- 📱 Fully responsive design
- 🎨 Separate galleries for client projects and personal art
- 📧 Contact form (requires backend setup for functionality)
- 🔗 Social media integration
- ⚡ Smooth interactions and hover effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Updating Content

### Adding New Projects

1. Create a new project folder in `assets/projects/`
2. Add images/videos to the folder
3. Edit `projects.html` and duplicate a project card
4. Update the image sources and text

### Adding Personal Art

1. Add files to `assets/personal/`
2. Edit `personal.html` and duplicate a gallery item
3. Update the image source and caption

## Contact Form Setup

The contact form is currently a front-end only form. To make it functional, you can:

1. **Use a service like:**
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [EmailJS](https://www.emailjs.com/)

2. **Or set up your own backend** with:
   - Node.js + Express
   - PHP mail function
   - Python Flask/Django

## License

© 2024 Your Name. All Rights Reserved.

## Questions?

For questions or issues, please refer to the documentation or create an issue in the GitHub repository.
