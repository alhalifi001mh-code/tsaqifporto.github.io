document.addEventListener("DOMContentLoaded", () => {
  // Fade-in section saat discroll
  const sections = document.querySelectorAll("section");

  if (sections.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
  }

  // Smooth scroll untuk navigasi
  const navLinks = document.querySelectorAll(".nav-right a");
  if (navLinks.length > 0) {
    navLinks.forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }
});
