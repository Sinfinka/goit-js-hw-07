"use strict";
const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

const createBoxes = () => {
  const input = document.querySelector("input");
  const boxCount = parseInt(input.value);

  if (isNaN(boxCount) || boxCount < 1 || boxCount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";

  let size = 30;

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);

    size += 10;
  }

  input.value = "";
};

const destroyBoxes = () => {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
};

document.querySelector("[data-create]").addEventListener("click", createBoxes);
document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
