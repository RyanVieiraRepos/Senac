const btn = document.getElementById("btn")
function operacao(total, porcentagem, operacao) {
  valorPorcentagem = porcentagem / 100 * total
  let totalPagar = 0



  
  if (operacao == "disc") {
    totalPagar = total + valorPorcentagem


  } else {
    totalPagar = total - valorPorcentagem
  }

}





btn.addEventListener("click", () => {
  let input = document.getElementById("input").value




  if (!input) {
    document.getElementById("popup").innerHTML.display = "block"
    btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {
      document.getElementById("popup").style.displaynone
    })

  } else {

  }
})