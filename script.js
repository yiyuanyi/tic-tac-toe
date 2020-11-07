const gameBoard = (() => {
    const markers = ['', '', '', '', '', '', '', '', ''];

    const winningCombos = [
        [0,1,2],[3,4,5],
        [6,7,8],[0,3,6],
        [1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    //check for winner using data values

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

const playGame = (() => {
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
    
    return {
        placeMarker,
    }
})();

window.addEventListener('load', playGame.placeMarker);
