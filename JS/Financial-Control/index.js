let saldo = 0
saldo = Number(window.prompt("Qual é o seu saldo atual?"))

do {
    option = Number(window.prompt(
        "Seu saldo atual é de: R$" + saldo +
        "\n1) Depositar" +
        "\n2) Sacar" +
        "\n3) Sair"
    ))

    switch (option) {
        case 1:
            add = Number(window.prompt("Qual o valor que você deseja depositar?"))
            saldo = add + saldo
            alert("Dinheiro depositado com sucesso!")
            break
        case 2:
            sacar = Number(window.prompt("Qual é o valor que você deseja sacar?"))
            saldo = saldo - sacar
            alert("Dinheiro sacado com sucesso...")
            break
        case 3:
            alert("Saindo do aplicativo...")
            break
        default:
            alert("Escolha uma opção válida")
    }
} while (option !== 3)