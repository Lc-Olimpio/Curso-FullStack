/* 

LOCAL STORAGE


*/

const tarefas = [
  {tarefa:'Estudar JS'},
  {tarefa: 'Estudar node.js'},
  {tarefa: 'Estudar react.js'}
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefas' , tarefasJson) // Armazenando em JSON

const valor = localStorage.getItem('tarefas') // Requerindo o elemento armazenado

console.log(valor)

const tarefasObj = JSON.parse(valor) // Retornando o JSON para objeto

console.log(tarefasObj)