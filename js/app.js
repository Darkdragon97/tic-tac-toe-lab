let board
let turn
let winner
let tie 
const squareEls = document.querySelectorAll('sqr')
const messageEl = document.getElementById('message')
console.log(squareEls)
console.log(messageEl)

function init() {
  console.log('Game initialized')
  board = [
    board[0],
    board[1],
    board[2],
    board[3],
    board[4],
    board[5],
    board[6],
    board[7],
    board[8]
  ]
  turn = 'X'
  winner = false
  tie = false
  render()
}

function render() {

}

function updateBoard() {
  board.forEach(cell, index => {
    
  });
}
const square = squareEls[index]
square.textContent = cell
if (cell === "X") {
  square.style.color = "blue";
} else if (cell === "O") {
  square.style.color = "red";
} else {
  square.style.color = "black";
}
function updateMessage() {
  if (winner) {
    messageEl.textContent = "Player wins! "
  } else if (tie) {
    messageEl.textContent = "It's a tie!"
  } else if (lose) {
    messageEl.textContent = "Player lose!"
  } else {
    messageEl.textContent = "player turn"
  }
}

function render() {
  updateBoard();
  updateMessage();
}

let (board)
let (turn)
let (winner)
let (tie)

const squareEls = document.querySelectorAll("sqr")
const messageEl = document.getElementById("message")

function init() {
  console.log("Game initialized")
  board = [
    board[0],
    board[1],
    board[2],
    board[3],
    board[4],
    board[5],
    board[6],
    board[7],
    board[8]
  ]
  turn = 'X'
  winner = false
  tie = false
  render()
}
function updateBoard() {
  board.forEach((cell, index) => {
    const square = squareEls[index]
    square.textContent = cell

    if (cell === 'X') {
      square.style.color = 'red';
    } else if (cell === 'O') {
      square.style.color = 'blue';
    } else {
      square.style.color = 'black'
    }
    function updateMessage() {
      if (winner) {
        messageEl.textContent = `Player  wins!`;
      } else if (tie) {
        messageEl.textContent = "It's a tie!";
      } else {
        messageEl.textContent = `Player turn`;
      }
      function render() {
        updateBoard()
        updateMessage()
      }

      const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      function handleClick(event) {
        
      }