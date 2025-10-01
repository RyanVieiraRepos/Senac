
listaDeNumeros = []

function fnLimpar() {
  document.getElementById("formulario").reset()

}


function fnSalvarNumero() {

  let numero = parseFloat(document.getElementById('numero').value)


  listaDeNumeros.push(numero)
  console.log(listaDeNumeros)

  document.getElementById("result").innerHTML=``
}

function fnCalcularMedia() {
  
  
  somaDosNumeros = 0
  media = 0   // media todos somados dividido pela qtd de valores
  qtdNumeros = listaDeNumeros.length // qtd = qtd de indices da array


  for (i = 0; i < qtdNumeros; i++) {
    somaDosNumeros += listaDeNumeros[i]
  }
  media = somaDosNumeros / qtdNumeros

  console.log("média: " + media)

  document.getElementById("result").innerHTML+=`
  <strong>Média : ${media.toFixed(2)}</strong>
  `

  listaDeNumeros=[]
}


