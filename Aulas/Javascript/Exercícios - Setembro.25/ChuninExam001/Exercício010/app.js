

   const botao = document.getElementById("button")

   botao.addEventListener("click", function somar(){
    
    let a = document.getElementById("number1").value
    let b = document.getElementById("number2").value
    let c = document.getElementById("number3").value

    let inicio = b , fim = c
    
    for(i = 0 ;i <= c; i++){
    
    if(b > c){
        alert("Erro!\n Tente novamente!")

        
    }else if(b<= c){
        alert(a*b)

        b++
    }
    }
 
    alert("Resultado da soma : " + soma)
    

})