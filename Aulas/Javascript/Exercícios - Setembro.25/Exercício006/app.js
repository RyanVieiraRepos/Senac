
btn = document.getElementById("btn")
btn.addEventListener("click",()=>{


let nome = document.getElementById("nome").value
let cargaHoraria = parseFloat(document.getElementById("cH").value)
let horasTrabalhadas = parseFloat(document.getElementById("hT").value)
saldo = horasTrabalhadas - cargaHoraria



if(!nome | !cargaHoraria | !horasTrabalhadas){

  console.dir(nome,cargaHoraria,horasTrabalhadas)
  document.getElementById("popup").innerHTML=`
  <div class="popup">
    <strong>Preencha todos os campos!</strong>
    <button id="btn1">Ok!</button>
  </div>
  `

  btn1=document.getElementById("btn1")
  btn1.addEventListener("click", ()=>{
    document.getElementById("popup").innerHTML=`
    
    `
  })


}else if(saldo >= 0){
  document.getElementById("popup").innerHTML=`
<div class="popup">${"O funcionário " + nome + " possui " + saldo+ " horas extras! 👌"}
<button id="btn1">Ok!</button>
</div>
`
btn1=document.getElementById("btn1")
  btn1.addEventListener("click", ()=>{
    document.getElementById("popup").innerHTML=`
    
    `})

    document.getElementById("lista_funcionarios").innerHTML+=`
    <strong>${nome +" possui "+ saldo +" horas extras! 😁"}</strong>

    `

}else if(saldo < 0){
document.getElementById("popup").innerHTML=`
<div class="popup">${"O funcionário " + nome + " está devendo " +saldo * -1+ " horas! 👌"}
<button id="btn1">Ok!</button>
</div>
`

btn1=document.getElementById("btn1")
  btn1.addEventListener("click", ()=>{
    document.getElementById("popup").innerHTML=`
    
    `})

    document.getElementById("lista_funcionarios").innerHTML+=`
    <strong>${nome +" está devendo "+ saldo +" horas... 😪"}</strong>

    `
}




})

