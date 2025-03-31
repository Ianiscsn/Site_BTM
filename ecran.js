function checkScreenSize() {
    if (window.innerWidth < 768) {
        document.querySelectorAll(".contact1, .contact2, .contact3").forEach(el => el.remove());
    }
}

document.addEventListener("DOMContentLoaded", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
