function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

dobro(5)

function dizerOla(name = "mundo") {
    alert("Olá, " + name + "!")
}

dizerOla("João")

function soma(a, b) {
    alert("O resultado da soma é: " + (a + b))
}

soma(5, 5)

function criarUsuario(nome, email, senha, tipo) {
    const usuario = {
        nome: nome,
        email: email,
        senha, // mesmo que senha: senha
        tipo
    }

    console.log(usuario)
}

criarUsuario("João", "joao@gmail.com", "1234", "adm")

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    // ....
}

muitosParametros("nome", "telefone", "aniversario", "email", "...")

function objetoComParametro(usuario) {
    usuario.nome
    usuario.email
}

const dadosUsuario = {
    nome: "",
    email: "",
    telefone: "",
}

objetoComParametro(dadosUsuario)