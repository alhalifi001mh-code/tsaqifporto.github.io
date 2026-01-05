// Animasi skill bar saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar span");
  skillBars.forEach(bar => {
    const targetWidth = bar.style.getPropertyValue("--target-width");
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.transition = "width 1.5s ease-in-out";
      bar.style.width = targetWidth;
    }, 300);
  });
});

// Validasi form kontak
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    e.preventDefault();
  } else {
    alert("Thank you for your message!");
  }
});

// Smooth scroll untuk navigasi
document.querySelectorAll(".nav-right a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
}); 