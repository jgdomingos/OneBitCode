const nome = prompt("Qual o seu nome?")
let contagem = 0
let cidades = ""

let pergunta = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (pergunta === "Sim") {
    let cidade = prompt("Qual o nome da cidade que você visitou?")
    cidades += " - " + cidade + "\n"
    contagem++
    pergunta = prompt("Você já visitou mais alguma cidade? (Sim/Não)")
}

alert(
    "Nome do Turista: " + nome +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas: " + cidades
)