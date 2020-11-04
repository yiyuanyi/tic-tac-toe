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
    console.log(tiles.length);
    for (let i = 0; i < tiles.length; i++) {
        let placedCounter = gameBoard.counters[i];
        console.log(gameBoard.counters[i]);
    }
}
