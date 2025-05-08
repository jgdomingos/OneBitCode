const primeiroNome = prompt("Informe seu primeiro nome")
const segundoNome = prompt("Qual o seu sobrenome?")
const campoDeEstudo = prompt("Qual a área que você estudo?")
const anoDeNascimento = prompt("Qual ano você nasceu?")

alert(
    "Recruta cadastrado com sucesso!" +
    "\nNome completo: " + primeiroNome + " " + segundoNome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIadade: " + (2025 - anoDeNascimento) 
)