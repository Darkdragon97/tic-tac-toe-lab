
let board;
let turn;
let winner;
let tie;


const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const resetBtn = document.getElementById('reset');


function init() {
    console.log('Game is initializing...');
    board = ['', '', '', '', '', '', '', '', '']; 
    turn = 'X';                                  
    winner =false;                             
    tie = false;                                 
    render();                                    
}


function render() {
    squareEls.forEach((square, index) => {
        square.textContent = board[index]; 
    });

    if (winner) {
        messageEl.textContent = `Player ${turn} wins!`;
    } else if (tie) {
        messageEl.textContent = "It's a tie!";
    } else {
        messageEl.textContent = `It's ${turn}'s turn.`;
    }
}


function handleSquareClick(index) {
    
    if (board[index] || winner) return;

    
    board[index] = turn;

    
    checkWinner();
    checkTie();

    
    turn = turn === 'X' ? 'O' : 'X';

    
    render();
}


function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    winningCombos.forEach((combo) => {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
        }
    });
}


function checkTie() {
    if (!board.includes('') && !winner) {
        tie = true;
    }
}


squareEls.forEach((square, index) => {
    square.addEventListener('click', () => handleSquareClick(index));
});


resetBtn.addEventListener('click', init);


init();
