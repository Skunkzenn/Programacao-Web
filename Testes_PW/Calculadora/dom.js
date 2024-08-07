let numberOne = document.getElementById('numberOne');
let numberTwo = document.getElementById('numberTwo');
let operator = document.getElementById('operator');

function calculate() {
    let num1 = parseFloat(numberOne.value);
    let num2 = parseFloat(numberTwo.value);
    let op = operator.value;
    let result = 0;

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Operação inválida';
    }
    console.log("Resultado:", result);
    alert(`O resultado da operação é: ${result}`);

}