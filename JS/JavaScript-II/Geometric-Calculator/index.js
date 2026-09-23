function triangle() {
    const base = Number(window.prompt("Qual a base do triângulo?"))
    const height = Number(window.prompt("Qual a altura do triângulo?"))
    return base * height / 2
}

function rectangle() {
    const base = Number(window.prompt("Qual a base do retângulo?"))
    const height = Number(window.prompt("Qual a altura do retângulo?"))
    return base * height
}

function square() {
    const side = Number(window.prompt("Qual o lado do quadrado?"))
    return side * side
}

function trapaze() {
    const longerBase = Number(window.prompt("Qual é a base maior do trapézio?"))
    const shortBase = Number(window.prompt("Qual é a base menor do trapézio?"))
    const height = Number(window.prompt("Qual a altura do trapézio?"))
    return (longerBase + shortBase) * height / 2
}

function circle() {
    const ray = Number(window.prompt("Qual o raio do círculo?"))
    return (3.14 * ray * ray)
}

function menu() {
    return Number(window.prompt(
        "Olá, seja bem-vindo(a) a Calculadora Geométrica!" +
        "\nOque vamos calcular hoje?" +
        "\n1) Área do triângulo" +
        "\n2) Área do retângulo" +
        "\n3) Área do quadrado" +
        "\n4) Área do trapézio" +
        "\n5) Área do círculo" +
        "\n6) Sair"
    ))
}

function executar() {
    let option

    do {
        option = menu()
        let result
    
        switch(option) {
            case 1:
                result = triangle()
                break
    
            case 2:
                result = rectangle()
                break
    
            case 3:
                result = square()
                break
            
            case 4:
                result = trapaze()
                break
    
            case 5:
                result = circle()
                break
    
            case 6:
                alert("Saindo do sistema...")
                break
            
            default:
                alert("Escolha uma opção válida!")
        }

        if(result) {
            alert("Resultado: " + result)
        }
    
    } while (option !== 6)
}

executar()