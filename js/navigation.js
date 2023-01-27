const navbarLight = `<div class="container">
    <div class="navbar-logo">
        <img src="images/logo-circle-black.png" alt="" />
    </div>
    <div class="navbar-items">
      <a href="http://" class="nav-links">Home</a>
      <div class="dropdown">
        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Service HP</button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Samsung</a></li>
          <li><a class="dropdown-item" href="#">Apple</a></li>
          <li><a class="dropdown-item" href="#">Oppo</a></li>
          <li><a class="dropdown-item" href="#">Realme</a></li>
          <li><a class="dropdown-item" href="#">Narzo</a></li>
          <li><a class="dropdown-item" href="#">Vivo</a></li>
          <li><a class="dropdown-item" href="#">Xiaomi</a></li>
          <li><a class="dropdown-item" href="#">Poco</a></li>
        </ul>
      </div>
      <a href="http://" class="nav-links">Location</a>
      <a href="http://" class="nav-links">Contact Us</a>
    </div>
    <div class="navbar-button"></div>
  </div>`;

document.querySelector("#myNav").innerHTML = navbarLight;

let scrollPosition = 0;

window.addEventListener("scroll", function () {
  if (scrollPosition > this.scrollY) {
    $("#myNav").css("top", "0");
  } else {
    $("#myNav").css("top", "-100px");
  }
  scrollPosition = this.scrollY;
});
