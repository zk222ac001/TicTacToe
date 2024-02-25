let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cellIndex) {
    if (board[cellIndex] === '' && !checkWinner()) {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    for (let combo of winningCombos) {
        if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] !== '') {
            const winner = board[combo[0]];
            document.getElementById('winnerMessage').innerText = `${winner} wins!`;
            document.getElementById('winnerModal').style.display = 'block';
            return true;
        }
    }
    if (!board.includes('')) {
        document.getElementById('winnerMessage').innerText = "It's a draw!";
        document.getElementById('winnerModal').style.display = 'block';
        return true;
    }
    return false;
}

// Close the modal when the user clicks on the close button (x)
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('winnerModal').style.display = 'none';
}
function reset() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
