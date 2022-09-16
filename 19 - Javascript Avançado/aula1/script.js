  /* 
  
  ESCOPO

  GLOBAL
  LOCAL
  
  - O ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIÁVEL

  - AS FUNÇÕES NO JS CRIAM SEU PRÓPRIO ESCOPO
    - AS VARIÁVEIS DE UMA FUNÇÃO NÃO SÃO ACESSIVEIS FORA DELA
  
  */

const a = 123 // ESCOPO GLOBAL

function teste() {
  const a = 123 // ESCOPO LOCAL
  console.log(a)
}

console.log(a)

teste()