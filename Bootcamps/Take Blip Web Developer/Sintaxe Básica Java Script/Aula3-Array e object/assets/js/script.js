// o que sao vetores ou arrays

//como declarar
/*
let arrays =['string',2,true];
console.log(arrays); 
*/

/*
//pode guardar varios tipos de dados e outros arrays
let array = ['string',5,true,['array1'],['array2'],['array3'],['array4']];
console.log(array);
*/

//manipupacao de arrays

/*
//forEach
//repeticao de item ou indice dentro do array

array.forEach(function(item, index){console.log(item,index)})
*/

/*
//push
//adiciona um item no final do array

array.push('final do array');
console.log(array)
*/

/*
//pop
//remove um item no final do array

array.pop();
console.log(array);

*/

/*
//shift
//remove um item no inicio do arrary

array.shift();
console.log(array);
*/

/*
//unshift
//adiciona um item ao inicio do array

array.unshift('Bruno');
console.log(array);
*/

/*
//indexof
//retorna o indice de um item;

console.log(array.indexOf(true));
*/

/*
//splice
//remove ou substitui um item pelo índice

array.splice();
console.log(array);
*/

/*
//slice
//retorna uma parte de um array existente

let novoArray = array.slice(0,3);
console.log(novoArray); 
*/

//Objeto

let object = {string:'string',number:1,boolean:true,array:["array"], objectInterno: {objectInterno:'objeto interno',boolean:false}};
console.log(object.objectInterno);
/*
//desestruturação
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);
*/

var {string,boolean,objectInterno} = object;
console.log(string,boolean,objectInterno);
