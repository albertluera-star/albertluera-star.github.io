# Albert Luera - Art Portfolio

A minimal punk aesthetic portfolio website showcasing graphic design work, client projects, and personal art.

## 🎨 Design Philosophy

This site embraces a bold, minimal punk aesthetic featuring:
- High contrast black and white color scheme
- Punk pink (#FF10F0) and electric blue (#00FFFF) accent colors
- Bold sans-serif typography (Arial Black, Helvetica)
- Sharp borders and shadows for visual impact
- Clean, structured layouts with maximum impact

## 📁 Site Structure

```
├── landing.html       - Entry page with video background
├── index.html         - Home page (client-focused)
├── projects.html      - Client work gallery
├── personal.html      - Personal art gallery
├── about.html         - About/bio page
├── contact.html       - Contact information and form
├── css/
│   └── style.css      - Main stylesheet
├── assets/
│   ├── videos/        - Video files (.mp4, .mov)
│   └── images/        - Image files for galleries
```

## 🎬 Adding Your Content

### 1. Landing Page Video

Add your intro video to `assets/videos/`:
- Recommended: MP4 format for best compatibility
- Also supports MOV format
- Update the video source in `landing.html`:

```html
<video class="video-background" autoplay muted loop playsinline>
    <source src="assets/videos/intro.mp4" type="video/mp4">
    <source src="assets/videos/intro.mov" type="video/quicktime">
</video>
```

### 2. Projects Gallery

To add your project images to `projects.html`:

1. Add images to `assets/images/`
2. Replace placeholder images in the gallery:

```html
<div class="gallery-item">
    <img src="assets/images/your-project.jpg" alt="Project Description">
    <div class="gallery-item-overlay">
        <h3 class="gallery-item-title">PROJECT NAME</h3>
        <p>Brief description</p>
    </div>
</div>
```

For video content:
```html
<div class="gallery-item">
    <video loop muted>
        <source src="assets/videos/your-video.mp4" type="video/mp4">
    </video>
    <div class="gallery-item-overlay">
        <h3 class="gallery-item-title">PROJECT NAME</h3>
        <p>Brief description</p>
    </div>
</div>
```

### 3. Personal Art Gallery

Same process as Projects - update `personal.html` with your personal work images and videos.

### 4. About Page

Update the content in `about.html`:
- Replace the placeholder profile image
- Edit the text sections to tell your story
- Customize the services section

### 5. Contact Information

Update `contact.html` with your actual:
- Email address
- Social media links (Instagram, Behance, Twitter, LinkedIn)
- Location information

### 6. Social Media Links

Update social links throughout the site (they appear in footers and contact page):

```html
<a href="https://instagram.com/yourhandle" class="social-link">Instagram</a>
<a href="https://behance.net/yourhandle" class="social-link">Behance</a>
<a href="https://twitter.com/yourhandle" class="social-link">Twitter</a>
<a href="https://linkedin.com/in/yourhandle" class="social-link">LinkedIn</a>
```

## 🎨 Customizing Colors

To adjust the color scheme, edit the CSS variables in `css/style.css`:

```css
:root {
  --black: #000000;
  --white: #FFFFFF;
  --red: #FF0000;
  --punk-pink: #FF10F0;
  --electric-blue: #00FFFF;
}
```

## 📝 Making the Contact Form Work

The contact form is currently a placeholder. To make it functional:

**Option 1: Formspree (Easiest)**
- Sign up at formspree.io
- Replace the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Netlify Forms**
- Add `netlify` attribute to the form:
```html
<form name="contact" method="POST" data-netlify="true">
```

**Option 3: Custom Backend**
- Set up your own email handling service

## 🚀 Deployment

This site is designed for GitHub Pages:

1. Push all files to your repository
2. Go to Settings > Pages
3. Select your branch (usually `main`)
4. Your site will be live at: `https://albertluera-star.github.io`

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 Best Practices

1. **Images**: Use high-quality images (recommended 1200x1200px for gallery items)
2. **Videos**: Keep file sizes reasonable (under 10MB when possible)
3. **Formats**: JPG for photos, PNG for graphics with transparency
4. **Optimization**: Compress images before uploading for faster loading

## 🔧 Future Enhancements

Consider adding:
- Lightbox/modal for full-size image viewing
- Filtering for project categories
- Blog or news section
- Newsletter signup
- Enhanced animations and transitions

## 📄 License

All design and code © 2024 Albert Luera
