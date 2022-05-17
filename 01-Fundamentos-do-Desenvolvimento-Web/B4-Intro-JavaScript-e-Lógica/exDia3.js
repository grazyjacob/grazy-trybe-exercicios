// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

//1
/*Lógica 
numero que é multiplicado por ele -1 depois por ele -2 e assim por diante
*/



//2- 

let word = 'trybe';
let newWord = [];
for (let index = 0; index < word.length+1; index++) {
newWord.push (word[word.length - index]);
} console.log(newWord);

//3-
/*Considere o array de strings abaixo:
Escreva dois algoritmos: um que retorne a maior palavra deste array 
e outro que retorne a menor. Considere o número de caracteres de cada palavra.*/
//para retornar a maior palavra ele deve ser capaz de saber quantos caracteres cada palavra tem e para isso
//deve percorrer cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];