


let contatos = []




function fnSalvar() {
    nome = document.getElementById('nome').value,
        telefone =  document.getElementById('telefone').value,
            email =  document.getElementById('email').value,
                foto = document.getElementById('foto').value


    if (nome == '' || email == '' || telefone == '' || foto == '') {
        console.dir(nome + foto + email + telefone)
        document.getElementById('popup').style.display = 'flex'
    } else {

        let umContato = {
            nome: document.getElementById('nome').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value,
            foto: document.getElementById('foto').value
        }
        contatos.push(umContato)
        console.dir(contatos)


    }

}

function fnListar() {
    let dados = ''



    contatos.forEach((umContato, i) => { //para cada objeto da array
        dados += `  <div class="card m-3" style="width: 18rem;">
        <img class="card-img-top" src="${umContato.foto}" alt="Imagem não carregada">

        <div class="card-body">
          <h5 class="card-title">${umContato.nome}</h5>
          <p class="card-text">${umContato.telefone}</p>
          <p class="card-text">${umContato.email}</p>
          <a href="#" class="btn btn-primary bg-danger" id='cardDel'>Excluir Contato</a>
        </div>
      </div>
    </div>

`
    })

    document.getElementById('listaDeContatos').innerHTML = dados
}

function fnExluir() {

    
}











document.getElementById('btSalvar').addEventListener('click', () => {
    fnSalvar(); fnListar()
})





document.getElementById('closePop').addEventListener('click', () => {
    console.log('closePop')
    document.getElementById("popup").style.display = 'none'
})