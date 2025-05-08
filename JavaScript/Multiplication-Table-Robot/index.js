const numero = parseFloat(prompt("Digite o número que deseja saber a tabauda:"))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)