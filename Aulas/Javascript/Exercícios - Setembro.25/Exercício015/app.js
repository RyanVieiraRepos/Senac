


let contatos = []




function fnSalvar() {
    nome = document.getElementById('nome').value,
        telefone = document.getElementById('telefone').value,
        email = document.getElementById('email').value,
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



    contatos.forEach((umContato,i) => { //para cada objeto da array
        dados += `  
    <div class="card m-3" style="width: 18rem ;" >

        <img class="card-img-top" src="${umContato.foto}" alt="Imagem não carregada">

        <div class="card-body">
          <h5 class="card-title">${umContato.nome}</h5>
          <p class="card-text">${umContato.telefone}</p>
          <p class="card-text">${umContato.email}</p>
          <button type='button' class="btn btn-primary bg-danger" id='cardDel' onClick="fnExluir(${i})" >Excluir Contato</button>
        </div>

      </div>
    </div>

`
    })

    document.getElementById('listaDeContatos').innerHTML = dados
}

function fnExluir(indice) {
contatos.splice(indice,1)
fnListar()
}

function fnLimpar(){
    document.getElementById('formulario').reset()
}









document.getElementById('btSalvar').addEventListener('click', () => {
    fnSalvar(); fnListar(); fnLimpar()
})





document.getElementById('closePop').addEventListener('click', () => {
    console.log('closePop')
    document.getElementById("popup").style.display = 'none'
})