







    



const btn=document.getElementById("btn")

btn.addEventListener("click", ()=>{


  
    
  num1=document.getElementById("num1").value
  num2=document.getElementById("num2").value

  let n1 = parseFloat(num1)
  let n2 = parseFloat(num2)
 
  console.log(n1+n2) //+ operador de adição
  console.log(n1-n2) //+ operador de subtração
  console.log(n1*n2) //+ operador de multiplicação
  console.log(n1/n2) //+ operador de divisão
  console.log(n1%n2) //+ operador de módulo, pega o resto da divisão

  console.log(n1**n2) //+ operador de potenciação, pega um número e eleva a outro 10²





    document.getElementById("soma").innerText=+n1+n2 
    document.getElementById("minus").innerText=+n1-n2
    document.getElementById("mult").innerText=+n1*n2
    document.getElementById("div").innerText=+n1/n2
    document.getElementById("module").innerText=+n1%n2
})


