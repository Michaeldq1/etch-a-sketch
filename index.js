const board = document.getElementById('board');
const button = document.querySelector('.boxes');
const boardWidth = 400;
const boardHeight = 400;
let numberOfBoxes = 8;

button.addEventListener('click', () => {
    for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
        let box = document.createElement('div');1
        box.style.width = `${boardWidth / numberOfBoxes}px`;
        box.style.height = `${boardWidth / numberOfBoxes}px`;
        board.appendChild(box);
        console.log(i);
    }
})
