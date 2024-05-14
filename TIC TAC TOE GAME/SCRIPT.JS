let currentPlayer = 'X';
let gameStatus = '';
let board = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

function cellClicked(index) {
    if (gameStatus !== '' || board[index] !== '') return;

    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    
    if (checkWin()) {
        gameStatus = currentPlayer + ' wins!';
        document.getElementById('status').innerText = gameStatus;
    } else if (checkDraw()) {
        gameStatus = "It's a draw!";
        document.getElementById('status').innerText = gameStatus;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return board.every(cell => {
        return cell !== '';
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameStatus = '';
    board = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('status').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
