programa {
  funcao inicio() {
   inteiro n1,n2,media,soma

   escreva("insira a primeira nota: ")
   leia(n1)

   escreva("insira a segunda nota: ")
   leia(n2)

   soma = n1 + n2
   media = soma/2


   se(media >= 10){
   escreva("Aprovado com dinstinção!")
   }senao se(media >= 6 ){
   escreva("Aprovado!")
   }senao se(media < 6){
    escreva("Reprovado!")
   }

  }
}
