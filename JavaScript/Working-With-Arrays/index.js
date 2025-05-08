const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar elementos em um Array
// push (adiciona um elemento no final de um array)
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift (adiciona um elemento no começo de um array)
tamanho = arr.unshift("Boramir")
console.log(arr)
console.log(tamanho)

// Remover Elementos
// pop (remove um elemento que está no final de um arr)
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift (remove elemento no começo de um array)
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
// includes (Verifica se um elemento existe em uma array)
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf (mostra se o elemento está na array e em qual posição está)
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}
