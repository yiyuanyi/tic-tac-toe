const gameBoard = (() => {
    const counters = ['X', 'O', 'O', 'X', 'X', 'O', 'X', 'O', 'X'];
    return { counters };
})();

const displayController = (() => {
    
})();

const player = ((name) => {
    //set player name to name value from input
})

function renderGameBoard() {
    const tiles = document.querySelectorAll('.tile');
    for (let i = 0; i < tiles.length; i++) {
        const placedCounter = gameBoard.counters[i];
        const para = document.createElement('p');
        para.innerHTML = placedCounter;
        para.classList.add('counter');
        tiles[i].appendChild(para);
    }
}
