# How to Add Your Projects

## Where to Insert Project Code

Projects are added in TWO places:

### 1. HOME PAGE (home.html)
Location: Lines 30-55 (inside the `<div class="work-grid">` section)

### 2. PROJECTS PAGE (projects.html)
Location: Lines 21-70 (inside the `<section class="projects-grid">` section)

---

## Project Code Templates

### For HOME PAGE (Featured Work Grid)

Copy and paste this template for each project:

```html
<a href="projects.html" class="work-item">
    <div class="work-image halftone">
        <img src="assets/projects/PROJECT-FOLDER-NAME/cover.jpg" alt="PROJECT NAME">
    </div>
    <h3 class="work-title">PROJECT NAME</h3>
    <p class="work-meta">Category / 2024</p>
</a>
```

### For PROJECTS PAGE (Full Project Display)

#### For Image Projects:
```html
<div class="project-card">
    <div class="project-media halftone">
        <img src="assets/projects/PROJECT-FOLDER-NAME/cover.jpg" alt="PROJECT NAME">
    </div>
    <div class="project-info">
        <h2 class="project-name">PROJECT NAME</h2>
        <p class="project-description">Brief description of the project, client, and what was created.</p>
        <p class="project-tags">Category • Discipline • Year</p>
        <a href="#" class="project-link">VIEW DETAILS →</a>
    </div>
</div>
```

#### For Video Projects:
```html
<div class="project-card">
    <div class="project-media halftone">
        <video loop muted playsinline>
            <source src="assets/projects/PROJECT-FOLDER-NAME/video.mp4" type="video/mp4">
        </video>
    </div>
    <div class="project-info">
        <h2 class="project-name">PROJECT NAME</h2>
        <p class="project-description">Brief description of the project.</p>
        <p class="project-tags">Motion Design • Video • Year</p>
        <a href="#" class="project-link">VIEW DETAILS →</a>
    </div>
</div>
```

---

## File Structure for Each Project

Create a folder for each project:

```
assets/projects/
├── project-name-1/
│   ├── cover.jpg          ← Main image
│   ├── image1.jpg         ← Additional images (optional)
│   ├── image2.jpg
│   └── video.mp4          ← Video (optional)
├── project-name-2/
│   └── cover.jpg
└── project-name-3/
    └── video.mp4
```

---

## Example with Real Project

Let's say you have a project called "Nike Branding":

### 1. Create folder:
```
assets/projects/nike-branding/
└── cover.jpg
```

### 2. Add to home.html:
```html
<a href="projects.html" class="work-item">
    <div class="work-image halftone">
        <img src="assets/projects/nike-branding/cover.jpg" alt="Nike Branding">
    </div>
    <h3 class="work-title">NIKE BRANDING</h3>
    <p class="work-meta">Brand Identity / 2024</p>
</a>
```

### 3. Add to projects.html:
```html
<div class="project-card">
    <div class="project-media halftone">
        <img src="assets/projects/nike-branding/cover.jpg" alt="Nike Branding">
    </div>
    <div class="project-info">
        <h2 class="project-name">NIKE BRANDING</h2>
        <p class="project-description">Complete brand refresh for Nike's regional campaign, including logo variations, typography system, and brand guidelines.</p>
        <p class="project-tags">Brand Identity • Art Direction • 2024</p>
        <a href="#" class="project-link">VIEW DETAILS →</a>
    </div>
</div>
```

---

## Ready to Add Your Projects?

Send me your project names and I'll generate the exact code for you!

Include:
1. Project name
2. Type (image or video)
3. Category/discipline
4. Brief description
5. Year
