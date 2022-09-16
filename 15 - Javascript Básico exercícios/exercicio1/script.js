let nome = prompt('Digite o seu nome')
let inputIdade = prompt('Digite a sua idade')

let idade = parseInt(inputIdade)

let maiorOuMenor

if (idade >= 18) {
  maiorOuMenor = 'maior'
} else if (idade < 18) {
  maiorOuMenor = 'menor'
}

let mensagem = `Olá ${nome}! Você é ${maiorOuMenor} de idade.`

document.write(mensagem)