let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
const namesB = names.filter((name)=> name.charAt(0) === ("J"));
const printit = document.querySelector("#N1");
printit.innerHTML = `${namesB}`;

let namesLength = names.map((name) => name.length);
const printit2 = document.querySelector("#N2");
printit2.innerHTML = `${namesLength}`;

// Both of these lines work
let averageLength = names.reduce((totalString, name) => totalString + name).length / names.length;
// let averageLength = names.reduce((total, name) => total + name.length, 0)/names.length;
const printit3 = document.querySelector("#N3");
printit3.innerHTML = `${averageLength}`;