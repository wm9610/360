let fruitArray = [];
const btn = document.getElementById('btn');
btn.addEventListener('click', addFruit);

function addToArray(value) {
    fruitArray.push(value);
}

function addToDisplay(value) {
    const body = document.querySelector('body');
    if(!(!!document.querySelector('#fruit-container'))) {
        const fruitContainer = document.createElement('div');
        fruitContainer.innerHTML = `<h1>List of Fruits:</h1><ol></ol>`;
        fruitContainer.setAttribute('id', 'fruit-container');
        body.appendChild(fruitContainer);
    }
    const fruitList = document.querySelector('#fruit-container ol');
    const fruitItem = document.createElement('li');
    fruitItem.textContent = value;
    fruitList.appendChild(fruitItem);
}

function addFruit() {
    let newFruit = document.querySelector('#fruit').value;
    newFruit = newFruit.toUpperCase();
    addToArray(newFruit);
    addToDisplay(newFruit);
    console.log(newFruit, fruitArray);
}