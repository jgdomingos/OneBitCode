function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

function areaRetangulo(base, altura) {
    return base * altura
}

function areaQuadrado(lado) {
    return lado**2
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(raio) {
    return 3.14 * raio**2
}

let opcao = ""

do {
    opcao = prompt("Bem-vindo(a) Calculadora Geométrica" +
        "\nQual área geométrica você deseja calcular?" +
        "\na) Área do triângulo" +
        "\nb) Área do retângulo" +
        "\nc) Área do quadrado" +
        "\nd) Área do trapézio" +
        "\ne) Área do círculo" +
        "\nf) Sair"
    )

    switch (opcao) {
        case "a":
            base = parseFloat(prompt("Qual a Base do triângulo?"))
            altura = parseFloat(prompt("Qual a Altura do triângulo?"))
            alert("A área do triângulo é " + areaTriangulo(base, altura))
            break
        case "b":
            base = parseFloat(prompt("Qual a Base do retângulo?"))
            altura = parseFloat(prompt("Qual a Altura do retângulo"))
            alert("A área do retângulo é " + areaRetangulo(base, altura))
            break
        case "c":
            lado = parseFloat(prompt("Qual o Lado do quadrado?"))
            alert("A área do quadrado é " + areaQuadrado(lado))
            break
        case "d":
            baseMaior = parseFloat(prompt("Qual a Base Maior do trapézio?"))
            baseMenor = parseFloat(prompt("Qual a Base Menor do trapézio?"))
            altura = parseFloat(prompt("Qual a altura do trapézio?"))
            alert("A área do trapézio é " + areaTrapezio(baseMaior, baseMenor, altura))
            break
        case "e":
            raio = parseFloat(prompt("Qual o Raio do círculo?"))
            alert("A área do círculo é " + areaCirculo(raio))
            break
        case "f":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (opcao !== "f")