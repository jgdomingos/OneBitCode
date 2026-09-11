const nameCar1 = prompt("Insira o nome do primeiro carro:");
const speedCar1 = Number(window.prompt("Insira a velocidade do carro 1:"))

const nameCar2 = prompt("Insira o nome do segundo carro:")
const speedCar2 = Number(window.prompt("Insira a velocidade co carro 2:"))

if (speedCar1 > speedCar2) {
    alert("O carro " + nameCar1 + " é mais raído que o carro " + nameCar2)
} else if (speedCar1 >= speedCar2) {
    alert("Os dois carros tem a mesma velocidade")
} else {
    alert("O carro " + nameCar2 + " é mais rápido que o " + nameCar1)
}