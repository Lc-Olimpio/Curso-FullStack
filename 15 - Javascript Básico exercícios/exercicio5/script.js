let inputNum = prompt('Digite qual tabuada você que saber:') 

let num = parseInt(inputNum)

let result = 0


for (let x = 0; x <=10; x++) {
  result = num * x 
  document.write(`${num} x ${x} = ${result} <br>`)
}