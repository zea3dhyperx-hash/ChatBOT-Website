document.addEventListener("DOMContentLoaded", () => {
  // Highlight current nav link based on URL
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const contactForm = document.querySelector("form[data-contact]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name") || "friend";
      const status = contactForm.querySelector("[data-status]");
      status.textContent = `Thanks, ${name}! We received your message and will reply within one business day.`;
      status.style.color = "#22d3ee";
      contactForm.reset();
    });
  }
});
