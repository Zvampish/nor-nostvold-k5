function showHamburger() {
  let x = document.getElementById("hamburgermenu");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}