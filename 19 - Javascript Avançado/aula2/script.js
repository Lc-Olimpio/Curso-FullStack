  /* 
  
  HOISTING

  Hoisting é o comportamento padrão do JavaScript de mover as declarções para o topo de um escopo.
  
  */


function teste(){
  outraFuncao()

  function outraFuncao(){
    console.log('ok, sou a outra função')
  }
}

teste()