let numMetros = Number(window.prompt("Insira o valor que você quer converter: (Em metros)"));

const options = prompt(
    "Escolha uma unidade de medida que deseja converter:" +
    "\na) Milímetro (mm)" +
    "\nb) Centímetro (cm)" +
    "\nc) Decímetro (dm)" +
    "\nd) Decâmetro (dam)" +
    "\ne) Hectõmetro (hm)" +
    "\nf) Quilômetro (km)"
)

switch (options) {
    case "a":
        alert("A conversão de " + numMetros + " em mm é " + numMetros * 1000)
        break
    case "b":
        alert("A conversão de " + numMetros + " em cm é " + numMetros * 100)
        break
    case "c":
        alert("A conversão de " + numMetros + " em dm é " + numMetros * 10)
        break
    case "d":
        alert("A conversão de " + numMetros + " em dam é " + numMetros / 10)
        break
    case "e":
        alert("A conversão de " + numMetros + " em hm é " + numMetros / 100)
        break
    case "f":
        alert("A conversão de " + numMetros + " em km é " + numMetros / 1000)
        break
    default:
        alert("Opção inválida")
}