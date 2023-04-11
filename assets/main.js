console.log("Sample JavaScript #5 HW #17");

let container = null;
let prevIndicator = null;

function createContainer() {
  elemDiv = document.createElement("div");
  elemDiv.setAttribute("id", "carousel");
  document.querySelector("body").appendChild(elemDiv);
  container = document.querySelector("#carousel");
}

function createSlides(n) {
  slidesUl = document.createElement("ul");
  slidesUl.setAttribute("class", "slides");

  for (i = 0; i < n; i++) {
    let slideItem = document.createElement("li");
    let slideLink = document.createElement("a");

    slideItem.setAttribute(
      "class",
      i === 0 ? "slides__item active" : "slides__item"
    );
    slideLink.setAttribute("href", "#");
    slideItem.appendChild(slideLink);
    slidesUl.appendChild(slideItem);
  }

  container.appendChild(slidesUl);
}

function creaateIndicators(n) {
  indicatorsDiv = document.createElement("div");
  indicatorsDiv.setAttribute("class", "indicators");

  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement("span");

    indicatorsItem.setAttribute(
      "class",
      i === 0 ? "indicators__item active" : "indicators__item"
    );
    indicatorsItem.setAttribute("data-slide-to", i);
    indicatorsDiv.appendChild(indicatorsItem);
  }

  container.appendChild(indicatorsDiv);
}

function createControls() {
  controlsDiv = document.createElement("div");
  controlsDiv.setAttribute("class", "controls");

  for (i = 0; i < 3; i++) {
    let controlItem = document.createElement("div");
    let controlIcon = document.createElement("i");
    const defItemClass = "controls__item";
    const defIconClass = "fas";

    switch (i) {
      case 0:
        controlItem.setAttribute("class", `${defItemClass} controls__prev`);
        controlIcon.setAttribute("class", `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlItem.setAttribute("class", `${defItemClass} controls__next`);
        controlIcon.setAttribute("class", `${defIconClass} fa-chevron-right`);
        break;
      case 2:
        controlItem.setAttribute("class", `${defItemClass} controls__pause`);
        controlIcon.setAttribute("class", `${defIconClass} fa-play`);
        break;
    }
    controlItem.appendChild(controlIcon);
    controlsDiv.appendChild(controlItem);
  }
  container.appendChild(controlsDiv);
}

function createStyle() {
  styleTag = document.createElement("style");
  let styleCode = `
  body {
    font-family: Arial;
    box-sizing: border-box;
    margin: 0;
  }

  #carousel {
    margin: 0 auto;
    width: 900px;
    height: 300px;
  }

  .slides {
    position: relative;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .slides__item {
    position: absolute;
    width: 100%;
    z-index: 0;
    opacity: 0;
  }

  .slides__item:nth-of-type(1) {
    background-color: blue;
  }

  .slides__item:nth-of-type(2) {
    background-color: orange;
  }

  .slides__item:nth-of-type(3) {
    background-color: green;
  }

  .slides__item:nth-of-type(4) {
    background-color: yellow;
  }

  .slides__item:nth-of-type(5) {
    background-color: purple;
  }

  .controls {
    display: flex;
    position: relative;
    margin: 0 auto;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .controls__item {
    display: block;
    padding: 20px;
    cursor: pointer;
  }

  .indicators {
    display: flex;
    margin: 0 auto;
    gap: 10px;
    justify-content: center;
  }

  .indicators__item {
    z-index: 1;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: black;
    margin: 5px;
  }

  .active {
    opacity: 1;
  }
  `;

  styleTag.innerHTML = styleCode;
  container.appendChild(styleTag);
}

function indicatorsHandler(e) {
  let pointer = e.target;

  if (pointer.classList.contains("indicators__item")) {
    pointer.style.backgroundColor = "red";

    if (prevIndicator !== 0) prevIndicator.removeAttribute("style");

    prevIndicator = pointer;
  }
}

function setListener() {
  let indicatorsDiv = document.querySelector("div.indicators");

  indicatorsDiv.addEventListener("click", indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
  createContainer();
  createSlides(slidesCount);
  creaateIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}

createCarousel(5);
