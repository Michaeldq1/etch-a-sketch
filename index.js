const board = document.getElementById('board');
const rangeSlider = document.querySelector('input');

window.addEventListener('load', generateBoxes);
rangeSlider.addEventListener('change', generateBoxes);

function generateBoxes() {
    let numberOfBoxes = rangeSlider.value;
    board.textContent = '';

    for (let i = 0; i < (numberOfBoxes * numberOfBoxes); i++) {
        let box = document.createElement('div');
        box.style.width = `${board.clientWidth / numberOfBoxes}px`;
        box.style.height = `${board.clientHeight / numberOfBoxes}px`;
        board.appendChild(box);
    }
}