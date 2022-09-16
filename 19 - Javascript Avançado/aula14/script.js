/* 

FETCH

O fetch substitiu o XMLHttpRequest, é através dele que fazemos requisições atualmente.


*/

function transformarEmJSON(response) {
  return response.json()

}

function exibirNaTela(response) {
  console.log(response)
}

function exibirErro() {
  console.log('Ops, aconteceu um erro')
}

const botaoCarregar = document.querySelector('#carregarFotos')

configs = {
  method: 'GET',
  headers: {}
}

botaoCarregar.onclick = ()=> 
  fetch('https://jsonplaceholder.typicode.com/photos', configs)
    .then(transformarEmJSON)
    .then(exibirNaTela)
    .catch(exibirErro)




