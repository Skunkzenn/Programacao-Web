document.addEventListener("DOMContentLoaded", function() {
    const number1Input = document.querySelector('input[name="number1"]');
    const operatorInput = document.querySelector('input[name="operator"]');
    const number2Input = document.querySelector('input[name="number2"]');
    const resultInput = document.querySelector('input[name="Result"]');
    const calculateButton = document.querySelector('button[name="BtnResult"]');

    function calculate() {
        const number1 = parseFloat(number1Input.value);
        const number2 = parseFloat(number2Input.value);
        const operator = operatorInput.value;

        let result;
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            default:
                result = 'Invalid operator';
        }

        resultInput.value = result;
    }

    calculateButton.addEventListener('click', calculate);
});
