const board = document.getElementById('board');
const rangeSlider = document.querySelector('input');
console.log(rangeSlider.value);

rangeSlider.addEventListener('change', () => {
    let numberOfBoxes = rangeSlider.value;
    board.textContent = '';
    for (let i = 0; i < (numberOfBoxes * numberOfBoxes); i++) {
        let box = document.createElement('div');
        box.style.width = `${board.clientWidth / numberOfBoxes}px`;
        box.style.height = `${board.clientHeight / numberOfBoxes}px`;
        board.appendChild(box);
        console.log(numberOfBoxes);
        console.log(board.clientWidth);
        console.log(board.clientHeight);

    }
});