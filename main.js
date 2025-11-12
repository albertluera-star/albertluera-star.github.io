// Mobile-optimized JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        // Toggle menu
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') && 
                !navToggle.contains(e.target) && 
                !navLinks.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ==========================================
    // VIDEO HANDLING
    // ==========================================
    const videos = document.querySelectorAll('.project-media video, .gallery-media video');
    
    videos.forEach(video => {
        // Play on hover (desktop)
        video.addEventListener('mouseenter', function() {
            this.play();
        });
        
        // Pause when mouse leaves
        video.addEventListener('mouseleave', function() {
            this.pause();
            this.currentTime = 0;
        });
        
        // Click/tap to play/pause (mobile-friendly)
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
    
    // ==========================================
    // FORM HANDLING
    // ==========================================
    const contactForm = document.querySelector('.contact-form');
    const bookingForm = document.querySelector('.booking-form');
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form will submit to Formspree
            // Add loading state
            const submitBtn = this.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.textContent = 'SENDING...';
                submitBtn.disabled = true;
            }
        });
    }
    
    // Booking form
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            // Form will submit to Formspree
            // Add loading state
            const submitBtn = this.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.textContent = 'SUBMITTING...';
                submitBtn.disabled = true;
            }
        });
    }
    
    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ==========================================
    // LAZY LOADING IMAGES
    // ==========================================
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // ==========================================
    // TOUCH DEVICE OPTIMIZATIONS
    // ==========================================
    if ('ontouchstart' in window) {
        // Add touch-device class for CSS
        document.documentElement.classList.add('touch-device');
        
        // CMYK effect on tap for mobile
        const galleryItems = document.querySelectorAll('.gallery-item-home');
        galleryItems.forEach(item => {
            let tapped = false;
            item.addEventListener('touchstart', function(e) {
                if (!tapped) {
                    e.preventDefault();
                    this.classList.add('tapped');
                    tapped = true;
                    
                    // Remove tap effect after 500ms
                    setTimeout(() => {
                        this.classList.remove('tapped');
                        tapped = false;
                    }, 500);
                }
            });
        });
    }
    
    // ==========================================
    // PERFORMANCE MONITORING
    // ==========================================
    if ('performance' in window && 'PerformanceObserver' in window) {
        // Monitor Largest Contentful Paint
        try {
            const po = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.log('LCP:', entry.startTime);
                }
            });
            po.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {
            // Silently fail if not supported
        }
    }
});
