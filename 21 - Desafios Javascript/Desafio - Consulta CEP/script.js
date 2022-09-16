
formulario = document.querySelector('#formulario')
inputCep = document.querySelector('#cep')

function getJson(response) {
  return response.json()
}

function fill(dados) {
  

  if (dados.erro == 'true') {
    alert('Cep inválido')
    formulario.cep.value = ''
    return
  }

  formulario.rua.value = dados.logradouro
  formulario.bairro.value = dados.bairro
  formulario.cidade.value = dados.localidade
  formulario.estado.value = dados.uf
  formulario.ibge.value = dados.ibge
}

function erro() {
  if (valorDoCep == '') {
    return
  }

  if(valorDoCep.length == 8){
    alert('Cep informado não existente')
    formulario.cep.value = ''
    return
  }
  alert('informe um Cep válido')
  formulario.cep.value = ''
  return
}

inputCep.onblur = ()=> {
  valorDoCep = inputCep.value

  fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)
  .then(getJson)
  .then(fill)
  .catch(erro)
}



