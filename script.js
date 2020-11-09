const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const winningCombos = [
        [0,1,2],[3,4,5],
        [6,7,8],[0,3,6],
        [1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    //check for winner using data values

})();

const displayController = (() => {
    const controlPanel = document.querySelector('#control-panel');
   
    const player = ((name) => {
        const getName = () => name;
    })



    return {
        player,
    }
})();

const playGame = (() => {
    const assignMarker = () => {
        let markerCount = 0;
        let marker = '';
        markerCount % 2 == 0 ? marker = 'X' : marker = 'O';
        markerCount++;
    }

    const renderMarker = (e) => {
        if (!e.target.hasChildNodes()) {
            const para = document.createElement('p');
            para.innerHTML = marker;
            para.classList.add('marker');
            e.target.appendChild(para);
        }
    }

    const placeMarker = () => {
        const board = document.querySelector('#board');
        board.addEventListener('click', renderMarker);
    }
    
    return {
        assignMarker,
        placeMarker,
    }
})();

window.addEventListener('load', playGame.placeMarker);

