/* 

FILTER

O filter também recebe e devolve arrays e ele possibilita a 'filtragem' de elementos dentro de arrays, 
*/

const clientes = [
  {name: 'Antonio', lastname: 'Silva', age: 14},
  {name: 'João' , lastname: 'Rodriguez', age: 18},
  {name: 'Carlos', lastname: 'Junior', age: 20}
]

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18)

console.log(clientesMaiores)
