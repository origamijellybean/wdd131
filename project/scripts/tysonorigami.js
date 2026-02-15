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

const products = [
  {
    id: "or-temple-bk",
    name: "Temple book",
    price: 14.99
  },
  {
    id: "or-ctrflr-bk",
    name: "Creatures & Flowers book",
    price: 12.99
  },
  {
    id: "or-symbol-bk",
    name: "Scripture symbols book",
    price: 13.99
  }
];
if (window.location.pathname.includes("store.html")) {
    const productSelector = document.querySelector("select");
    const form = document.querySelector("form");
    products.forEach(product => {
        let productElement = document.createElement("option");
        productElement.textContent = product.name;
        productElement.value = product.id;
        productSelector.appendChild(productElement);
    });
}
const bookSelector = document.querySelector("#product");
const prices = document.querySelectorAll(".rawprice");
const taxes = document.querySelector(".tax");
const shippingCost = document.querySelector(".shipping");
const totalCost = document.querySelector(".total");
const extraForms = document.querySelectorAll(".expandedForm");

bookSelector.addEventListener('change', () => {
    extraForms.forEach(extraForm => {
        extraForm.classList.remove("invisible");
    });
    let bookSelection = products.find(book => book.id === bookSelector.value);
    prices.forEach(price => {
        price.textContent = `Price (before shipping and tax): $${bookSelection.price}`;
    });
    let tax = bookSelection.price * 0.0695;
    taxes.textContent = `Taxes: $${tax.toFixed(2)}`;
    let shipping = 5.00;
    shippingCost.textContent = `Shipping: $${shipping.toFixed(2)}`;
    let total = bookSelection.price + tax + shipping;
    totalCost.textContent = `Total Cost: $${total.toFixed(2)}`;
});

const historyBtn = document.querySelector("#history");
const stylesBtn = document.querySelector("#styles");
const paperBtn = document.querySelector("#paper");
const designsBtn = document.querySelector("#designs");
const history = document.querySelector(".history");
const styles = document.querySelector(".styles");
const paper = document.querySelector(".paper");
const designs = document.querySelector(".designs");

historyBtn.addEventListener("click", () => {
    historyBtn.classList.toggle("visible");
    history.classList.toggle("visible");
    
})
stylesBtn.addEventListener("click", () => {
    stylesBtn.classList.toggle("visible");
    styles.classList.toggle("visible");
})
paperBtn.addEventListener("click", () => {
    paperBtn.classList.toggle("visible");
    paper.classList.toggle("visible");
})
designsBtn.addEventListener("click", () => {
    designsBtn.classList.toggle("visible");
    designs.classList.toggle("visible");
})

// Need to populate the store with items, and the form stuff. Need a list so consumer can click on items to add to cart list. When done, they need to be able to put in card information. Once done, a thank you message should be displayed, or on another page.