// Variáveis //

let myName = "Graziely";
const birthCity = "Botucatu";
let birthYear = 2030;

console.log (birthYear);

//Tipos Primitivos, Tipagem Dinâmica e Operações Aritiméticas//
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof patientAge);

patientId = '50';

console.log(typeof patientId);
//Operações simples//
const base = 5;
let height = 8;
const area = base * height;
console.log(area)

const perimeter = base + height;

//OPeradores Lógicos//
const currentHour = 20;
let message = null;
if (currentHour>=22){
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour>=18&&currentHour<22){
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour>=14&&currentHour<18){
    message = "vamos fazer um bolo pro café da tarde?";
} else if (currentHour>11&&currentHour<14){
    message = "Hora do almoço!!!"
} else if (currentHour>4&&currentHour<11){
    message = "Hmm, cheiro de café recém passado";
}

console.log(message);

//Operador OR//
let weekDay = "quarta-feira";
let messagem = null
if (weekDay=="segunda-feira"||"terça-feira"||"quarta-feira"||"quinta-feira"||"sexta-feira") {
    messagem = " Oba, mais um dia de aprendizado na Trybe>:D."
} else if (weekDay=="sabado"||"domingo"){
    messagem = "FINALMENTE, descanso merecido UwU";
}

console.log(messagem);
//Switch Case//

let situacaoDoAluno;
switch (situacaoDoAluno){
    case ">=8":
    console.log("aprovada");
    break;
    case "<=7":
    console.log("lista");
    break;
    case "<=5":
    console.log("reprovada");
    break;
    default:
    console.log ("não se aplica");
}

//exercícios do dia//
//1//
const num1 = 1;
const num2 = 2;
let adicao = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let modulo = num1 % num2;
console.log(adicao);
//1.1 Implemente o function
function calculadora(num1,num2) {
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    console.log(' O valor da soma é:' + adicao + "\n",'O valor da subtração é:' + subtracao + "\n", 'O valor da multiplicação é:' +
    multiplicacao + "\n", 'O valor da divisão é:'+ divisao + "\n", 'O valor do módulo é:' + modulo);
}

calculadora (2,2)

//2//
if (a>b){
    console.log (a);
}else if (a<b){
    console.log (b)
}
//2 Implemente o function
function returnBigger(number1,number2) {
    if (number1 > number2){
        console.log (number1);
    }else if (number1 < number2){
        console.log (number2)
    }  
    
}
returnBigger(1,10)

//3// 
if (a>b && a>c){
    console.log(a);
} else if (b>a&&b>c){
    console.log (b);
} else if (c>a&&c>b){
    console.log(c);
}
//3 Implemente o function
function BiggerOfThree (number1, number2, number3){
    if (number1 > number2 && number1 > number3){
        console.log(number1);
    } else if (number2 > number1 && number2 > number3){
        console.log (number2);
    } else if (number3 > number1 && number3 > number2){
        console.log(number3);
    }   
}BiggerOfThree(1101,8,200);

//4//
const valor = null;
if (valor>=1){
    console.log("positive")
} else if (valor<0){
    console.log ("negative");
} else {
    console.log ("zero");
}
//4 Implemente o function
function positiveOrNegativeOrZero(number) {
    if (number >= 1) {
        console.log ('positive')
    } else if (number < 0) {
        console.log('negative');
    } else {
        console.log('zero');
    }
} positiveOrNegativeOrZero(0);

function sum(a, b) {
    a + b;
  }
  console.log(sum(1, 2));
  

//5//
const c1 = 100;
const c2 = 40;
const c3 = 40;
const somaDTriang = c1 + c2 + c3;

if (somaDTriang===180){
    console.log ('true');
} else if (somaDTriang!=180) {
    console.log ('false')
}else{
    console.log ('erro')
}

/* 6
rei = qualquer direção porém uma casa por vez
dama = qualquer direcao porém quantas casas quiser desde que estejam livres
torre = em linha reta (vertical ou horizontal)quantas casas quiser
bispo = diagonal quantas casas quiser
cavalo = movimento em L duas casas na horizontal e uma na vertical ou vice versa
peão = uma casa pra frente exceto o primeiro movimento que pode ser duas casas, unica peça que não volta pra trás
*/

let peça = "REI"; 
let peçaLowerCase = peça.toLowerCase();
peça.toLowerCase();
switch (peçaLowerCase){
case "rei":
console.log("qualquer direção porém uma casa por vez")
break;
case "dama":
console.log("qualquer direcao porém quantas casas quiser desde que estejam livres");
break
case "torre":
console.log(" em linha reta (vertical ou horizontal)quantas casas quiser");
break
case "bispo":
console.log("diagonal quantas casas quiser");
case "cavalo":
console.log("movimento em L duas casas na horizontal e uma na vertical ou vice versa");
case "peão":
console.log("uma casa pra frente exceto o primeiro movimento que pode ser duas casas, unica peça que não volta pra trás");
default:
console.log ("erro, peça inesistente");
} 

//7//
let nota = 85;
if (nota >= 90){
console.log("A");
}else if (nota >= 80) {
console.log("B");
}else if (nota >= 70){
console.log ("C");
}else if (nota >= 60){
console.log ("D");
}else if (nota >= 50){
console.log ("E")
}else if (nota < 50){
console.log ("F");
}else if (nota<0||nota>100){
console.log ("erro")    
}else {
console.log("erro, nota inválida")
}

//8//
let nu1 = 3;
let nu2 = 5;
let nu3 = 7;

if (nu1%2==0||nu2%2==0||nu3%2==0){
console.log('true');
} else {
console.log ("false");
}
//9//
let nm1 = 2;
let nm2 = 4;
let nm3 = 200;

if (nm1%2>=1||nm2%2>=1||nm3%2>=1){
console.log('true');
} else {
console.log ("false");
}

//10//
let custo = 5 + (1/5);
let valorDeVenda = 20;
let lucro = valorDeVenda - custo;
if (custo < 0||valorDeVenda < 0){
    console.log('erro')
}else{
console.log(lucro)
}

//11//
let salBruto = 5000 ;
let salLiq = null;
if (salBruto <= 1556,94){
console.log(salBruto + 2/25);
} else if (salBruto > 1556,95 && salBruto < 2594,92){
console.log(salBruto + 9/100);
} else if (salBruto > 2594,93 && salBruto < 5189,82){
console.log(salBruto + 11/100);
} else if (salBruto > 5189,82) {
console.log(salBruto + 570,88)
}