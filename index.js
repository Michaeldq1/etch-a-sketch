const board = document.getElementById('board');
const boxSizeSlider = document.querySelector('.slider');
const circleOption = document.getElementById('circle');
const squareOption = document.getElementById('square');
const colorModeButton = document.getElementById('color-mode');
const colorPicker = document.getElementById('color-picker');
const rainbowModeButton = document.getElementById('rainbow-mode');
const eraserButton = document.getElementById('eraser');

window.addEventListener('DOMContentLoaded', () => {
    enableColorMode();
    generateBoxes();
});

boxSizeSlider.addEventListener('change', generateBoxes);

squareOption.addEventListener('click', changeShape);

circleOption.addEventListener('click', changeShape);

colorModeButton.addEventListener('click', enableColorMode);

rainbowModeButton.addEventListener('click', enableRainbowMode);

eraserButton.addEventListener('click', enableEraser);

colorPicker.addEventListener('change', changeColor);


  

function generateBoxes() {
    let numberOfBoxes = boxSizeSlider.value;
    board.textContent = '';

    for (let i = 0; i < (numberOfBoxes * numberOfBoxes); i++) {
        let box = document.createElement('div');
        box.style.width = `${board.clientWidth / numberOfBoxes}px`;
        box.style.height = `${board.clientHeight / numberOfBoxes}px`;
        box.classList.add('box');
        changeShape();     
        board.appendChild(box);
    }

    colorBoxes();
}

function changeShape(){
    let boxes = document.querySelectorAll('#board div');
    
    boxes.forEach((element) => {
        if (circleOption.checked) {
            element.style.borderRadius = '50%';
        } else if (squareOption.checked) {
            element.style.borderRadius = '0%';
        }
    })
}

function enableColorMode() {
    colorModeButton.style.border = '2px solid black';
    rainbowModeButton.style.border = '';
    eraserButton.style.border = '';
}

function enableRainbowMode() {
    colorModeButton.style.border = '';
    rainbowModeButton.style.border = '2px solid black';
    eraserButton.style.border = '';
}

function enableEraser() {
    colorModeButton.style.border = '';
    rainbowModeButton.style.border = '';
    eraserButton.style.border = '2px solid black';
}

function changeColor() {
    let newColor = colorPicker.value;
    let inputForms = document.querySelectorAll('input');

    board.style.border = `25px solid ${newColor}`;
    
    for (const form of inputForms) {
        form.style.accentColor = newColor;
    }
}

function colorBoxes() {
    const boxes = document.querySelectorAll('#board div');

    boxes.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `${colorPicker.value}`;
        });
    })
}