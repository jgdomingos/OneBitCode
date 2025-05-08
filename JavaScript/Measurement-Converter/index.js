const metro = parseFloat(prompt("Insira o valor em metros e em seguida selecione para qual medida deseja converter."))
const medida = prompt("Digite qual medida deseja converter:\nmm\ncm\ndm\ndam\nhm\nkm")

switch (medida) {
    case "mm":
        const milimetros = metro * 1000
        alert(metro + " metros em milímetros é: " + milimetros + "mm")
        break
    case "cm":
        const centimetros = metro * 100
        alert(metro + " metros em centímetros é: " + centimetros + "cm")
        break
    case "dm":
        const decimetros = metro * 10
        alert(metro + " metros em decímetros é: " + decimetros + "dm")
        break
    case "dam":
        const decametros = metro / 10
        alert(metro + " metros em decâmetros é: " + decametros + "dam")
        break
    case "hm":
        const hectometros = metro / 100
        alert(metro + " metros em hectômetros é: " + hectometros + "hm")
        break
    case "km":
        const quilometros = metro / 1000
        alert(metro + " metros em quilômetros é: " + quilometros + "km")
        break
    default:
        alert("Opção inválida!")
        break
}