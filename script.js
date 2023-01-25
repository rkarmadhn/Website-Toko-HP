// Navbar Component
const navbar = document.querySelector("#navbar");
const navbarComponent = `<div class="container-xl">
    <div class="navbar-brand">
      <a href="http://"><img src="images/logo-title.png" alt="logo-black"/></a>
    </div>
    <div class="navbar-items">
      <div class="head-menu">
      <div class="head-menu-logo">
      <a href="http://"><img src="images/logo-title.png" alt="logo-black"/></a>
        </div>
        <button class="btn-hide"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="list-menu">
        <a href="http://" class="links">Link 1</a>
        <a href="http://" class="links">Link 2</a>
        <a href="http://" class="links">Link 3</a>
        <a href="http://" class="links">Link 4</a>
        <a href="http://" class="links">Link 5</a>
      </div>
    </div>
    <button class="btn-menu"><i class="fa-solid fa-bars"></i></button>
  </div>`;
navbar.innerHTML = navbarComponent;

// Button in navbar
const btnMenu = document.querySelector(".btn-menu");
const btnHide = document.querySelector(".btn-hide");
const navItems = document.querySelector(".navbar-items");
btnMenu.onclick = () => {
  navItems.classList.add("show");
};
btnHide.onclick = () => {
  navItems.classList.remove("show");
};

// Scroll efect
const width = screen.width;
let scrollPosition = 0;
window.addEventListener("scroll", function () {
  if (width > 576) {
    if (scrollPosition > this.scrollY) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
  }

  scrollPosition = this.scrollY;
});


