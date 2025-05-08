let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            alert(pacienteConsultado + " foi removido da fila")
            break
        case "3":
            alert("Encerrando serviço...")
            break
        default:
            alert("Opção inválida")
    }
} while (opcao !== "3")


/* while (true) {
    const menu = prompt("Escolha uma das 3 opções a seguir:" +
        "\n1) Novo Paciente:" +
        "\n2) Consultar Paciente" +
        "\n3) Sair"
    );

    switch (menu) {
        case "1":
            const nome = prompt("Qual o nome do paciente:")
            let newPacient = fila.push(nome)
            console.log(fila)
            break
        case "2":
            let removePacient = fila.shift()
            console.log(fila)
            break
        case "3":
            alert("Encerrando programa")
            break
    }

    if (menu === "3")
        break
} */