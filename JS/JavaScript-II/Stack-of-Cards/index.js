const cheap = []
let menu = ""

do {

    menu = Number(window.prompt(
        "Seja Bem-vindo(a) ao nosso Baralho" +
        "\nEscolha uma opção:" +
        "\n1) Adicionar Carta" +
        "\n2) Puxar uma Carta" +
        "\n3) Sair" +
        "\nQuatidade de cartas no bralho: " + cheap.length
    ))

    switch (menu) {
        case 1:
            const cardName = prompt("Qual o nome da Carta?")
            const newCard = cheap.unshift(cardName)
            break

        case 2:
            const removeCard = cheap.shift()
            if (!removeCard) {
                alert("Não há cartas no baralho!")
            } else {
                alert("Carta " + removeCard + " removido com sucesso!")
            }
            break

        case 3:
            alert("Saindo do sistema...")
            break
        
        default:
            alert("Escolha uma opção válida!")
    }

} while (menu !== 3)