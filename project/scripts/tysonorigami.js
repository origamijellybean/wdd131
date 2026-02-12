const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();
currentyear.innerHTML = `© <span>${today.getFullYear()} Tyson Hunter, Utah</span>`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const hamburger = document.querySelector("#menu");
const navigation = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("visible");
    hamburger.classList.toggle("visible");
})

const history = document.querySelector("#history");
const styles = document.querySelector("#styles");
const paper = document.querySelector("#paper");
const designs = document.querySelector("#designs");
history.addEventListener("click", () => {
    // navigation.classList.toggle("visible");
    // hamburger.classList.toggle("visible");
})
styles.addEventListener("click", () => {
    // navigation.classList.toggle("visible");
    // hamburger.classList.toggle("visible");
})
paper.addEventListener("click", () => {
    // navigation.classList.toggle("visible");
    // hamburger.classList.toggle("visible");
})
designs.addEventListener("click", () => {
    // navigation.classList.toggle("visible");
    // hamburger.classList.toggle("visible");
})