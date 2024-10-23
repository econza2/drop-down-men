import { dropDown } from "./dropDown.js";

const hiddenDiv = document.querySelector(".menu-items");

hiddenDiv.style.display = "none";

const menuButton = document.querySelector(".menu-button");
menuButton.style.width = "100%";
menuButton.style.height = "50px";

const items = document.querySelectorAll(".item");

items.forEach((current) => {
  current.style.display = "block";
  current.style.width = "100%";
  current.style.height = "50px";
  current.style.backgroundColor = "rebeccapurple";
});

dropDown(menuButton, hiddenDiv);
