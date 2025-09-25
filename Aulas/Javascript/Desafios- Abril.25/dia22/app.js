//Missão: Criando uma agenda de contatos
//Objetivo:
//● Laço de repetição(for)


let nomes = []
let telefones = []
let cidades = []
let novoContato = "S"
let contador = 0

while(novoContato.toUpperCase() == "S"){ // a condição se inicia verdadeira, seu valor será definido novamento com um prompt, cada array de indice selecionado pelo valor do contador, será preenchida por um prompt, com uma String, caso o novo valor do novoContato for "S", é somado um ao contador, loopando o código, mas selecionando o próximo índice
    nomes[contador] = prompt("Informe o nome", "")      
    telefones[contador] = prompt("Informe o telefone", "")
    cidades[contador] = prompt("Informe a cidade", "")
    novoContato = prompt("Cadastrar novo Contato? [S]im / [N]ão" ,"")
    contador++;
} 


for (i=0; i < nomes.length; i++){ //se zero menor que o tamanho da array nomes, somado mais um ao zero, será mostrado no console cada índice das três arrays preenchidas 
 console.log("Nome: " + nomes[i])
 console.log("Telefone: " + telefones[i])
 console.log("Cidade: " + cidades[i])
 console.log("-------------")
}