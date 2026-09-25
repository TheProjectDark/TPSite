"use strict";
const btn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
if (btn && sidebar) {
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
        const target = e.target;
        if (!sidebar.contains(target) && target !== btn) {
            sidebar.classList.remove("active");
        }
    });
}
