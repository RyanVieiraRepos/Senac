var continuar = "S"
var animalExibir;
var animais = new Array(4);

animais[0] = "Cuidado, a picada de uma radioativa pode te transformar em super-herói";
animais[1] = "Escorpião é o oitavo signo astrológico do zodíaco";
animais[2] = "Cobra é uma denominação genérica, utilizada frequentemente na lingua portuguesa como sinônimo para serpente";
animais[3] = "Na linguagem vulgar, chama-se lagarta ao primeiro estágio larval dos insetos da ordem dos Lepidoptera.";

while (continuar == "S") {
    console.clear();

    animalExibir = prompt("escolha uma opção: \[0] Aranha \[1] Escorpião \n[2] Cobra\[3] Lagarta", "");


    switch (animalExibir) {
        case "0":alert(animais[0]);
        break;

        case "1":alert(animais[1]); 
        break;

        case "2":alert(animais[2]);
        break;

        case "3":alert(animais[3]);
        break;
        
        default:
            console.log("Opção invalida");
        }

     continuar = prompt("Deseja ver outro animal ? [S]im / [N]ao", "").toUpperCase();


}

  alert("Obrigado!");
   
   
      
 








2




