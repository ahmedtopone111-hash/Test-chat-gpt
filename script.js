const themeBtn = document.querySelector("#themeBtn");
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");
const backTop = document.querySelector("#backTop");

// Restore saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  themeBtn.textContent = "☾";
}

// Toggle theme
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight =
    document.body.classList.contains("light-theme");

  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeBtn.textContent = isLight ? "☾" : "☼";
});

// Mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuBtn.textContent =
    navLinks.classList.contains("open") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Command shortcut
document.addEventListener("keydown", event => {
  if (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === "k"
  ) {
    event.preventDefault();

    alert(
      "COMMAND DECK\n\n" +
      "1. Home\n" +
      "2. About\n" +
      "3. Projects\n" +
      "4. Contact\n\n" +
      "SECRET: Keep building. ✳"
    );
  }
});

// Secret interaction: type "ahmed"
let secretInput = "";

document.addEventListener("keydown", event => {
  if (event.key.length === 1) {
    secretInput += event.key.toLowerCase();
    secretInput = secretInput.slice(-5);

    if (secretInput === "ahmed") {
      alert("✳ SECRET UNLOCKED!\n\nWelcome to my digital world.");
      secretInput = "";
    }
  }
});

// Back to top
if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Dynamic copyright year
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
