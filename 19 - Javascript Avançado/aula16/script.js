/* 

DESTRUCTURING ASSIGNMENTS


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

botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() { 
  const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(transformarEmJSON)
    .catch(exibirErro)

  const {
    name,
    email,
    phone
  }= dados

    console.log(`nome = ${name} / email = ${email} / telefone = ${phone}`)
}



