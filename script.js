const gameBoard = (() => {
    const counters = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
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
        let placedCounter = gameBoard.counters[i];
        tiles[i].innerHTML = placedCounter;
    }
}
