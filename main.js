function init() {
    // build the gameboard
    buildBoard();
}

function buildBoard() {
    const container = document.getElementsByClassName('gameboard');

    // n2 solution to build board
    for (let y = 0; y < 8; y++) {
        const row = document.createElement('div');
        for (let x = 0; x < 8; x++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `${x}-${y}`)
            row.appendChild(cell);
        }

        debugger;
        container[0].appendChild(row);
    }
}