// Smooth scroll for floating DJ booking button
document.addEventListener("DOMContentLoaded", () => {
  const bookingBtn = document.querySelector(".floating-booking-btn");
  
  if (bookingBtn) {
    bookingBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector("#requestBooking");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Also handle the floating DJ button at the bottom
  const floatingDjButton = document.querySelector(".floating-dj-button");
  
  if (floatingDjButton) {
    floatingDjButton.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector("#requestBooking");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Form submission handling
  const bookingForm = document.getElementById("requestBookingForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  const spinner = document.getElementById("spinner");

  if (bookingForm) {
    bookingForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      // Show spinner
      if (spinner) {
        spinner.style.display = "inline";
      }

      // Hide any previous messages
      if (successMessage) successMessage.style.display = "none";
      if (errorMessage) errorMessage.style.display = "none";

      try {
        const formData = new FormData(bookingForm);
        const response = await fetch(bookingForm.action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        // Hide spinner
        if (spinner) {
          spinner.style.display = "none";
        }

        if (response.ok) {
          // Show success message
          if (successMessage) {
            successMessage.style.display = "block";
          }
          // Reset form
          bookingForm.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            if (successMessage) {
              successMessage.style.display = "none";
            }
          }, 5000);
        } else {
          // Show error message
          if (errorMessage) {
            errorMessage.style.display = "block";
          }
        }
      } catch (error) {
        // Hide spinner
        if (spinner) {
          spinner.style.display = "none";
        }
        // Show error message
        if (errorMessage) {
          errorMessage.style.display = "block";
        }
      }
    });
  }
});
// Get the two elements we need to work with
const hamburgerButton = document.getElementById("hamburger-button");
const navMenu = document.getElementById("nav-menu");

// Add a click "listener" to the hamburger button
hamburgerButton.addEventListener("click", () => {
    // When clicked, add/remove the "is-active" class
    // from BOTH the hamburger and the nav menu
    hamburgerButton.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
});
