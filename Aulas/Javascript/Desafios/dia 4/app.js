var numero = 7;

if (numero >=7){
    alert("Este número é maior ou igual à 10");
}else{
    alert("Este número é menor do que 10");
}



var continuar = "sim"
if (continuar == "sim"){
    console.log("Mais uma vez")
}else{
    console.log("Agora acabou")
}

/*Nesse exemplo será exibida a mensagem “Mais uma vez” pois será executado os
comandos no bloco verdadeiro do if pois a variável continuar possui um valor igual à “sim”.*/


var nome = prompt("Informe o nome do candidato", "Digite aqui")
var idade = prompt("Informe a idade do candidato", "Digite aqui")



//parseInt(), converte o conteúto para inteiro
if (parseInt(idade) >= 18){
    alert("o cadidato " + nome + " está apto à iniciar o processo."); 
}else{
  alert("O candidato " + nome  + " não está apto à iniciar o processo.");
}



let estadoCivil = (prompt("Informe o seu estado civíl" , "Digite aqui"))

if (estadoCivil = "Solteiro"){
    alert("com essa cara também haha")
}else if(estadoCivil = "Casado"){
    alert("Felicidades ao casal!")
}else{alert("erro")}


//14 minutos