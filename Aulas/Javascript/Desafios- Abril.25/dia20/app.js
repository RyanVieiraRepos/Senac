//estrutura de decisão - if(else if, else), switch(case,break)...

//laços de repetição for -

for(contador = 1; contador <=10; contador++){   //declarado uma um laço em que uma variável é igual a 1, caso for menor ou igual a 10, será somado um a variável criada, e o valor será emitido no console
 console.log(contador)
}


//criar uma array com o nome dos alunos de um curso e exibir o nome de cada um dos alunos no console.

let alunos = ["Maria", "Rose", "Claudio","Renata", "Fernando" ];
//o valor de uma variável será utilizada para selecionar cada índice dessa array,

let contador = 0

while(contador <= 4){ //o incremento para no valor total de índices da array
        console.log(alunos[contador]);
        contador++
}

// utiliziando o laço for 

for(contador = 0; contador < 4; contador++){   // sintaxe diferente
  console.log(alunos[contador] + "utilizando laço for")
}