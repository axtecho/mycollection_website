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
  document.getElementById("filterjs").style.width = "200px";
}

document.querySelector("#closetoo").addEventListener("click", closeFiltermenu);
console.log("hola");
function closeFiltermenu() {
  document.getElementById("filterjs").style.width = "0";
}
