"use strict";

const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const categoryNameText = category.querySelector("h2").textContent;
  const numberOfItems = category.querySelectorAll("ul li").length;
  console.log(categoryNameText);
  console.log(numberOfItems);
});
