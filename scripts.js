let display = document.getElementById('display');
let currentInput = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay && !isNaN(number)) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
        shouldResetDisplay = false;
    } catch {
        display.innerText = 'Erro';
        currentInput = '';
    }
}