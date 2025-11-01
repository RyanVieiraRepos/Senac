cards = []


function salvar() {
    let umCard = {

        nome: document.getElementById('nome').value,
        linkFoto: document.getElementById('linkFoto').value,
        ano: document.getElementById('ano').value,
        select: document.getElementById('select').value,
        linkTrailer: document.getElementById('linkTrailer').value,
        genero: document.getElementById('genero').value,
        duracao: document.getElementById('duracao').value,
        desc: document.getElementById('desc').value
    }


    cards.push(umCard)

    console.dir(cards)
}

function listar() {
    let lista = ''

    cards.forEach((umCard, i) => {

        lista += `
            <div class="card m-3" style="width: 18rem;">
            <img class="card-img-top" src="${umCard.linkFoto}" alt="imagem">
            
            <div class="card-body d-flex flex-row justify-content-between m-2">
            <p class="card-title border-end border-black p-1">${umCard.ano}</p>
            <p class="card-text p-1">$${umCard.select}</p>
            <p class="card-text border-start border-end  p-1 border-black">${umCard.genero}</p>
            <p class="card-text border-black p-1">${umCard.duracao}</p>
          </div>
          <p class='m-2'>${umCard.desc}</p>
    
          <a href="${umCard.linkTrailer}" class="btn btn-primary">Ver Trailer</a>
          <a class="btn btn-danger" onclick='fnExcluir(${i})'>Excluir Filme</a>
        </div>
           `
    })
    document.getElementById('lista').innerHTML = lista
}

function limpar() {
    document.getElementById('form').reset()
}

function fnExcluir(indice) {
    cards.splice(indice, 1)
    listar()
}



//CLICK

document.getElementById('saveBtn').addEventListener('click', () => {
    const nome = document.getElementById('nome').value
    const linkFoto = document.getElementById('linkFoto').value
    const ano = document.getElementById('ano').value
    const select = document.getElementById('select').value
    const linkTrailer = document.getElementById('linkTrailer').value
    const genero = document.getElementById('genero').value
    const duracao = document.getElementById('duracao').value
    const desc = document.getElementById('desc').value



    if (!nome || !linkFoto || !ano || !select || !linkTrailer || !genero || !duracao || !desc) {
        document.getElementById('popup').style.display = 'flex'






    } else {
        salvar();
        listar();
        limpar()
    }




})







//CLICK
document.getElementById('closePop').addEventListener('click', () => {
    console.log('closePop')
    document.getElementById("popup").style.display = 'none'
})