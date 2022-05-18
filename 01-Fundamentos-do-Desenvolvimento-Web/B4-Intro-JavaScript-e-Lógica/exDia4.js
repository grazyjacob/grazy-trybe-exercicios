//Objetos
//Para fixar ex1
//1 - Crie um objeto player com as variáveis listadas.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

let player = {
name: 'Marta', lastName: 'Silva', age: 34, medals:{ golden: 2, silver: 3 }, bestInTheWorld: { years:[2006, 2007, 2008, 2009, 2010, 2018]},
}

//2 - imprima no console : "A jogadora Marta Silva tem 34 anos de idade".
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade.')

//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo os anos
//FEITO

//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.years.length + " vezes.")

//5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log ('A jogadora possui ' + player.medals.golden + ' ' + 'medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

//For in e For of
//1 - imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let person in names){
    console.log ('Olá ' + names[person])
}
//2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let index in car){
    console.log(index,car[index]);
}