btn = document.getElementById("btn")
document.getElementById("popup").style.display = "none"

function site(site) {
  window.open("https://" + site + ".com")
}

btn.addEventListener("click", () => {
  input = document.getElementById("input").value




  if (!input) {
    document.getElementById("popup").style.display = "flex"

    btn1 = document.getElementById("btn1")
    btn1.addEventListener("click", () => {
      document.getElementById("popup").style.display = "none"
    })

  } else {
    site(input)
  }
})