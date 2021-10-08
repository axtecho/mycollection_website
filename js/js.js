/* const urlParams = new URLSearchParams(window.location.search);
const urlQ = urlParams.get("q"); */
let url = "https://kea2semester-e216.restdb.io/rest/disccollection";

const options = {
  headers: {
    "x-apikey": "615d83068597142da1745455",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleData(data);
  })

  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(discs) {
  console.log(discs);
  discs.forEach(discgolf);
}

/* function artpiece(pieceofart) {
  const template = document.querySelector("#ourtemplate").content;

  const copy = template.cloneNode(true);
  copy
    .querySelector(".artlist a")
    .setAttribute("href", "artpiece.html?id=" + pieceofart._id);
  copy.querySelector(".artistname").textContent = pieceofart.artist;
  copy.querySelector(".artname").textContent = pieceofart.titel;
  copy.querySelector("img").src = pieceofart.img_url;

  const parent = document.querySelector(".grid");

  parent.appendChild(copy);
} */

function discgolf(pieceofdisc) {
  const template = document.querySelector("#thistemplate").content;
  const copy = template.cloneNode(true);
  /*  copy
    .querySelector(".thistemplate a")
    .setAttribute("href", "pieceofdisc.html?id=" + pieceofdisc._id); */
  copy.querySelector(".discname").textContent = pieceofdisc.name;
  copy.querySelector(".type").textContent = pieceofdisc.type;
  copy.querySelector("img").src = pieceofdisc.img_url_large;

  const parent = document.querySelector(".maincontent");

  parent.appendChild(copy);
}

/* ------------------Filterjava---------------------------- */

/* change TYPE cirkelcolor */
document.querySelector(".putoptions").addEventListener("click", addFillput);
document
  .querySelector(".midrangeoptions")
  .addEventListener("click", addFillmid);
document
  .querySelector(".fairwayoptions")
  .addEventListener("click", addFillfair);
document
  .querySelector(".distanceoptions")
  .addEventListener("click", addFilldis);

function addFillput() {
  document.querySelector(".putcirkel").classList.toggle("cirkelfill");
}
function addFillmid() {
  document.querySelector(".midcirkel").classList.toggle("cirkelfill");
}

function addFillfair() {
  document.querySelector(".faircirkel").classList.toggle("cirkelfill");
}

function addFilldis() {
  document.querySelector(".discirkel").classList.toggle("cirkelfill");
}
/* change PLASTIC  cirkelcolor */
document.querySelector(".baseoption").addEventListener("click", addFillbase);
document.querySelector(".goldoption").addEventListener("click", addFillgold);
document.querySelector(".optooption").addEventListener("click", addFillopto);
document.querySelector(".optoxoption").addEventListener("click", addFilloptox);

function addFillbase() {
  document.querySelector(".basecirkel").classList.toggle("cirkelfill");
}
function addFillgold() {
  document.querySelector(".goldcirkel").classList.toggle("cirkelfill");
}

function addFillopto() {
  document.querySelector(".optocirkel").classList.toggle("cirkelfill");
}

function addFilloptox() {
  document.querySelector(".optoxcirkel").classList.toggle("cirkelfill");
}

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

/* ----------------TYPE  FILTERS MENU---------------------------- */

document.querySelector(".filter").addEventListener("click", openFilterMenu);

function openFilterMenu() {
  document.querySelector("#filterjs").classList.add("open");
}
document.querySelector("#a1").addEventListener("click", closeFiltermenu);

function closeFiltermenu() {
  document.querySelector("#filterjs").classList.remove("open");
}

/* ------------------FILTER OPTIONS------------------ */

document.querySelector(".openicon").addEventListener("click", typeheight);

function typeheight() {
  document.querySelector(".type-borderdiv").classList.toggle("open-type");
  console.log("hey");
}

/* ------------------PLASTIC FILTER OPTIONS------------------ */

document.querySelector(".openicon2").addEventListener("click", plasticheight);

function plasticheight() {
  document.querySelector(".plastic-borderdiv").classList.toggle("open-type");
  console.log("hey");
}

/* ------------------Manufacturer FILTER OPTIONS------------------ */

document
  .querySelector(".openicon3")
  .addEventListener("click", manufacturerheight);

function manufacturerheight() {
  document.querySelector(".manu-borderdiv").classList.toggle("open-type3");
  console.log("hey");
}
