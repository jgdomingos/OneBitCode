let people = {
    nome: "João",
    idade: 20,
    dizerOla() {
        console.log("Olá, Mundo! Meu nome é " + this.nome)
    }
}

console.log(people)

people.dizerOla()