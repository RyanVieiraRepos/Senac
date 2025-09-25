document.body.style.color="rgba(255, 255, 255, 1)";

let periodo = document.getElementById("periodo")



periodo.addEventListener("change",()=>{
let valor = periodo.value

document.getElementById("resposta").innerHTML=`
${valor}
`


if(valor == "Dia ☀️"){
 document.body.style.backgroundColor="rgba(206, 233, 255, 1)";
 document.body.style.color="rgba(0, 0, 0, 1)";
 document.querySelector(".Container").style.borderColor="black";
 document.getElementById("img").innerHTML=`
  <img src="./bomdia.png">
  `


}else if(valor == "Tarde 🫣"){
document.body.style.backgroundColor="rgba(228, 135, 58, 1)";
document.body.style.color="rgba(0, 0, 0, 1)";
document.getElementById("img").innerHTML=`
  <img src="./tarde.png">
  `
}else if(valor == "Noite 🌉"){
document.body.style.backgroundColor="rgba(36, 18, 77, 1)";
document.body.style.color="rgba(255, 255, 255, 1)";
document.querySelector(".Container").style.borderColor="white";
document.getElementById("img").innerHTML=`
  <img src="./noite.png">
  `

}else{
  document.getElementById("resposta").innerHTML=``
  document.body.style.backgroundColor="rgb(117, 89, 70)";
  document.body.style.color="rgba(255, 255, 255, 1)";
  document.querySelector(".Container").style.borderColor="white";
  document.getElementById("img").innerHTML=`
  <img src="./original.png">
  `
  
}

})



