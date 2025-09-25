/*var cargaHorariaSemanal = 44;
var saldoHoras = 0;
var horasTrabalhadas = prompt("Informe o total de horas trabalhadas do funcionário nessa semana:", "Digite Aqui");

saldoHoras = horasTrabalhadas - cargaHorariaSemanal
 
if(saldoHoras > 0){
 alert("O funcionário fez "+ saldoHoras + " hora(s) extra(s) nesta semana.")
}else if(saldoHoras < 0){
    alert("O funcionário está devendo" + (saldoHoras * -7) + " hora(s) extra(s) nesta semana") // saldoHoras transformado em número positivo
}else{
alert("o funcionário não possui hora extra esse semana")
}
*/

//

let nome = (prompt("Informe o nome do funcionário", "Digite aqui"));
let sobreNome = (prompt("Informe o sobrenome do funcionário", "Digite aqui"));
let saldoHoras = prompt("informe a quantidade de horas trabalhadas pelo(a) funcionário(a) "+ nome + " " + sobreNryanome + " este mês", "Digite aqui");

let horasMensais = 176;
let horasTrabalhadas = saldoHoras - horasMensais


if(horasTrabalhadas > 0){
alert("O(A) funcionario(a) " + nome + " " + sobreNome + " fez " + horasTrabalhadas + " hora(s) extra(s) este mês")
}else if(horasTrabalhadas <= 0){
alert("O(A) funcionario(a) " + nome + " " + sobreNome + " está devendo" + (horasTrabalhadas*-1) + " hora(s) este mês")
}else{
 alert("O(A) funcionario(a) " + nome + " " + sobreNome + " não possui hora extra este mês")
}


//20 minutos