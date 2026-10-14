const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");

function setMenuState(isOpen) {
  menu.classList.toggle("hidden", !isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

function toggleMenu() {
  const isOpen = !menu.classList.contains("hidden");
  setMenuState(!isOpen);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});
