var dataCompleta;
dataCompleta = new Date();
let horaAtual = dataCompleta.getHours


/*dataCompleta.getDay(); // dia da semana em número
dataCompleta.getDate(); // dia do mês
dataCompleta.getMonth();
dataCompleta.getFullYear();
dataCompleta.getHours();
dataCompleta.getMinutes();
dataCompleta.getSeconds();
*/

if (horaAtual <=12){
    alert("Bom dia!");
}else if(horaAtual <= 18){
    alert("Boa Tarde!");
}else{
    alert("Boa noite!");
}

dia = dataCompleta.getDay()

if (dia<=15){
    alert("Estamos na primeira quinzena do mês")
}else if(dia >=15){
    alert("Estamos na segunda quinzena do mês")
}else if(dia == 20){
    alert("Hoje a vale cai!")
}else if(dia == 5){
    alert("Hoje o pagamento cai na conta!")
}else{
    alert("erro!")
}


//15 minutos