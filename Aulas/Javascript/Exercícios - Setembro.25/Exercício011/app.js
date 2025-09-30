addButton = document.getElementById("addButton")
AvgButton = document.getElementById("avgButton")
resetButton = document.getElementById("resetButton")
inputCont = document.getElementById("inputs")


addButton.addEventListener("click",()=>{
  inputCont.innerHTML+=`
  <input type="number" id="numero" placeholder="Número">
  `
})

resetButton.addEventListener("click",()=>{
  inputCont.innerHTML=`
  <input type="number" id="numero" placeholder="Número">
  `
})