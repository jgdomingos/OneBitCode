const player1 = prompt("Qual o nome do primeiro personagem?");
const attack = Number(window.prompt("Qual o poder de ataque do(a) " + player1 + "?"));

const player2 = prompt("Qual o nome do segundo personagem?");
const life = Number(window.prompt("Quantos pontos de vida o " + player2 + " tem?"));
const defense = Number(window.prompt("Qual o poder de defesa do " + player2 +"?"));
const shield = prompt("O personagem " + player2 + " possui Escudo? (S/N)");

let damage = 0;

if (attack > defense && shield === "N") {
    damage = attack - defense;
    alert("O dano causado foi de " + damage);
} else if (attack > defense && shield === "S") {
    damage = (attack - defense) / 2;
    alert("O dano causado foi de " + damage);
} else {
    alert("O dano causado foi 0");
}

const updateLife = life - damage;

alert("O personagem " + player2 + " ficou com " + updateLife + " pontos de vida!")
alert(
    "Perosnagem atacante:" +
    "\nNome: " + player1 +
    "\nPoder de ataque: " + attack+
    "\n\n" +

    "Personagem defensor:" +
    "\nNome: " + player2 +
    "\nDano recebido: " + damage +
    "\nVida Atualizada: " + updateLife +
    "\nPoder de defesa: " + defense +
    "\nPossui escudo: " + shield
)