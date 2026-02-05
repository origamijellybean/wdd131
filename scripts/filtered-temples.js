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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Houston, Texas",
    location: "Spring, Texas, United States",
    dedicated: "2000, August, 26",
    area: 33970,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/320x200/houston-temple01.jpg"
    },
    {
    templeName: "Seoul Korea",
    location: "Seoul, Seoul-teukbyeolsi, South Korea",
    dedicated: "1985, December, 14",
    area: 28057,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/320x200/seoul-korea-temple-lds-424784-wallpaper.jpg"
    },
    {
    templeName: "Brigham City, Utah",
    location: "Brigham City, Utah",
    dedicated: "2012, September, 23",
    area: 36000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/320x200/brigham-city-temple-lds-1078623-wallpaper.jpg"
    },
    {
    templeName: "Logan, Utah",
    location: "Logan, Utah",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/320x200/logan-temple-768083-wallpaper.jpg"
    },
    {
    templeName: "Salt Lake, Utah",
    location: "Salk Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/320x200/salt-lake-temple-37762.jpg"
    },
    // Add more temple objects here...
];

const cardParent = document.querySelector("div");
const filterName = document.querySelector("h1");

const Home = document.querySelector("#Home");
Home.addEventListener("click", () => {
    createCards(temples, "Home");
});
const Old = document.querySelector("#Old");
Old.addEventListener("click", () => {
    createCards(temples.filter(temple => (parseInt(temple.dedicated) < 1900)), "Old");
});
const New = document.querySelector("#New");
New.addEventListener("click", () => {
    createCards(temples.filter(temple => (parseInt(temple.dedicated) >= 2000)), "New");
});
const Large = document.querySelector("#Large");
Large.addEventListener("click", () => {
    createCards(temples.filter(temple => temple.area >= 90000), "Large");
});
const Small = document.querySelector("#Small");
Small.addEventListener("click", () => {
    createCards(temples.filter(temple => temple.area <= 10000), "Small");
});

createCards(temples, "Home");

function createCards(templeList, fltrNm) {
    filterName.innerHTML = fltrNm;
    cardParent.innerHTML = "";
    templeList.forEach(temple => {
        const templeCard = document.createElement("article");
        templeCard.classList.add("templeCard");
        const templeName = document.createElement("h2");
        templeName.classList.add("name");
        const factList = document.createElement("ul");
        factList.classList.add("facts");

        const templeLocation = document.createElement("li");
        templeLocation.classList.add("location");
        const templeDate = document.createElement("li");
        templeDate.classList.add("dedication");
        const templeArea = document.createElement("li");
        templeArea.classList.add("size");

        const factTitleLocation = document.createElement("h3");
        factTitleLocation.textContent = "Location: ";
        const factTitleDate = document.createElement("h3");
        factTitleDate.textContent = "Dedication: ";
        const factTitleArea = document.createElement("h3");
        factTitleArea.textContent = "Area: ";

        const factDataLocation = document.createElement("p");
        factDataLocation.innerHTML = "";
        const factDataDate = document.createElement("p");
        factDataDate.innerHTML = "";
        const factDataArea = document.createElement("p");
        factDataArea.innerHTML = "";
        
        const templeWrap = document.createElement("div");
        const templePic = document.createElement("img");

        templeName.innerHTML = temple.templeName;
        templeCard.appendChild(templeName);

        factDataLocation.innerHTML = temple.location;
        templeLocation.appendChild(factTitleLocation);
        templeLocation.appendChild(factDataLocation);
        factList.appendChild(templeLocation);

        factDataDate.innerHTML = temple.dedicated;
        templeDate.appendChild(factTitleDate);
        templeDate.appendChild(factDataDate);
        factList.appendChild(templeDate);

        factDataArea.innerHTML = `${temple.area} sq ft`;
        templeArea.appendChild(factTitleArea);
        templeArea.appendChild(factDataArea);
        factList.appendChild(templeArea);

        templeCard.appendChild(factList);

        templePic.src = temple.imageUrl;
        templePic.alt = `Picture of ${temple.templeName} temple`;
        templePic.loading = "lazy";
        templePic.width = "300";
        templePic.height = "auto";
        templeWrap.appendChild(templePic);
        templeCard.appendChild(templeWrap);

        cardParent.appendChild(templeCard);
    });
}