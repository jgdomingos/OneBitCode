let number = Number(window.prompt("Qual o número que você deseja saber a tabuada?"))

let results = ""

for (
    let multiplier = 1;
    multiplier <= 20;
    multiplier++
) {
    let result = number * multiplier
 
     results += number + " x " + multiplier + " = " + result + "\n"
}

 window.alert(results)