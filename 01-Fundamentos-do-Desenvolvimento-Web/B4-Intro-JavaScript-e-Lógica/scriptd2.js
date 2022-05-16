
//Arrays//
//1//
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = null ;

console.log(menuServices = menu[1]);

//2//
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = null ;

console.log(indexOfPortfolio = menu2[2]);

//3//
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu3.push('Contato'));

//For 1 ex//
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i++){
    console.log(groceryList[i]);
}

//For of 1ex//
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let letter of names){
    console.log (letter);
}

//ex1//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (number of numbers){
    console.log (number)
}
//2//
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (number2 of numbers2 ){
    console.log((number2)*2);
}
//3 e 4//
let numeros = [2,8,10];
let media = null;
media = (numeros[0] + numeros[1] + numeros[2])/3;
console.log(media);
if (media > 20){
    console.log('valor maior que 20')
}else{
    console.log('valor menor ou igual a 20')
}
for(let i = 0;i < numeros.length ; i++){
if (numeros[0]>numeros[1]&&numeros[0]>numeros[2]){
console.log(numeros[0])
} else if (numeros[1] > numeros[0] && numeros[1] > numeros[2]){
    console.log(numeros[1])
} else {
    console.log(numeros[2]);
}}
//5//


let numeros1 = [2,8,10];
let media1 = null;
console.log(media);
if (media1 > 20){
    console.log('valor maior que 20')
}else{
    console.log('valor menor ou igual a 20')
}
for(let i = 0;i < numeros1.length ; i++){
if (numeros1[i]>numeros1[i]){
console.log(numeros1[0])
}}

//ainda n finalizei