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
});

if (window.location.pathname.includes("store.html")) {
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
};

if (window.location.pathname.includes("info-page.html")) {
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
    });
    stylesBtn.addEventListener("click", () => {
        stylesBtn.classList.toggle("visible");
        styles.classList.toggle("visible");
    });
    paperBtn.addEventListener("click", () => {
        paperBtn.classList.toggle("visible");
        paper.classList.toggle("visible");
    });
    designsBtn.addEventListener("click", () => {
        designsBtn.classList.toggle("visible");
        designs.classList.toggle("visible");
    });
}

if (window.location.pathname.includes("submission.html")) {
    const purchasesElement = document.querySelector("h2");
    let purchases = JSON.parse(localStorage.getItem("purchases")) || 0;
    purchases++;
    localStorage.setItem("purchases", JSON.stringify(purchases));
    purchasesElement.textContent = `You have made ${purchases} purchases`;
}