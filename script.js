document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple feedback alert
      alert("Thanks for reaching out, Trishanthi will get back to you soon!");

      // Optional: clear form fields after submission
      contactForm.reset();
    });
  }
});
