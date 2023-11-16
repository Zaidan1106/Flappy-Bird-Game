let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let currentMode = 'easy'; // Default mode

function handleClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        makeMove(index, currentPlayer);

        if (checkWinner()) {
            document.getElementById('result').innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (isBoardFull()) {
            document.getElementById('result').innerText = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O' && gameActive) {
                setTimeout(() => {
                    botMove();
                }, currentMode === 'easy' ? 500 : 1000); // Set timeout based on mode
            }
        }
    }
}

function makeMove(index, player) {
    gameBoard[index] = player;
    const cell = document.getElementById('board').children[index];
    cell.innerText = player;
    cell.classList.add(player); // Menambahkan kelas X atau O sesuai dengan pemain
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
}

function isBoardFull() {
    return gameBoard.every(cell => cell !== '');
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.getElementById('result').innerText = '';
    
    const cells = document.getElementById('board').children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].classList.remove('X', 'O'); // Menghapus kelas warna sebelumnya
    }
}

function botMove() {
    const emptyCells = gameBoard.reduce((acc, val, index) => {
        if (val === '') {
            acc.push(index);
        }
        return acc;
    }, []);

    // Prioritaskan blok atau menang jika mungkin
    const winningMove = findWinningMove('O');
    const blockingMove = findWinningMove('X');

    const botMoveIndex = winningMove || blockingMove || emptyCells[Math.floor(Math.random() * emptyCells.length)];
    makeMove(botMoveIndex, 'O');

    if (checkWinner()) {
        document.getElementById('result').innerText = 'Bot (O) wins!';
        gameActive = false;
    } else if (isBoardFull()) {
        document.getElementById('result').innerText = 'It\'s a draw!';
        gameActive = false;
    } else {
        currentPlayer = 'X';
    }
}

function findWinningMove(player) {
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = player;
            if (checkWinner()) {
                gameBoard[i] = ''; // Reset untuk menghindari perubahan status permainan
                return i;
            }
            gameBoard[i] = ''; // Reset untuk menghindari perubahan status permainan
        }
    }
    return null;
}

function setMode(mode) {
    currentMode = mode;
    resetGame(); // Reset permainan saat mode berubah

    // Tampilkan pemberitahuan/alert
    alert(`Mode has been set to ${mode.toUpperCase()}!`);
}

