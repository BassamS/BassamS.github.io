// Navbar
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 2) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function hideMenu() {
    let menuOpen = document.querySelector(".menu-btn").checked;

    if ((menuOpen = true)) {
        document.querySelector(".menu-btn").checked = false;
    }
}
window.addEventListener("scroll", hideMenu);
