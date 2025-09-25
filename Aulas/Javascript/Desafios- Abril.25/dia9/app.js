//confirm ("Deseja salvar o arquivo ?") //ok retornará true, cancel retornará false

//let decisao = ("Deseja salvar o arquivo ?") //armazeno o resultado do confirm


let continuar = confirm("Deseja continuar a operação?");

if(continuar == true){
    alert("você cliclou no botão OK. Vamos continuar a operação")
}else{
    alert("Você clicou no botão CANCELAR. Vamos cancelar a operação.");
}




let teste = confirm("Cancelo a operação chefia ?")

if (teste == true){
  alert("Daremos continuidade a operação.")
}else{
    alert("A operção será cancelada.")
}