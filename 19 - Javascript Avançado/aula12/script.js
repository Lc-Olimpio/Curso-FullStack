/* 

CALLBACKS


*/

function exibirNaTela(dados) {
  console.log('exibindo na tela' ,dados)
}

const botaoCarregar = document.querySelector('#carregarFotos')

botaoCarregar.onclick = ()=> carregarFotos(exibirNaTela)

function carregarFotos(callback) {
  const xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText) 
      

      if (callback) {
        callback(response)
      }
    }

  }

  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
  xhttp.send()
}
