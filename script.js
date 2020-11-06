const gameBoard = (() => {
    const counters = ['X', 'O', 'O', 'X', 'X', 'O', 'X', 'O', 'X'];
    return { counters };
})();

const displayController = (() => {
    //render enter player names, play computer, reset button etc.
})();

const player = ((name) => {
    //set player name to name value from input
})

function renderGameBoard() {
    const tiles = document.querySelectorAll('.tile');
    for (let i = 0; i < tiles.length; i++) {
        
    }
}

    const board = document.querySelector('#board');
    board.addEventListener('click', function(e) {
        const counterLocation = e.target;
        const para = document.createElement('p');
        para.innerHTML = 'X';
        para.classList.add('counter');
        e.target.appendChild(para);
    })

