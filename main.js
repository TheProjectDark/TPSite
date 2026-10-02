"use strict";
const btn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
if (btn && sidebar) {
    btn.addEventListener("click", () => {
        const isOpen = sidebar.classList.toggle("active");
        btn.setAttribute("aria-expanded", String(isOpen));
    });
    document.addEventListener("click", (e) => {
        const target = e.target;
        if (!sidebar.contains(target) && target !== btn) {
            sidebar.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            sidebar.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        }
    });
}
