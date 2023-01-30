const navbarLight = `<div class="container">
    <div class="navbar-logo">
    <a href="index.html" class="text-logo">RC</a>
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

// Button Navbar
$(".btn-show").click(function () {
  $(".btn-show").hide();
  $(".btn-hide").show();
  $(".nav-items").css("left", "0");
  $("#myNav").addClass("add-border");
});

$(".btn-hide").click(function () {
  $(".btn-hide").hide();
  $(".btn-show").show();
  $(".nav-items").css("left", "-100%");
  $("#myNav").removeClass("add-border");
});
