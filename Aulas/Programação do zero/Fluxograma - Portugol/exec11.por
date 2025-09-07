programa {
  funcao inicio() {
     
     inteiro a

     escreva("Insira a nota do aluno: ")
     leia(a)


     se(a > 10){
      escreva("Insira uma nota válida! (0 a 10)\n")
      inicio()

     }senao se(a < 0){
      escreva("Insira uma nota válida! (0 a 10)\n")
      inicio()

     }senao{
      inicio()
     }

    
    }

 
  }

