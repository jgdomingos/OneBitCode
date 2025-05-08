const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem vindo ao cadastro de Imóveis!\n" +
        "Total de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Listar Imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietátio do imóvel")
            imovel.quartos = prompt("Quantos quartos possui o imóvel")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirm = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário" + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiro +
                "\nGaragem" + imovel.garagem
            )

            if (confirm) {
                imoveis.push(imovel)
            }

            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (opcao !== "3")