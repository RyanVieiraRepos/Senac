function fnFormatarMonetario(valor){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}





function fnHorasExtras(Salario, horasTrabalhadas, cargaHoraria) {
    let horasExtras = 0
    if(salario > 0){
        return 'todos os valores devem ser positivos'
    }
    
    

    if(horasTrabalhadas > cargaHoraria){
        horasExtras = (horasTrabalhadas - cargaHoraria) * Salario
        console.log(horasTrabalhadas , cargaHoraria, Salario, horasExtras)
    }

    return horasExtras
}





btn = document.getElementById("bt-calcular")
btn.addEventListener('click', ()=>{

    let salario = document.getElementById('salario').value
    let horasTrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value)
    let cargaHoraria = parseFloat(document.getElementById('carga-horaria').value)

    let horasExtras = fnHorasExtras(salario, horasTrabalhadas, cargaHoraria)
    document.getElementById('resposta').innerHTML = fnFormatarMonetario(horasExtras)
})