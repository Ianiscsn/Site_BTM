function checkScreenSize() {
    if (window.innerWidth < 768) {
        document.querySelectorAll(".contact1, .contact2, .contact3, .texte_trans, .texte_dem, .texte_mess, .container-bigimage").forEach(el => el.remove());
    }
}

document.addEventListener("DOMContentLoaded", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
