const ham = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const navBtn = document.querySelectorAll(".nav-btnn");
const closeNav = document.querySelector(".close-nav");

function nav() {
  if (navBar.classList.contains("hide")) {
    navBar.classList.remove("hide");
  } else {
    navBar.classList.add("hide");
  }
}
function close(btn) {
  btn.addEventListener("click", function () {
    if (navBar.classList.contains("hide")) {
      navBar.classList.remove("hide");
    } else {
      navBar.classList.add("hide");
    }
  });
}
console.log(closeNav);
ham.addEventListener("click", nav);
navBtn.forEach(close);
closeNav.addEventListener("click", nav);
