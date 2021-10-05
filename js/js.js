/* --------------- COLLAPSED SIDE BAR -------------------
 */
document.querySelector(".open-slide").addEventListener("click", openSlideMenu);

function openSlideMenu() {
  document.getElementById("side-menu").style.width = "300px";

  document.getElementById("main").style.paddingRight = "300px";
}

document.querySelector("#close").addEventListener("click", closeSlideMenu);

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";

  document.getElementById("main").style.paddingRight = "0";
}
