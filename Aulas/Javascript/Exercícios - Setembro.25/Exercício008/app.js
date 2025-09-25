let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{

  let n1 = parseFloat(document.getElementById("n1").value)
  let n2 = parseFloat(document.getElementById("n2").value)
  mult = n1 * n2

  if(!n1 | !n2){
   document.getElementById("popup").innerHTML=`
   <div class="popup">
   <strong>Preencha todos os campos!</strong>
   <button id="btn1">Ok!</button
   </div>

   `
    btn1=document.getElementById("btn1")
    btn1.addEventListener("click",()=>{
      document.getElementById("popup").innerHTML=``
    })

  }else{
  document.getElementById("popup").innerHTML=`
   <div class="popup">
   <strong>Resultado da multiplicação: ${mult}</strong>
   <button id="btn1">Ok!</button
   </div>

   `

   btn1=document.getElementById("btn1")
    btn1.addEventListener("click",()=>{
      document.getElementById("popup").innerHTML=``
    })

  }


})



