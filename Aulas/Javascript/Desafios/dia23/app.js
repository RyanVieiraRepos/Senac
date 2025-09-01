var media = 0, nota = 0, contador = 0
var nome = prompt("Informe o nome do aluno", "Digite Aqui!!!") 




//enquanto o valor de contador for menor que 4, o usuário através de um prompt, preencherá a variável nota, se o valor de nota não for um número, será exibido uma mensagem no navegador, caso se ja informado um número, a variável media conterá a soma da media e da nota, será somao 1 ao contador, fazendo com que, depois de 4 ciclos, o navegador pare de abrir novos prompts 

//IsNaN() está verificando se a var nota contém um número 

while (contador < 4){  
nota = prompt("Informe a nota do aluno","Digite aqui")
if(isNaN(nota)){
  alert("Voce não digitou um numero válido")
}else{
  media = parseFloat(media) + parseFloat(nota);
  contador++;
   }
}

media = media/4;

document.write("A média de " + nome) // dois valores e dois textos serão inseridos no html
document.write(" é " + media.toFixed(1)); //a função toFixed() corta a casa decimal de acordo com o valor parâmetrado
