/*1- Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
Essa função deve receber dois parâmetros:
base e altura e retornar um objeto no formato:*/

function calculaArea (base, altura){
let area = base * altura;
let perimetro = (2 * base) + (2 * altura);

let resultado = {
    calcArea: area,
    calcPerimetro: perimetro,
}
console.log (resultado.calcArea, resultado.calcPerimetro);
}

//* 3. Crie uma função que receba uma string word e outra estring ending.
//Considere que a string ending sempre será menor que a string word.*/

// valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true
  
// valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true
/*verificaFimPalavra('trybe', 'be');*/  
// Retorno esperado: true  
/*verificaFimPalavra('joaofernando', 'fernan');*/  
//  Retorno esperado: false; 














/*2. Crie uma função que, dado um array de números inteiros,
retorne a quantidade de números pares e ímpares no formato de objeto:*/
/*
{
    pares: 0, 
    ímpares: 0 
} 
*/