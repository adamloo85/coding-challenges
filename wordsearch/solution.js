const board = [
    ["c", "d", "e", "f"],
    ["e", "a", "m", "u"],
    ["r", "x", "o", "f"],
    ["s", "y", "m", "f"]
  ];
  
function wordExists(board, letters, rowIdx = false, colIdx = false) {
    // all of the letters have been found
    if (letters.length === 0) {
        return true;
    }

    // this indicates the first iteration
    if (rowIdx === false && colIdx === false) {
        // find a starting index
        const indices = board.reduce((indices, row, rIdx) => {
        if (indices && indices.length) {
            return indices;
        }
        const cIdx = row.findIndex(letter => letters[0] === letter);

        // a match
        if (cIdx !== -1) {
            return [rIdx, cIdx];
        }
        return indices;
        }, []);

        if (!indices.length) {
        return false;
        } else {
        return wordExists(
            board,
            letters.slice(1, letters.length - 1),
            indices[0],
            indices[1]
        );
        }
    }
    const nextLetter = letters[0];
    const newLetters = letters.slice(1, letters.length - 1);
    // right
    if (board[rowIdx][colIdx + 1] === nextLetter) {
        return wordExists(board, newLetters, rowIdx, colIdx + 1);
    }

    // bottom-right
    if (board[rowIdx + 1] && board[rowIdx + 1][colIdx + 1] === nextLetter) {
        return wordExists(board, newLetters, rowIdx + 1, colIdx + 1);
    }

    // bottom
    if (board[rowIdx + 1] && board[rowIdx + 1][colIdx] === nextLetter) {
        return wordExists(board, newLetters, rowIdx + 1, colIdx);
    }

    // bottom-left
    if (board[rowIdx + 1] && board[rowIdx + 1][colIdx - 1] === nextLetter) {
        return wordExists(board, newLetters, rowIdx + 1, colIdx - 1);
    }

    // left
    if (board[rowIdx][colIdx - 1] === nextLetter) {
        return wordExists(board, newLetters, rowIdx, colIdx - 1);
    }

    // top-left
    if (board[rowIdx - 1] && board[rowIdx - 1][colIdx - 1] === nextLetter) {
        return wordExists(board, newLetters, rowIdx - 1, colIdx - 1);
    }

    // top
    if (board[rowIdx - 1] && board[rowIdx - 1][colIdx] === nextLetter) {
        return wordExists(board, newLetters, rowIdx - 1, colIdx);
    }

    // top-right
    if (board[rowIdx - 1] && board[rowIdx - 1][colIdx + 1] === nextLetter) {
        return wordExists(board, newLetters, rowIdx - 1, colIdx + 1);
    }

    return false;
}

console.log(wordExists(board, "off") === true);
console.log(wordExists(board, "camox") === true);
console.log(wordExists(board, "doodoo") === false);
