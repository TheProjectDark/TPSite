const btn = document.getElementById("menuBtn") as HTMLButtonElement | null;
const sidebar = document.getElementById("sidebar") as HTMLDivElement | null;

if (btn && sidebar) {
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}