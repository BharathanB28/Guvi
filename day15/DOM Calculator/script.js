function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    let expression = document.getElementById('result').value;
    try {
        let result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLastDigit() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

document.getElementById('result').addEventListener('keydown', function (e) {
    if (!/^[0-9+\-*/.%\b\r]$/.test(e.key)) {
        e.preventDefault();
        alert('Only numbers, operators, Backspace, and Enter are allowed.');
    }
});