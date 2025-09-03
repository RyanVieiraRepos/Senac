programa {
  funcao inicio() {
    inteiro a,b,c,d,soma
    
    escreva("primero valor :")
    leia(a)

    escreva("Segundo valor :")
    leia(b)

    escreva("Terceiro valor :")
    leia(c)

    escreva("Quarto valor :")
    leia(d)
    

    a = a * a 
    b = b * b
    c = c * c 
    d = d * d

    limpa()
    escreva("os mesmos ao quadrado\n")
    escreva("A = ",a," B = ",b," C = ",c," D = ",d,"\n")


    soma = a + b + c + d
    escreva("Agora somados: ",soma," !")


   
  }
}
