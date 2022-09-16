/* 

JSON

JAVASCRIPT OBJECT NOTATION

*/

const objeto = {
  nome:'Lucas',
  idade:23
}

let json = JSON.stringify(objeto)

console.log(json)

jsonparse = JSON.parse(json)

console.log(jsonparse)