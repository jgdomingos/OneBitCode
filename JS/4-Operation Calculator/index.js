const number1 = Number(window.prompt("Digite o primeiro número:"));
const number2 = Number(window.prompt("Digite o segundo número:"));

const result1 = number1 + number2;
const result2 = number1 - number2;
const result3 = number1 / number2;
const result4 = number1 * number2;

alert("O resultado desses dois números são:" +
    "\nSoma: " + result1 +
    "\nSubtração: " + result2 +
    "\nDivisão: " + result3 +
    "\nMultiplicação: " + result4
);