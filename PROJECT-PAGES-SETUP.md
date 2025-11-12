# PROJECT DETAIL PAGES SETUP GUIDE

## ✅ What's Fixed

All image paths now use:
- `Assets/Projects/projectname/covers.webp` (for thumbnails)
- Ready for gallery images like `Assets/Projects/slap-city/slap-city-01.webp`

## How It Works Now

**Home Page** → Shows all 17 project thumbnails with CMYK effect
**Click thumbnail** → Goes to individual project detail page
**Project detail page** → Shows full gallery of images for that project

---

## Current Status

✅ Home page has all 17 projects with correct paths to `covers.webp`
✅ CMYK effect works on hover
✅ Template created for project detail pages
✅ CSS ready for project galleries

⚠️ **You need to create:** 17 individual project HTML pages

---

## Option 1: Simple Setup (Keep Current Flow)

**Keep links going to projects.html for now:**

Your home page thumbnails can link to the main projects page, and users can browse all projects there. This works fine and requires no additional setup!

To do this:
1. Open `home.html` in a text editor
2. Find: `href="project-[PLACEHOLDER].html"`
3. Replace ALL with: `href="projects.html"`

---

## Option 2: Full Setup (Individual Project Pages)

Create 17 separate HTML files for detailed project views with full galleries.

### Step 1: Create Project Files

Copy `project-template.html` 17 times and rename:
- `project-tpne.html`
- `project-slap-city.html`
- `project-nvrovr.html`
- `project-510-day.html`
- `project-big-fun.html`
- `project-bussdown.html`
- `project-concert-visuals.html`
- `project-in-a-dream.html`
- `project-king-most.html`
- `project-makeroom.html`
- `project-misc-art.html`
- `project-nightlife-residencies.html`
- `project-perra-xl.html`
- `project-radbird-llc.html`
- `project-secret-menu.html`
- `project-somar.html`
- `project-y2k-throwbacks.html`

### Step 2: Edit Each Project File

For example, `project-slap-city.html`:

```html
<title>Slap City Residency - Albert Luera</title>

<h1 class="project-title">SLAP CITY RESIDENCY</h1>
<p class="project-meta">Event Branding • Digital Promotion • 2015 – Present</p>
<p class="project-description-full">Creation of branding and promotional visuals (flyers/graphics) that drove engagement for the recurring "Slap City" nightlife residency in Oakland.</p>

<div class="project-gallery">
    <div class="gallery-item-detail">
        <img src="Assets/Projects/slap-city/slap-city-01.webp" alt="Slap City 1">
    </div>
    <div class="gallery-item-detail">
        <img src="Assets/Projects/slap-city/slap-city-02.webp" alt="Slap City 2">
    </div>
    <div class="gallery-item-detail">
        <img src="Assets/Projects/slap-city/slap-city-03.webp" alt="Slap City 3">
    </div>
    <!-- Add as many images as you have -->
</div>
```

### Step 3: Update Home Page Links

In `home.html`, find each project and update the link:

```html
<!-- Project 2: Slap City -->
<a href="project-slap-city.html" class="gallery-item-home">
```

Do this for all 17 projects.

---

## Quick Reference: Project Slugs

Use these exact names for the href links:

1. `project-tpne.html`
2. `project-slap-city.html`
3. `project-nvrovr.html`
4. `project-510-day.html`
5. `project-big-fun.html`
6. `project-bussdown.html`
7. `project-concert-visuals.html`
8. `project-in-a-dream.html`
9. `project-king-most.html`
10. `project-makeroom.html`
11. `project-misc-art.html`
12. `project-nightlife-residencies.html`
13. `project-perra-xl.html`
14. `project-radbird-llc.html`
15. `project-secret-menu.html`
16. `project-somar.html`
17. `project-y2k-throwbacks.html`

---

## Image Naming Convention

For each project's gallery images, use this pattern:

```
Assets/Projects/slap-city/
├── covers.webp              ← Thumbnail (already done!)
├── slap-city-01.webp        ← Gallery image 1
├── slap-city-02.webp        ← Gallery image 2
├── slap-city-03.webp        ← Gallery image 3
└── slap-city-04.webp        ← Gallery image 4
```

You can have as many images as you want per project (01, 02, 03... 10, 11, etc.)

---

## My Recommendation

**Start Simple:**
1. Keep all links going to `projects.html` for now
2. Your site works great as-is!
3. Later, when you have time, create individual project pages

**OR Go Full Setup:**
1. Create the 17 HTML files
2. Add your gallery images
3. Get the full immersive experience

Both approaches work! The CMYK effect on your home page is already 🔥

---

## What You Have Now

✅ Stunning home page with CMYK effect
✅ All 17 projects showing with correct image paths
✅ Bold typography  
✅ Professional layout
✅ Ready to add project detail pages whenever you want

Your site is looking amazing! 🎨
