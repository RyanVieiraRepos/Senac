Document.getElementById('bt-calcular').addEventListener('click', function(){

    let salario = Document.getelementById('salario').value
    let horastrabalhadas = parseFloat(Document.getElementById('horas-trabalhadas').value)
    let cargahoraria = Document.getElementByid('cargahoraria').value
    let horasextras = fnHorasExtras(salario, horasTrabalhadas, cargahoraria)
    Document.getElementById('resposta').innerHTML = fnFormatarMonetario(horasExtras)
})