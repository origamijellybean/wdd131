const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();
currentyear.innerHTML = `© ${today.getFullYear()} Tyson Hunter, Utah`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;