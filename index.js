const board = document.getElementById('board');
const button = document.querySelector('.boxes');
const boardWidth = 400;
const boardHeight = 400;
let numberOfBoxes = 40;

button.addEventListener('click', () => {
    board.textContent = '';
    for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
        let box = document.createElement('div');1
        box.style.width = `${boardWidth / numberOfBoxes}px`;
        box.style.height = `${boardWidth / numberOfBoxes}px`;
        board.appendChild(box);
    }
})
