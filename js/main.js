document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for floating button
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

  // Booking form submission with spinner + success/error messages
  const form = document.getElementById("requestBookingForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  const spinner = document.getElementById("spinner");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      // Show spinner
      if (spinner) spinner.style.display = "inline-block";

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          if (successMessage) successMessage.style.display = "block";
          if (errorMessage) errorMessage.style.display = "none";
          form.reset();
        } else {
          if (successMessage) successMessage.style.display = "none";
          if (errorMessage) errorMessage.style.display = "block";
        }
      } catch (err) {
        if (successMessage) successMessage.style.display = "none";
        if (errorMessage) errorMessage.style.display = "block";
      } finally {
        if (spinner) spinner.style.display = "none";
      }
    });
  }
});
