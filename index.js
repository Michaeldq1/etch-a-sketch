const board = document.getElementById('board');
const rangeSlider = document.querySelector('.slider');
const circleOption = document.getElementById('circle');
const squareOption = document.getElementById('square');
const grid = document.getElementById('grid');

window.addEventListener('load', generateBoxes);

rangeSlider.addEventListener('change', generateBoxes);

squareOption.addEventListener('click', generateBoxes);

circleOption.addEventListener('click', changeShape);

function generateBoxes() {
    let numberOfBoxes = rangeSlider.value;
    board.textContent = '';

    for (let i = 0; i < (numberOfBoxes * numberOfBoxes); i++) {
        let box = document.createElement('div');
        box.style.width = `${board.clientWidth / numberOfBoxes}px`;
        box.style.height = `${board.clientHeight / numberOfBoxes}px`;
        changeShape();       
        board.appendChild(box);
    }
}

function changeShape(){
    let boxes = document.querySelectorAll('#board div');
    Array.from(boxes);
    for (const box of boxes) {
        box.classList.toggle('circles', circleOption.checked);
    }
}