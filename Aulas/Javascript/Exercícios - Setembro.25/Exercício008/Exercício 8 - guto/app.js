let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{

let valor1 = parseFloat(document.getElementById("valor1").value)
let valor2 = parseFloat(document.getElementById("valor2").value)


  if(  
      !valor1    //se o valor1 ou o valor2 ou os 4 radios retornarem unchecked
    || !valor2


    /*Então o if será verdadeiro se:
      - valor1 estiver vazio/errado OU
      - valor2 estiver vazio/errado OU
      - Nenhuma operação tiver sido escolhida.*/

    ||(  //nenhuma das operações foi marcada ?
      document.getElementById("adicao").checked == false  
    && document.getElementById("subtracao").checked == false
    && document.getElementById("multiplicacao").checked == false
    && document.getElementById("divisao").checked == false)
  ){


   document.getElementById("0").innerHTML=`
   <div class="popup">

   <strong>Preencha todos os campos!</strong>

   <button id="btn1">Ok!</button>
   </div>
   `





  }else{

   if(document.getElementById("adicao").checked == true){
    resultado = valor1 + valor2
    
    document.getElementById("0").innerHTML=`
    <div class="popup">
    <strong>Resultado : ${resultado} 😁 </strong>
    
    <button id="btn1">Ok!</button>
    </div>
    `

   }
   
   else if(document.getElementById("subtracao").checked == true){
    resultado = valor1 - valor2
    
    document.getElementById("0").innerHTML=`
    <div class="popup">
    <strong>Resultado : ${resultado} 😁 </strong>
    
    <button id="btn1">Ok!</button>
    </div>
    `

   }else if(document.getElementById("multiplicacao").checked == true){
    resultado = valor1 * valor2
    
    document.getElementById("0").innerHTML=`
    <div class="popup">
    <strong>Resultado : ${resultado} 😁 </strong>
    
    <button id="btn1">Ok!</button>
    </div>
    `

   }else if(document.getElementById("divisao").checked == true){
    resultado = valor1 / valor2
    
    document.getElementById("0").innerHTML=`
    <div class="popup">
    <strong>Resultado : ${resultado} 😁 </strong>
    
    <button id="btn1">Ok!</button>
    </div>
    `

   }

  }

  }


)



