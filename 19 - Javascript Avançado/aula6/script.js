/* 

REDUCE

O reduce também é um método para percorrer arrays, porém ele permmite a manipulação dos elementos retornando qualquer tipo de variáveis, não só arrays como o Map e o Filter
*/

const clientes = [
  {name: 'Thiago', score: 34 },
  {name: 'Jaqueline', score: 38 },
  {name: 'Sarah', score: 80 },
  {name: 'Clara', score: 50 },
  {name: 'Sophia', score: 98 }
]

// acc = Accumulator
// curr - current
const clientesReduce = clientes.reduce((acc, curr) => {
  if (curr.score >= 50) {
    acc.pass.push(curr)
  } else {
    acc.fail.push(curr)
  }

  return acc
}, {
  pass:[],
  fail:[]
})

console.log(clientesReduce)

const numeros = [1,2,3,4]

const numerosReduce = numeros.reduce((acc, curr) => {
  
  acc += ` ${curr + 1}` 
  
  return acc
},'')

console.log(numerosReduce)
