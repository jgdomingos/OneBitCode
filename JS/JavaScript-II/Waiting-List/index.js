let queue = ["João Guilherme", "Giovanna Kogake", "Antonio Henrique"]

do {
    let mensagem = ""

    for (let i = 0; i < queue.length; i++) {
        mensagem += (i + 1) + "º " + queue[i] + "\n"
    }

    menu = Number(window.prompt(
        "Seja bem-vindo(a) a nossa Clínica!" +
        "\nEscolha uma opção abaixo:" +
        "\n1) Novo Paciente" +
        "\n2) Consultar Paciente" +
        "\n3) Sair\n" +
        mensagem
    ))

    switch (menu) {
        case 1:
            let namePatient = prompt("Qual o nome do paciente?")
            let newPatient = queue.push(namePatient)
            break

        case 2:
            const removePatient = queue.shift()
            if (!removePatient) {
                alert("Não há pacientes na fila")
            } else {
                alert("Paciente " + removePatient + " atendido com sucesso!")
            }
            break

        case 3:
            alert("Encerrando o programa...")
            break

        default:
            alert("Escolha uma opção válida")
    }
} while (menu !== 3)