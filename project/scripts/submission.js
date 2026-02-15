    const purchasesElement = document.querySelector("h2");
    let purchases = JSON.parse(localStorage.getItem("purchases")) || 0;
    purchases++;
    localStorage.setItem("purchases", JSON.stringify(purchases));
    purchasesElement.textContent = `You have made ${purchases} purchases`;