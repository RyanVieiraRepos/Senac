



btn.addEventListener("click", () => {


  btn = document.getElementById("btn")
  popup = document.getElementById("popup")
  inputTotal = parseFloat(document.getElementById("total").value)
  inputPorcentagem = parseFloat(document.getElementById("porcentagem").value)
  select = document.getElementById("select").value


  console.log("valores : " + inputTotal + " " + inputPorcentagem + " " + select)

  operacao(inputTotal, inputPorcentagem, select, popup)



})


function operacao(total, porcentagem, operacao, popup) {

  const valorPorcentagem = porcentagem / 100 * total



  if (!total || !porcentagem) {

    console.log("Preencha os campos!")

    popup.style.display = "flex"
    document.getElementById("popup").innerHTML = `
      
        <strong>Preencha os campos</strong>
        <button id="btn1">Ok!</button>
     
     `

    btn1.addEventListener("click", () => {
      popup.style.display = "none",
        console.log("btn1")
    },



    )

  } else if (operacao == "acre") {

    totalPagar = total + valorPorcentagem



    popup.innerHTML = `
      
       <strong>Valor Total : R$${totalPagar.toFixed(2)}</strong>
       <button id=btn1>Finalizar Pedido</button>
      
     `
    popup.style.display = "flex"

    let btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {
      popup.style.display = "none"

    }),

      console.log("total : " + totalPagar)

  } else {

    totalPagar = total - valorPorcentagem

    popup.innerHTML = `
      
       <strong>Valor Total : R$${totalPagar.toFixed(2)}</strong>
       <button id=btn1>Finalizar Pedido</button>
      
     `
    popup.style.display = "flex"

    let btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {

      popup.style.display = "none"



    }),
      console.log("total : " + totalPagar)

  }



}












/*if (!totalpagar || !porcentagem) {
    document.getElementById("popup").innerHTML.display = "block"
    btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {
      document.getElementById("popup").style.displaynone
    })

  } else if (select == "acre") {
    operacao(inputTotal, inputPorcentagem, select, popup)

  } else {
    operacao(inputTotal, inputPorcentagem, select, popup)
  }*/