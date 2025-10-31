lista = []






document.getElementById('calcular').addEventListener('click', () => {
    let valor = parseFloat(document.getElementById('valor').value)
    let desconto = parseFloat(document.getElementById('desconto').value)

    let select = document.getElementById('select')
    selectValue = select.value



    if (!selectValue || !desconto || !valor) {
         document.getElementById('popup').style.display = 'flex'



    } else {

        if (selectValue == '1') { // descont

            desc = (valor * desconto) / 100
            totalDesc = valor - desc

            document.getElementById('result').innerHTML = `R$${totalDesc.toFixed(2)}`
            document.getElementById('form').reset()
            

  

           lista.push(calculoObj)


           document.getElementById('historico').innerHTML+=``


        } else if ('2') {  //acresc

            acre = (desconto / 100) * valor
            totalAcres = valor + acre
            document.getElementById('result').innerHTML = `R$${totalAcres.toFixed(2)}`
            document.getElementById('form').reset()
            
        }
    }

})





document.getElementById('closePop').addEventListener('click', () => {
    console.log('closePop')
    document.getElementById("popup").style.display = 'none'
})