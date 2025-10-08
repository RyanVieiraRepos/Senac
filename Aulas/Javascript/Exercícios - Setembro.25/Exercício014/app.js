vaga = []
veiculos = []





function salvar() {



  if (!parseFloat(document.getElementById('vaga').value)
    || !document.getElementById('car').value) {

    console.log("preencha os campos")


  } else {
    vaga.push(parseFloat(document.getElementById('vaga').value))

    veiculos.push(document.getElementById('car').value)

    console.dir(vaga)
    console.dir(veiculos)
  }
}


function listar() {
  console.log(document.getElementById('car').value)
  if (!parseFloat(document.getElementById('vaga').value) ||
    !document.getElementById('car').value) {

    console.log('preencha os campos')


  } else {
    vaga.forEach(() => {

      document.getElementById('table').innerHTML += `
        <div class="tableLinhas"> 

          <strong>${vaga}</strong>
          <strong>${veiculos}</strong>
        </div>`
    }





    ), console.log(i)
  }
}



function limpar() {

  document.getElementById('table').innerHTML = ``
  console.clear()

}

