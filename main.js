function init() {
    let enemyX;
    let enemyY;
    let playerX = 4;
    let playerY = 4;

    const containers = document.getElementsByClassName('gameboard');
    const [ container ] = containers;

    // n^2 solution to build board
    for (let y = 0; y < 8; y++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row')
        for (let x = 0; x < 8; x++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `${x}-${y}`);
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
        }

        container.appendChild(row);
    }

    enemyX = getRandomCoor(playerX);
    enemyY = getRandomCoor(playerY)

    updateBoard(container, playerX, playerY, enemyX, enemyY);

    // when keypress happens
    // up: 38
    // down: 40
    // left: 37
    // right: 39
    document.addEventListener('keydown', function({ keyCode }) {
        // clear if arrow key is pressed
        if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
            clearCell(container, playerX, playerY);
            clearCell(container, enemyX, enemyY);
        }

        let shouldMoveEnemy;

        // update player position (under hood)
        switch(keyCode) {
            case 37:
                if (playerX > 0) {
                    playerX -= 1;
                    shouldMoveEnemy = true;
                }
                break;
            case 38:
                if (playerY > 0) {
                    playerY -= 1;
                    shouldMoveEnemy = true;
                }
                break;
            case 39:
                if (playerX < 7) {
                    playerX += 1;
                    shouldMoveEnemy = true;
                }
                break;
            case 40:
                if (playerY < 7) {
                    playerY += 1;
                    shouldMoveEnemy = true;
                }
                break;
            default:
                break;
        }

        // check for collision
        const hasCollided = isCollision(playerX, playerY, enemyX, enemyY);

        if (hasCollided) {
            alert('You Win!');
            return;
        }

        if (shouldMoveEnemy) {
            enemyX = getRandomCoor(playerX);
            enemyY = getRandomCoor(playerY)
        }
        updateBoard(container, playerX, playerY, enemyX, enemyY);
    });
}

function clearCell(container, x, y) {
    const cell = container.querySelector(`[id^="${x}-${y}"]`);
    cell.textContent = '';
}

function updateBoard(container, playerX, playerY, enemyX, enemyY) {
    const playerStartCell = container.querySelector(`[id^="${playerX}-${playerY}"]`);
    playerStartCell.textContent = 'Player'

    const randomCell = `${enemyX}-${enemyY}`
    const enemyStartCell = container.querySelector(`[id^="${randomCell}"]`);
    enemyStartCell.textContent = 'Enemy'
}

function isCollision(playerX, playerY, enemyX, enemyY) {
    return playerX === enemyX && playerY === enemyY;
}

function getRandomCoor(forbidden) {
    const coor = Math.floor(Math.random() * Math.floor(8));

    if (coor !== forbidden) {
        return coor
    } else {
        return getRandomCoor(forbidden);
    }
}