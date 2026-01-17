const inputRef = document.querySelector('#favchap');
const buttonRef = document.querySelector('button');
const listRef = document.querySelector('ul');

buttonRef.addEventListener('click', function () {
    if (inputRef.value.trim() !== "") {
        const liNew = document.createElement('li');
        const buttonDel = document.createElement('button');
        liNew.textContent = inputRef.value;
        buttonDel.textContent = "❌";
        liNew.append(buttonDel);
        listRef.append(liNew);
        inputRef.focus();
    }
});

listRef.addEventListener('click', (e) => {
    listRef.removeChild(e.target.parentElement);
    inputRef.focus();
    inputRef.value = '';
});
