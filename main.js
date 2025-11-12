// Video hover playback for project and gallery videos
document.addEventListener('DOMContentLoaded', function() {
    
    // Force landing video to play
    const landingVideo = document.getElementById('landing-video');
    if (landingVideo) {
        landingVideo.muted = true;
        landingVideo.play().catch(function(error) {
            console.log('Video autoplay failed:', error);
            // Add a click listener to play on user interaction
            document.addEventListener('click', function playVideo() {
                landingVideo.play();
                document.removeEventListener('click', playVideo);
            }, { once: true });
        });
    }
    
    // Select all videos in project cards and galleries
    const videos = document.querySelectorAll('.project-media video, .gallery-media video');
    
    videos.forEach(video => {
        // Play on hover
        video.addEventListener('mouseenter', function() {
            this.play();
        });
        
        // Pause when mouse leaves
        video.addEventListener('mouseleave', function() {
            this.pause();
            this.currentTime = 0;
        });
        
        // Click to play/pause
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
    
    // Mobile menu toggle (for future implementation)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Form submission handler (placeholder)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Here you would typically send the data to a server
            // For now, we'll just log it
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Show success message (you can customize this)
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Smooth scroll for anchor links
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
    
    // Image lazy loading effect
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
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
});
