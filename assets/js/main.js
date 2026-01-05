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

  // Inject chat widget across all pages from a single config point
  // injectChatWidget();
});

function injectChatWidget() {
  const widgetConfig = {
    src: "https://widgets.leadconnectorhq.com/loader.js",
    resources: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
    widgetId: "695baee03a2b4b52fc6d0f5d",
  };

  if (document.querySelector('script[data-widget-id="' + widgetConfig.widgetId + '"]')) {
    return; // already injected
  }

  const script = document.createElement("script");
  script.src = widgetConfig.src;
  script.async = true;
  script.dataset.resourcesUrl = widgetConfig.resources;
  script.dataset.widgetId = widgetConfig.widgetId;
  document.body.appendChild(script);
}
