const board = document.getElementById('board');
const boxSizeSlider = document.querySelector('.slider');
const circleOption = document.getElementById('circle');
const squareOption = document.getElementById('square');
const colorModeButton = document.getElementById('color-mode');
const colorPicker = document.getElementById('color-picker');

window.addEventListener('DOMContentLoaded', generateBoxes);

boxSizeSlider.addEventListener('change', generateBoxes);

squareOption.addEventListener('click', generateBoxes);

circleOption.addEventListener('click', changeShape);

colorModeButton.addEventListener('click', enableColorMode);

colorPicker.addEventListener('change', changeColor);

function generateBoxes() {
    let numberOfBoxes = boxSizeSlider.value;
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
    for (const box of boxes) {
        box.classList.toggle('circles', circleOption.checked);
    }
}

function enableColorMode() {

}

function changeColor() {
    let newColor = colorPicker.value;
    let inputForms = document.querySelectorAll('input');

    board.style.border = `25px solid ${newColor}`;
    
    for (const form of inputForms) {
        form.style.accentColor = newColor;
    }
}