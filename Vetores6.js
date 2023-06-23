let valores = [];

for (let i = 0; i < 10; i++) {
  const valor = parseInt(prompt(`Digite o ${i+1}º valor:`));
  valores.push(valor);
}

let pares = valores.filter(valor => valor % 2 === 0).length;
let impares = valores.filter(valor => valor % 2 !== 0).length;

document.write(`Foram digitados ${pares} valores pares e ${impares} valores ímpares.`);