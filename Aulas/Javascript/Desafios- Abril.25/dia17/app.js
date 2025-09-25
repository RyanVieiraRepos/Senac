function JoãoBoscoEvinicius() {
    let chorameligaimplora = [chorameliga = prompt("Depois do, Chora me liga, vem o seguinte verso...")]

    if (chorameligaimplora[0] == "meu beijo de novo") {
        document.getElementById("cont").style.justifyContent = "space-between"

        document.getElementById("chora").style.width = "220px"
        document.getElementById("chora").style.height = "90px"
        document.getElementById("chora").style.backgroundColor = "white"
        document.getElementById("chora").style.borderRadius = "15px"
        document.getElementById("chora").style.display = "flex"
        document.getElementById("chora").style.justifyContent = "space-between"

        document.getElementById("chora").style.marginLeft = "500px"

        document.querySelector("#chora").innerHTML +=
            `<em id="em">
     Fã de carteirinha, Parabéns
     </em>
     `,
            document.getElementById("em").style.color = "black"
        document.getElementById("em").style.marginLeft = "30px"
        document.getElementById("em").style.marginTop = "50px"
    }
}