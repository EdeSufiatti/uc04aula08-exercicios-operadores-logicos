//2. Utilizando (DoWhile), elaborar um programa que apresente o somatório dos valores pares existentes na faixa de 1 até 500.

let soma = 0;
let numero = 2;

do {
    soma += numero;
    numero += 2;
} while (numero <= 500);
console.log(soma)
