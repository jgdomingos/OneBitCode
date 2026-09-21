const imoveis = []
let option = ""

do {

    option = Number(window.prompt(
        "Bem-vindo(a) ao Cadastro de imóveis" +
        "\nTotal de imóveis cadastrados: " + imoveis.length +
        "\n1) Novo imóvel" +
        "\n2) Lista de imóveis" +
        "\n3) Sair"
    ))

    switch(option) {
        case 1:
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário")
            imovel.quartos = prompt("Quantos quartos possui o imovel")
            imovel.banehiros = prompt("Quantos banheiros tem no imóvel?")
            imovel.garagem = prompt("O imovel possui garagem? (Sim/Não)")

            const confirm = confirm(
                "Salvar este imovel?" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banehiros +
                "\nPossui garagem: " + imovel.garagem
            )

            if (confirm) {
                imoveis.push(imovel)
            }

            break

        case 2:
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui Garagem? " + imoveis[i].garagem
                )
            }
            
             break

        case 3:
            alert("Saindo do sistema...")
            break
        
        default:
            alert("Escolha uma opção válida!")
    }

} while (option !== 3)