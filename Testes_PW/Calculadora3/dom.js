let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let op = document.getElementById('calculadora');

function calculadora(){
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);
    let operator = op.value;
    let result = 0;

    switch(operator){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            alert('Impossível realizar operação.')
    }
    alert(`O resultado da operação é: ${result}`)
}