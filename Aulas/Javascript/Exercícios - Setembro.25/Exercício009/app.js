btn = document.getElementById("btn")
btn.addEventListener("click", () => {

  let frase = document.getElementById("frase").value
  let num = parseFloat(document.getElementById("num").value)


  console.log(frase + num)

  if (!frase || !num) {
    document.getElementById("popup").innerHTML = `
 <div class="popup">
<strong>Preencha todos os campos</strong>
<button id="btn1">Ok!</button>
 </div>
 `
    btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {
      document.getElementById("popup").innerHTML = ``
    })




  } else {


    for (let contador = 0; contador < num; contador++) {
      document.getElementById("lista").innerHTML += `
  <li>${frase}</li>
  `
    }

    // document.getElementById("cont").innerHTML += `
    // <button type='button' id="limpar">Limpar</button>`

    // limpar = document.getElementById("limpar")
    // limpar.addEventListener("click", () => {
    //   document.getElementById("lista").innerHTML = ``
    //   document.getElementById("limpar").remove("limpar")
    // })


document.getElementById("limpar").style.display="block"

  }

})

      limpar = document.getElementById("limpar")
      limpar.addEventListener("click", () => {
      document.getElementById("lista").innerHTML = ``
      document.getElementById("limpar").style.display="none"
    })