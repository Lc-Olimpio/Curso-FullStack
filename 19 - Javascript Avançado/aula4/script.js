/* 
MAP

O map é um método que percorre arrays e retorna novos arrays. 
*/

const clientes = [
  {name: 'Antonio', lastname: 'Silva'},
  {name: 'João' , lastname: 'Rodriguez'},
  {name: 'Carlos', lastname: 'Junior'}
]

const clientesArray = []

clientes.forEach(function(cliente){
  clientesArray.push(cliente.name + ' ' + cliente.lastname)
  }
)

console.log(clientesArray)

const clientesMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clientesMap)