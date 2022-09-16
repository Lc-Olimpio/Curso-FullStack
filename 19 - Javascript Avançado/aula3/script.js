/* 

ARROW FUNCTIONS

ES6

As funções de seta nos permitem escrever uma sintaxe de função mais curta

*/


const teste1 = (param1, param2) => {
  console.log(param1, param2)
}

teste1(1,2)



const teste2 = (param3,param4) => {
  return param3 + param4
}

const result1 = teste2(1,2)
console.log(result1)



const teste3 = (param5,param6) => param5 + param6 // Retorno implícito

const result2 = teste3(2,3)
console.log(result2)



botao = document.querySelector('#botao')

botao.onclick = () => {
  console.log(this)
} 
// o THIS em uma arrow function se comporta diferente