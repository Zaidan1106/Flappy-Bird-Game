// Get elements from the DOM
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guessInput');

// Function to generate a random number between 1 and 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Initial random number
let targetNumber = generateRandomNumber();

// Function to check the guessed number
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        messageElement.textContent = 'Masukkan angka antara 1 dan 10.';
        messageElement.style.color = 'red';
    } else {
        if (userGuess === targetNumber) {
            messageElement.textContent = 'Selamat! Anda tebak dengan benar!';
            messageElement.style.color = 'greenyellow';
        } else {
            messageElement.textContent = `Maaf, angka yang benar adalah ${targetNumber}.`;
            messageElement.style.color = 'red';
        }

        // Generate a new random number for the next round
        setTimeout(() => {
            const newTargetNumber = generateRandomNumber();
            messageElement.textContent = 'Tebak angka antara 1 dan 10.';
            messageElement.style.color = '#ffff';
            guessInput.value = '';
            targetNumber = newTargetNumber;
        }, 2000); // Delay for 2 seconds before resetting
    }
}

// Function to change the number using arrow buttons
function changeNumber(direction) {
    let currentNumber = parseInt(guessInput.value);
    if (isNaN(currentNumber)) {
        currentNumber = 1;
    }

    if (direction === 'up') {
        currentNumber = Math.min(currentNumber + 1, 10);
    } else if (direction === 'down') {
        currentNumber = Math.max(currentNumber - 1, 1);
    }

    guessInput.value = currentNumber;
}
