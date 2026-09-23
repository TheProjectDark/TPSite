"use strict";
const btn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
if (btn && sidebar) {
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}
