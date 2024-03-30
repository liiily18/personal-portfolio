function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    // to open the class
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}