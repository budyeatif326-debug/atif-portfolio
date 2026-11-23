const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Open and close the mobile navigation menu.
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.textContent = "☰";
  });
});

// Show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();
