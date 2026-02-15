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