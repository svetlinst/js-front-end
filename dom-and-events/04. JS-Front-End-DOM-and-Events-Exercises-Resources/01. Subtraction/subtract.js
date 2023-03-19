function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    document.getElementById('result').textContent = Number(firstNum) - Number(secondNumber);
}