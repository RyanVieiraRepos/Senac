var nome, nota1, nota2, nota3, nota4, media;

var resposta = true;

while (resposta == true) {
    nome = prompt("Informe o nome do aluno(a)", "Digite aqui");
    nota1 = prompt("Informe a nota do 1º bimestre", "Digite aqui");
    nota2 = prompt("Informe a nota do 2º bimestre", "Digite aqui");
    nota3 = prompt("Informe a nota do 3º bimestre", "Digite aqui");
    nota4 = prompt("Informe a nota do 4º bimestre", "Digite aqui");
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)
        + parseFloat(nota4)) / 4;
    alert("O(A) estudande " + nome + " obteve a media " + media);
    resposta = confirm("Calcular a media de outro aluno?");
}

