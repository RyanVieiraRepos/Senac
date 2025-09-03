programa {
  funcao inicio() {
    inteiro a,b,c,d,media,soma
    cadeia nome

    escreva("insira o nome do aluno: ")
    leia(nome)

    escreva("nota do primeiro bimeste: ")
    leia(a)

    escreva("nota do segundo bimestre: ")
    leia(b)

    escreva("nota do terceiro bimestre: ")
    leia(c)

    escreva("nota do quarto bimestre: ")
    leia(d)

soma = a + b + c + d 
    media = soma/2
    

    se(media >= 5){
      escreva(nome, " foi aprovado!, média de ",media )
    }senao{
      escreva(nome, " foi reprovado!, média de ",media)
    }

  
  }
}
