//6. Elaborar um programa que apresente os valores de conversão de graus Celsius em graus Fahrenheit,
//de dez em dez graus, iniciando a contagem em dez graus Celsius e finalizando em cem graus Celsius.
//O programa deve apresentar os valores das duas temperaturas. Para converter grau Celsius para Fahrenheit,
//basta multiplicar a temperatura em graus Celsius por 1,8 e somar 32.


let celsius = 0;
let fahrenheit =0;

for(let i = 1; i<=100; i++){
  if(!(i%10)){
  celsius = i;
  fahrenheit = (celsius*1.8) +32;
  console.log("Graus Célcius =" + celsius + "Graus Fahrenheit= "+ fahrenheit);
}
}
