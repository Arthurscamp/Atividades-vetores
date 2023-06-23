let numeros = [];

for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt(`Digite o ${i+1}º número:`));
  numeros.push(numero);
}

let menor = numeros[0];
let posicao = 0;

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
    posicao = i;
  }
}

document.write(`O menor elemento de N é = ${menor} e a sua posição é [${posicao}.]`);