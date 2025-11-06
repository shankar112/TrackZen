const body = document.body;
const themeToggleBtn = document.getElementById("theme-toggle");

function setTheme(mode) {
  body.setAttribute("data-theme", mode);
  localStorage.setItem("trackzen:theme", mode);
}

function initTheme() {
  const saved = localStorage.getItem("trackzen:theme") || "dark";
  setTheme(saved);
}

themeToggleBtn.addEventListener("click", () => {
  const current = body.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

document.addEventListener("DOMContentLoaded", initTheme);
