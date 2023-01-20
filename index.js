'use strict';

const board = document.getElementById('board');
const squareOption = document.getElementById('square');
const circleOption = document.getElementById('circle');
const colorPicker = document.getElementById('color-picker');
const colorModeButton = document.getElementById('color-mode');
const rainbowModeButton = document.getElementById('rainbow-mode');
const eraserButton = document.getElementById('eraser');
const clearButton = document.getElementById('clear');
const boxSizeSlider = document.querySelector('.slider');
const toggleThemeButton = document.querySelector('.theme-toggle');

let colorMode = false;
let rainbowMode = false;
let eraserMode = false;

window.addEventListener('DOMContentLoaded', () => {
    generateBoxes();
    enableColorMode();
});

squareOption.addEventListener('click', changeShape);

circleOption.addEventListener('click', changeShape);

colorModeButton.addEventListener('click', enableColorMode);

rainbowModeButton.addEventListener('click', enableRainbowMode);

eraserButton.addEventListener('click', enableEraser);

colorPicker.addEventListener('change', changeColor);

clearButton.addEventListener('click', () => {
    generateBoxes();
    changeShape();
});

boxSizeSlider.addEventListener('change', () => {
    generateBoxes();
    changeShape();
});

toggleThemeButton.addEventListener('click', setTheme);