/*
/// tipos primitivos

//boolean
var vOUf = false;
console.log(typeof(vOUf))

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Bruno';
console.log(typeof(nome))
*/



/*

//declaracao de variavel

//var --- variavel de escopo global podendo ser alterado seu valor em varias partes do codigo
var variavel = 'Bruno'; //declarei um valor a variavel
console.log(variavel);
var variavel = 'Drielle';
console.log(variavel);//alterei o valor da variavel

//let --- variavel de escopo de bloco podendo ser alterado somente do bloco declarado
let variavel2 = 'Oliveira';
console.log(variavel2);

//const --- constante tem seu valor definido inicial nao podendo ser alterado durante o codigo (OBRIGATORIO A SUA DECLARACAO)
const constante = 'Bruno Oliveira';
console.log(constante)
*/


/*
//escopo

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoInterno = 'local';
    console.log(escopoInterno);
}

escopoLocal();
*/


/*
//atribuicao ---  o sinal de = (igual) representa atribuicao de valores
var nome = 'Bruno';
console.log(nome)

//comparacao de valores --- para comparacao de valores utiliza-se == (retorna um valor boolean) 
var numero1 = 0;
var numero2 = 0;
console.log(numero1 == numero2);

//adicao --- representado pelo sinal de +
var adicao = 1 + 1;
console.log(adicao);

//subtracao --- representado pelo sinal de - 
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicacao --- representado pelo sinal *
var multiplicacao = 2 * 2;
console.log(multiplicacao);

//divisaoReal --- representado pelo sinal de /
var divisaoReal = 4 / 4;
console.log(divisaoReal);

//divisaoInteira --- traz o resto da divisao representado pelo sinal de %
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciacao --- representado pelo sinal de **
var potenciacao = 2 ** 10;
console.log(potenciacao);
*/


/*
//operadoreRelacionais --- Retorna valor boolean

//maiorQue --- representado pelo sinal de >
var maiorQue = 1 > 3;
console.log(maiorQue);

//menorQue --- representado pelo sinal de <
var menorQue = 1 < 3;
console.log(menorQue);

//maiorOuIgualA --- reoresentado pelo sinal >=
var maiorOuIgualA = 1 >= 1;
console.log(maiorOuIgualA);

//menorOuIgualA --- reoresentado pelo sinal <=
var menorOuIgualA = 1 <= 1;
console.log(menorOuIgualA);
*/


//valores logicos --- fazem a consulta de valores logicos

//e --- representado pelo sinal &&

/*-------- 
false && false (false)
false && true (false)
true && false (false)
true && true (true) 
*/

/*
var e = true && true;
console.log(e);

//ou --- representado pelo sinal ||
//se qualquer valor for verdadeiro o valor da sera true
var ou = false || true;
console.log(ou);

//nao --- representado pelo sinal !
//inverte o valor true para false e vice-versa

var nao = !true;
console.log(nao);
*/