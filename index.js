const board = document.getElementById('board');
const button = document.querySelector('.boxes');
let numberOfBoxes = 16;

button.addEventListener('click', () => {
    for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
        let box = document.createElement('div');
        board.appendChild(box);
        console.log(i);
    }
})
