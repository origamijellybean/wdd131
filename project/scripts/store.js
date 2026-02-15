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
const productSelector = document.querySelector("select");
const form = document.querySelector("form");
    
const bookSelector = document.querySelector("#product");
const prices = document.querySelectorAll(".rawprice");
const taxes = document.querySelector(".tax");
const shippingCost = document.querySelector(".shipping");
const totalCost = document.querySelector(".total");
const extraForms = document.querySelectorAll(".expandedForm");
    
    
populateSelectList();

bookSelector.addEventListener('change', () => {
        extraForms.forEach(extraForm => {
            extraForm.classList.remove("invisible");
        });
        calculateTotal();
});

function populateSelectList() {
        products.forEach(product => {
            let productElement = document.createElement("option");
            productElement.textContent = product.name;
            productElement.value = product.id;
            productSelector.appendChild(productElement);
        });
}

function calculateTotal() {
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
}