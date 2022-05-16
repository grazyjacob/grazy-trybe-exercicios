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

//2//
if (a>b){
    console.log (a);
}else if (a<b){
    console.log (b)
}
//3//
if (a>b&&a>c){
    console.log(a);
} else if (b>a&&b>c){
    console.log (b);
} else if (c>a&&c>b){
    console.log(c);
}
//4//
const valor = null;
if (valor>=1){
    console.log("positive")
} else if (valor<0){
    console.log ("negative");
} else {
    console.log ("zero");
}

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
let salBruto = 3000 ;
let descontos = null;
let salBase = salBruto - descontos;
let descontosTotais = null;
let salLiq = salBase - descontosTotais;



//INSS//
if (salBruto <= 1556.94){
descontos = salBruto * 8/100;
} else if (salBruto > 1556.95 && salBruto < 2594.92){
descontos = salBruto * 9/100;
} else if (salBruto > 2594.93 && salBruto < 5189.82){
descontos = salBruto * 11/100;
} else if (salBruto > 5189.82) {
descontos = salBruto - 570.88;
}


//IR//
if (salBase < 1903.98){
    descontosTotais = salBase + 0 + descontos;
}else if (salBase > 1903.99 && salBase < 2806.65){
    descontosTotais = salBase * 7.5/100 - 142,80;
} else if (salBase > 2826.66 && salBase < 3751.05){
    descontosTotais = salBase * 15/100 -354.80;
}else if (salBase > 3751.06 && salBase < 4664.68 ) {
    descontosTotais = salBase * 22.5/100 - 636.13;
} else if (salBase > 4664,68){
    descontosTotais = salBase * 27.5/100 - 869.36;
}

console.log (salLiq);

/*


Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;

7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.*/