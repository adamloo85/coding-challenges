# Word Search

Write a function that returns true or false based on whether a word search match exists.
Matches can be vertical, horizontal, diagonal, and any other shape as long as each letter is next to each other.
A letter in a match cannot be used twice.

const board = [
    ['c', 'd', 'e', 'f'],
    ['e', 'a', 'm', 'u'],
    ['r', 'x', 'o', 'f'],
    ['s', 'y', 'm', 'f']
]

wordExists(board, 'car') => true
wordExists(board, 'off') => true
wordExists(board, 'you') => true