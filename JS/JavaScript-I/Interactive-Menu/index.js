let option = 0

do {
    option = Number(window.prompt(
        "Escolha uma opção:" +
        "\n1) Consultar saldo" +
        "\n2) Extrato" +
        "\n3) Realizar Transferência" +
        "\n4) Pix" +
        "\n5) Encerrar"
    ))

    switch (option) {
    case 1:
        alert("Seu saldo atual é de R$1.500,00")
        break
    case 2:
        alert("Imprimindo seu extrato bancário...")
        break
    case 3:
        alert("Realizando transferência...")
        break
    case 4:
        alert("Para quem você deseja realizar um PIX?")
        break
    case 5:
        alert("Encerrando o programa...")
        break
    default:
        alert("Escolha uma opção válida")
    }1
} while (option !== 5)