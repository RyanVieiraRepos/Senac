
let btn = document.getElementById("btn")
btn.addEventListener("click", () => {

  let nome = document.getElementById("nome").value

  let jan = document.getElementById("jan").value
  let fev = document.getElementById("fev").value
  let mar = document.getElementById("mar").value



  let soma = parseFloat(jan) + parseFloat(fev) + parseFloat(mar)

  console.log(jan)
  console.log(fev)
  console.log(mar)

  console.log(soma)

  if (!jan || !fev || !mar || !nome) {


    document.getElementById("0").innerHTML = `
    <div class="popup">
      <strong>Preencha todos os campos!</strong>
      <button id="btn1">Ok!</button>
    </div>
    `
    btn1 = document.getElementById("btn1")

    btn1.addEventListener("click", () => {
      document.getElementById("0").innerHTML = +``
    })


  } else {

    document.getElementById("0").innerHTML = `
    <div class="popup">
      <strong>Média do vendedor ${nome} : R$${(soma / 3).toFixed(2)}</strong>
      <button id="btn1">Ok!</button>
    </div>
    `
    btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {
      document.getElementById("0").innerHTML = +``
    })

  }




} //close funcão addEvent
) //close 1 addEvent
