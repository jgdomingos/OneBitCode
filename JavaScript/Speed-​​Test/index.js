const veiculo1 = prompt ("Insira o nome do veículo 1:")
const velocidade1 = prompt ("Insira a velocidade do carro " + veiculo1)
const veiculo2 = prompt ("Insira o nome do veículo 2:")
const velocidade2 = prompt ("Insira a velocidade do carro " + veiculo2)

if (velocidade1 > velocidade2) {
    alert("O carro " + veiculo1 + " é mais rápido que o carro " + veiculo2)
} else if (velocidade1 == velocidade2) {
    alert("Os dois carros tem a mesma velocidade!")
} else {
    alert("O carro " + veiculo2 + " é mais rápido que o carro " + veiculo1)
}