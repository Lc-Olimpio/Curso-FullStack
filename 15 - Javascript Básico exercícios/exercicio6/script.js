let listaAtores = [

  {
    nome: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },

  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars Episódios IV-VI',
  },

  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O Início'
  },
]

let htmlinfo = ''

for (let object of listaAtores) {

  htmlinfo += `  

    <div class="box">
      <h1>${object.nome}</h1>
      <p>Interpreta o personagem ${object.personagem} no filme ${object.filme} </p>
    </div>
  `
}

document.querySelector('#te').innerHTML = htmlinfo