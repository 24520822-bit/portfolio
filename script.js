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

menuButton.addEventListener("click", toggleMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.classList.contains("hidden")) {
    setMenuState(false);
    menuButton.focus();
  }
});
