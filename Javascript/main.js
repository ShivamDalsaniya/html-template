const menuToggle = document.getElementById("menu-toggle");
const navInfo = document.querySelector(".nav-info");

menuToggle.addEventListener("click", () => {
  navInfo.classList.toggle("active");
});
