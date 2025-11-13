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
    form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    event: document.getElementById("event").value
  };

  try {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.success) {
      alert("✅ Thank you! Your booking request has been submitted.");
      modal.style.display = "none";
      form.reset();
    } else {
      alert("⚠️ Error submitting booking. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Server error. Please try again later.");
  }
});


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
// Track button clicks for analytics
document.addEventListener("DOMContentLoaded", () => {
  const bookingBtn = document.querySelector(".floating-booking-btn");
  if (bookingBtn) {
    bookingBtn.addEventListener("click", () => {
      console.log("DJ Booking button clicked!");
      // Example: send event to Google Analytics or custom tracker
      // gtag('event', 'click', { 'event_category': 'Booking', 'event_label': 'DJ Bookings Button' });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBookingBtn");
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("closeBookingBtn");
  const form = document.getElementById("bookingForm");

 document.addEventListener("DOMContentLoaded", () => {
  const bookingBtn = document.querySelector(".floating-booking-btn");
  bookingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#requestBooking").scrollIntoView({ behavior: "smooth" });
  });
});


  // Close when clicking outside modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle form submission
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const modal = document.getElementById("bookingModal");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        alert("✅ Thanks bud! Your booking request has been submitted.");
        modal.style.display = "none";
        form.reset();
      } else {
        alert("⚠️ technology amirite? Error submitting booking. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error. Please try again later.");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const modal = document.getElementById("bookingModal");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.style.display = "none";          // hide form
        successMessage.style.display = "block"; // show success message
        setTimeout(() => {
          modal.style.display = "none";       // close modal after 3s
          form.reset();
          form.style.display = "block";       // reset form visibility
          successMessage.style.display = "none"; // hide success message
        }, 3000);
      } else {
        alert("⚠️ Error submitting booking. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error. Please try again later.");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const bookingBtn = document.querySelector(".floating-booking-btn");
  bookingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#requestBooking").scrollIntoView({ behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("requestBookingForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
        form.reset();
      } else {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
      }
    } catch (err) {
      console.error(err);
      successMessage.style.display = "none";
      errorMessage.style.display = "block";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("requestBookingForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  const spinner = document.getElementById("spinner");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // Show spinner
    spinner.style.display = "inline-block";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
        form.reset();
      } else {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
      }
    } catch (err) {
      console.error(err);
      successMessage.style.display = "none";
      errorMessage.style.display = "block";
    } finally {
      // Hide spinner after response
      spinner.style.display = "none";
    }
  });
});

