const board = document.getElementById('board');
const button = document.querySelector('.boxes');
let numberOfBoxes = 3;

button.addEventListener('click', () => {
    board.textContent = '';
    for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
        let box = document.createElement('div');
        box.style.width = `${board.clientWidth / numberOfBoxes}px`;
        box.style.height = `${board.clientHeight / numberOfBoxes}px`;
        board.appendChild(box);
    }
})
