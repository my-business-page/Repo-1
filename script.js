document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".profile, .section-heading, .link-card, .feature-note, .newsletter, .footer");
  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = Math.min(index % 5, 4) * 55 + "ms";
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const form = document.getElementById("signup-form");
  const message = document.getElementById("form-message");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "This is a visual demo — connect your email platform to collect sign-ups.";
    form.querySelector("button").setAttribute("aria-label", "Demo form submitted");
  });
});