const board = [
    ["c", "d", "e", "f"],
    ["e", "a", "m", "u"],
    ["r", "x", "o", "f"],
    ["s", "y", "m", "f"]
  ];
  
  function wordExists(board, letters, rowIdx = 0, colIdx = 0) {
    // all of the letters have been found
    if (letters.length === 0) {
      return true;
    }
  
    // this indicates the first iteration
    if (rowIdx === 0 && colIdx === 0) {
      // find a starting index
      board.forEach((row, rIdx) => {
        const cIdx = row.findIndex(letter => letters[0] === letter);
  
        // a match
        if (cIdx !== -1) {
          return wordExists(board, letters, rIdx, cIdx);
        }
      });
    }
    const nextLetter = letters[0];
    // right
    if (board[rowIdx][colIdx + 1] === nextLetter) {
      return wordExists(board, letters, rowIdx, colIdx + 1);
    }
  
    // bottom-right
    if (board[rowIdx + 1] && board[rowIdx + 1][colIdx + 1] === nextLetter) {
      return wordExists(board, letters, rowIdx + 1, colIdx + 1);
    }
  
    // bottom
    if (board[rowIdx + 1] && board[rowIdx + 1][colIdx] === nextLetter) {
      return wordExists(board, letters, rowIdx + 1, colIdx);
    }
  
    // bottom-left
    if (board[rowIdx + 1] && board[rowIdx + 1][colIdx - 1] === nextLetter) {
      return wordExists(board, letters, rowIdx + 1, colIdx - 1);
    }
  
    // left
    if (board[rowIdx][colIdx - 1] === nextLetter) {
      return wordExists(board, letters, rowIdx, colIdx - 1);
    }
  
    // top-left
    if (board[rowIdx - 1] && board[rowIdx - 1][colIdx - 1] === nextLetter) {
      return wordExists(board, letters, rowIdx - 1, colIdx - 1);
    }
  
    // top
    if (board[rowIdx - 1] && board[rowIdx - 1][colIdx] === nextLetter) {
      return wordExists(board, letters, rowIdx - 1, colIdx);
    }
  
    // top-right
    if (board[rowIdx - 1] && board[rowIdx - 1][colIdx + 1] === nextLetter) {
      return wordExists(board, letters, rowIdx - 1, colIdx + 1);
    }
  
    return false;
  }
  
  const word = "camox";
  
  // console.log(wordExists(board, "off") === true);
  console.log(wordExists(board, word.split("")) === true);
  