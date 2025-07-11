//Dia 19
//Missão: Dicionário de animais
//Objetivo:
//● Array
//● Laço de repetição

let nomeCurso = prompt("Informe o nome do curso", "Digite Aqui");
let codigoCurso = prompt("Informe o codigo do curso", "Digite Aqui");
let novoConteudo = "S";
let conteudoTemp = "";
let conteudodoCurso = [];
let contador = 0;

while(novoConteudo == "S"){

    //isso normalmente seria feito com um formulário html, não utilizando o método prompt
conteudoTemp = prompt("Informe o conteudo do curso","Digite aqui");
conteudodoCurso.at(conteudoTemp); //array.push, empurra informações para a array, no caso, o da variável conteudoTemp = ""
novoContaudo = prompt("Deseja cadastrar um novo conteúdo para o curso?[S]im / [N]ao" ,  "Digite aqui")
}