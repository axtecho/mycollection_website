/* --------------- COLLAPSED SIDE BAR -------------------
 */
document.querySelector(".open-slide").addEventListener("click", openSlideMenu);

function openSlideMenu() {
  document.getElementById("side-menu").style.width = "300px";
}

document.querySelector("#close").addEventListener("click", closeSlideMenu);

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
}

/* ----------------FILTERS MENU---------------------------- */

document.querySelector(".filter").addEventListener("click", openFilterMenu);

function openFilterMenu() {
  document.querySelector("#filterjs").classList.add("open");
}
document.querySelector("#a1").addEventListener("click", closeFiltermenu);

function closeFiltermenu() {
  document.querySelector("#filterjs").classList.remove("open");
}
