var idades = new Array(10);
var menoresIdade = 0, maioresIdade = 0;


for(i=1;i<=10; i++){
    idades[i] = parseFloat(prompt("Digite a idade da pessoa " + i))

    if(idades[i] >= 18){
        maioresIdade++;
    } else{
        menoresIdade++;
    }
}

document.write("Quantidade de maiores de idade: " + maioresIdade );
document.write("<br>Quantidade de menores de idade: " + menoresIdade);