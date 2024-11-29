//5. Escrever um programa que apresente os valores da sequência numérica de Fibonacci até o décimo quinto termo.
//A sequência de Fibonacci é formada pelos valores numéricos 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.,
//obtendo-se o próximo termo a partir da soma do termo atual com o anterior sucessivamente até o infinito se a sequência não for interrompida,
//sendo determinada a partir da fórmula fórmula Fn = Fn-1 + Fn-2. Utilize para este exercício as variáveis ATUAL, ANTERIOR e PRÓXIMO.

let anterior = 0;
let atual = 1;
let proximo: number;


console.log(anterior);
console.log(atual);


for (let i = 2; i < 103; i++) {
  proximo = anterior + atual;
  console.log(proximo);
  anterior = atual;
  atual = proximo;
}
