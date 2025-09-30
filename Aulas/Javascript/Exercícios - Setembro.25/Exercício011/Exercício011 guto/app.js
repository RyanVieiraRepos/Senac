
listaDeNumeros = []

function fnLimpar() {
  document.getElementById("formulario").reset()

}


function fnSalvarNumero() {

  let numero = parseFloat(document.getElementById('numero').value)


  listaDeNumeros.push(numero)
  console.log(listaDeNumeros)
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

  document.getElementById("inputs").innerHTML+=`
  <strong>Média : ${media}</strong>
  `
}