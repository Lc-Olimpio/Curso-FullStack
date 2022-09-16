

let nome = prompt('Digite o seu nome')

let inputIdade = prompt('Digite a sua idade')

let idade = parseInt(inputIdade)

let maiorOuMenor

let matrix

if (idade >= 18) {
  maiorOuMenor = 'maior'
} else if (idade < 18) {
  maiorOuMenor = 'menor'
}

if (nome === 'Thomas Anderson' || nome === 'thomas anderson') {
  matrix = 'Você é personagem do filme The Matrix!'
}

let mensagem = `Olá ${nome}! Você é ${maiorOuMenor} de idade. ${matrix}`


document.write(mensagem)