let saldo = parseFloat(prompt("Informe seu saldo atual:"))
let opcao = ""

do {
    opcao = prompt(
        "Escolha uma das opções:" +
        "\n1- Depositar dinheiro" +
        "\n2- Sacar dinheiro" +
        "\n3- Sair"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor que deseja depositar:"))
            break
        case "2":
            saldo -= parseFloat(prompt("Informe o valor que deseja sacar:"))
            break
        case "3":
            alert("Você está saindo do aplicativo do banco...")
            break
        default:
            alert("Entrada inválida")
            break
} 

} while (opcao !== "3");