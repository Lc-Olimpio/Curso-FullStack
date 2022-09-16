function start () {
  let nome = prompt('Digite o seu nome')

  let inputIdade = prompt('Digite a sua idade')

  if (nome === '' || inputIdade === '') {
    alert('Preencha os campos corretamente!')
    return
  }

  let idade = parseInt(inputIdade)

  let maiorOuMenor

  let matrix = ''

  if (idade >= 18) {
    maiorOuMenor = 'maior'
  } else if (idade < 18) {
    maiorOuMenor = 'menor'
  }

  if (nome === 'Thomas Anderson' || nome === 'thomas anderson') {
    matrix = 'Você é personagem do filme The Matrix!'
  }

  let mensagem = `Olá ${nome}! Você é ${maiorOuMenor} de idade.`

  document.querySelector('#saudacao').innerHTML = mensagem
  document.querySelector('#ma').innerHTML = matrix
}