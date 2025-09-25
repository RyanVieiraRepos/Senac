let dataAtual = new Date()
diaSemana = dataAtual.getDay()

console.log(dataAtual.getDay())










/*if(diaSemana == 0){
  document.getElementById("resposta").innerHTML="Domingo"
}else if(diaSemana == 1){
document.getElementById("resposta").innerHTML="Segunda-Feira"
}else if(diaSemana == 2){
document.getElementById("resposta").innerHTML="Terça-Feira"
}
else if(diaSemana == 3){
document.getElementById("resposta").innerHTML="Quarta-Feira"
}
else if(diaSemana == 4){
document.getElementById("resposta").innerHTML="Quinta-Feira"
}
else if(diaSemana == 5){
document.getElementById("resposta").innerHTML="Sexta-feira"
}
else if(diaSemana == 6){
document.getElementById("resposta").innerHTML="Sabado"
}*/



switch(diaSemana){
  case  0: document.getElementById("resposta").innerHTML="Domingo"
    break;


  case  1: document.getElementById("resposta").innerHTML="Segunda-Feira"
    break;
    

  case  3: document.getElementById("resposta").innerHTML="Terça-Feira"
    break;
    

  case  4: document.getElementById("resposta").innerHTML="Domingo"
    break;


  case  5: document.getElementById("resposta").innerHTML="Domingo"
    break;
    

  case  6: document.getElementById("resposta").innerHTML="Domingo"
    break;
  

  case  7: document.getElementById("resposta").innerHTML="Domingo"
    break;
  
    
    default : document.getElementById("resposta").innerHTML="Dia inexistente"
}