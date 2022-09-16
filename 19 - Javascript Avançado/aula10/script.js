/* 

SÍNCRONO VS ASSÍNCRONO

*/

function primera(){
  console.log('primeira')
}

function segunda(){
  console.log('segunda')
}

setTimeout(primera, 2000);

segunda()

