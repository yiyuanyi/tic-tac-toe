const gameBoard = (() => {
    const markers = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];

})();

const displayController = (() => {

    //empty results array

    const renderButtons = () => {
        //render new game button
        //on click render inputs for player names
    }
    
    const player = ((name) => {
        //set player name to name value from input
        //set player1 to X and player 2 to O for markers
    })

    return {
        renderButtons,
        player,
    }
})();

const playGame = () => {
    const renderMarker = (e) => {
        if (!e.target.hasChildNodes()) {
            const para = document.createElement('p');
            para.innerHTML = 'X';
            para.classList.add('marker');
            e.target.appendChild(para);
        }
    }

    const placeMarker = () => {
        const board = document.querySelector('#board');
        board.addEventListener('click', renderMarker);
    }
    placeMarker();
}

window.addEventListener('load', playGame());
