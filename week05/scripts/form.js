const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();
currentyear.innerHTML = `© <span>${today.getFullYear()} Tyson Hunter, Utah</span>`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
let submission = JSON.parse(localStorage.getItem("submissions")) || 0;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelector = document.querySelector("select");
const form = document.querySelector("form");
products.forEach(product => {
    let productElement = document.createElement("option");
    productElement.textContent = product.name;
    productElement.value = product.id;
    productSelector.appendChild(productElement);
});

form.addEventListener("submit", () => {
    submission++;
    localStorage.setItem("submissions", JSON.stringify(submission));
});