

btn.addEventListener("click", () => {

  let inputTotal = parseFloat(document.getElementById("total").value)
  let inputPorcentagem = parseFloat(document.getElementById("porcentagem").value)
  let select = document.getElementById("select").value
  let btn = document.getElementById("btn")
  let popup = document.getElementById("popup")

  operacao(inputTotal, inputPorcentagem, select, popup)
  console.log("valores : " + inputTotal + " " + inputPorcentagem + " " + select)

})


function operacao(total, porcentagem, operacao, popup) {

  valorPorcentagem = porcentagem / 100 * total



  if (!total || !porcentagem) {

    popup.innerHTML.display = "flex"

    btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {
      document.getElementById("popup").style.display = "none"
    },

      console.log("Preencha os campos!")
    )
    
  } else if (operacao == "acre") {

    totalPagar = total + valorPorcentagem


    popup.innerHTML = `
      <div id=popup class="popup">
       <strong>Valor Total : R$${totalPagar.toFixed(2)}</strong>
       <button id=btn1>Finalizar Pedido</button>
      </div>
     `
    popup.style.display = "flex"

    btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {
      popup.style.display = "none"
    }),

      console.log("total : " + totalPagar)

  } else {

    totalPagar = total - valorPorcentagem

    popup.innerHTML = `
      <div id=popup class="popup">
       <strong>Valor Total : R$${totalPagar.toFixed(2)}</strong>
       <button id=btn1>Finalizar Pedido</button>
      </div>
     `
    popup.style.display = "inline"

    btn1 = document.getElementById("btn1")
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