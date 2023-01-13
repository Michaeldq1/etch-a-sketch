'use strict';

function generateBoxes() {
    board.textContent = '';
    let boxesPerRow = boxSizeSlider.value;

    for (let i = 0; i < (boxesPerRow * boxesPerRow); i++) {
        let box = document.createElement('div');
        box.style.width = `${board.clientWidth / boxesPerRow}px`;
        box.style.height = `${board.clientHeight / boxesPerRow}px`;
        box.classList.add('box');  
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
    colorMode = true;
    rainbowMode = false;
    eraserMode = false;
    colorBoxes();
}

function enableRainbowMode() {
    colorModeButton.style.border = '';
    rainbowModeButton.style.border = '2px solid black';
    eraserButton.style.border = '';
    colorMode = false;
    rainbowMode = true;
    eraserMode = false;
    colorBoxes();
}

function enableEraser() {
    colorModeButton.style.border = '';
    rainbowModeButton.style.border = '';
    eraserButton.style.border = '2px solid black';
    colorMode = false;
    rainbowMode = false;
    eraserMode = true;
    colorBoxes();
}

function colorBoxes() {
    const boxes = document.querySelectorAll('#board div');

    boxes.forEach((element) => {
        if (colorMode === true) {
            element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `${colorPicker.value}`;
            });
        } else if (rainbowMode === true) {
            const randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `${randomColor}`;
            });
        } else if (eraserMode === true) {
            let eraserColor = board.style.backgroundColor;
            element.addEventListener('mouseover', () => {
            element.style.backgroundColor = eraserColor;
            });
        }
    });
}

function changeColor() {
    let newColor = colorPicker.value;
    let inputForms = document.querySelectorAll('input');

    board.style.border = `25px solid ${newColor}`;
    
    for (const form of inputForms) {
        form.style.accentColor = newColor;
    }
}