const navbarLight = `<div class="container">
    <div class="navbar-logo">
        <img src="images/logo-circle-black.png" alt="" />
    </div>
    <div class="nav-items">
      <a href="http://" class="nav-links">Home</a>
      <a href="http://" class="nav-links">Location</a>
      <a href="http://" class="nav-links">Contact Us</a>
    </div>
    <div class="navbar-button">
    <button type="button" class="btn-show"><i class="fa-solid fa-bars-staggered"></i></button>
    <button type="button" class="btn-hide"><i class="fa-solid fa-xmark"></i></button>
    </div>
  </div>`;

document.querySelector("#myNav").innerHTML = navbarLight;

let scrollPosition = 0;
let width = screen.width;

window.addEventListener("scroll", function () {
  if (width > 575.98) {
    if (scrollPosition > this.scrollY) {
      $("#myNav").css("top", "0");
    } else {
      $("#myNav").css("top", "-100px");
    }
    scrollPosition = this.scrollY;
  }
});
