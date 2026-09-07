const h = document.querySelector(".site-header");
if (h) addEventListener("scroll", () => h.classList.toggle("is-scrolled", scrollY > 8), { passive: true });
