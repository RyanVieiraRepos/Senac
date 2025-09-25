var aluno1 = "fernando";
var aluno2 = "lucio";
var aluno3 = "claudio";
var aluno4 = "renata";
var aluno5 = "joao";

console.log(aluno1, aluno2. aluno3, aluno4, aluno5);




var nomeAlunos = ["Maria","Rose", "Claudio", "Renata", "Fernand0" ] //5 indices
//alterando o conteudo de um dos índice
nomeAlunos[0] = "Joana"


var contador = 0
while(contador <=4){ //enquanto o valor de contador for menor ou igual a 4
    console.log(nomeAlunos[contador]); //será escrito no console o conteúdo do índice selecionado pelo valor do contador
    contador++; //será somado +1 no contador
}

//menos linhas, mais performático


//usando o while para listar o conteúdo de uma array


let carros = ["carro1", "carro2", "carro3", "carro4", "carro5"] //declarei 5 indices
let contador1 = 0;

while(contador1 <= 4){
 carros[contador1] = prompt("informe o modelo do carro n*" + contador1 , "Digite aqui");
  contador1++
} //um contador para preecher os indices da array com um prompt

contador1 = 0

while(contador1 <= 4){
    console.log("Modelo n* " + contador1 + ": " + carros[contador1]);
    contador1++;
} //exibe no console os novos valores