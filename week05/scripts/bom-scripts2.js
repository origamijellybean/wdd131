const inputRef = document.querySelector('#favchap');
const buttonRef = document.querySelector('button');
const listRef = document.querySelector('ul');
let chaptersArray = getChapterList() || [];

//for each chapter in the array, displays it
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//adds a new chapter when the add chapter button is clicked
buttonRef.addEventListener('click', () => {
    //adds a new chapter only if the input has data
    if (inputRef.value !== "") {
        //displays the input
        displayList(inputRef.value);
        //adds input to chapter list
        chaptersArray.push(inputRef.value);
        //puts the chapter into local storage
        setChapterList();
        //resets input
        inputRef.value = "";
        //resets input as the focus
        inputRef.focus();
    }
});

function displayList(chapter) {
    //creates a list item
    let liNew = document.createElement('li');
    //creates a button item
    let buttonDel = document.createElement('button');
    //puts the input text into the list element
    liNew.textContent = chapter;
    //puts an x as the button content
    buttonDel.textContent = "❌";
    //puts the delete button into the list item
    buttonDel.classList.add("delete");
    liNew.append(buttonDel);
    //puts the list item into the list
    listRef.append(liNew);
    //adds an event listener onto the delete button
    buttonDel.addEventListener('click', function () {
        //removes the list item from the list
        listRef.removeChild(liNew);
        //deletes the chapter from the list
        deleteChapter(liNew.textContent);
        //resets the input as the focus
        inputRef.focus();
    });
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("bomlist"));
}

function setChapterList() {
    localStorage.setItem("bomlist", JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}