let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let op = document.getElementById('operacao');

document.getElementById('calcular').addEventListener('click', function() {
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let resultado = 0;
    switch (op.value) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n1 / n2;
            break;
    }
    alert(`O resultado da operação é: ${resultado}`);
}   );