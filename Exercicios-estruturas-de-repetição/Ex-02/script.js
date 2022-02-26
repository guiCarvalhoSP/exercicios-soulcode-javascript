// Eu normalmente usaria for, porém usei um while só para dizer que pelo menos um exercicio usei um while
var qtdPositivos = 0, qtdNegativos = 0, media = 0;
var qtdDeNumb = 0, count = 0;

qtdDeNumb = parseInt(prompt("Digite quantos numeros irá querer:"));

var numeros = new Array((qtdDeNumb - 1));

while(count <= (qtdDeNumb - 1)){
    
    numeros[count] = parseFloat(prompt("Digite qaulquer número real: "));
    media += numeros[count];

    if (numeros[count] > 0){
        qtdPositivos++;
    } else if(numeros[count] < 0){
        qtdNegativos++;
    }

    count++;
}

media /= qtdDeNumb;

document.write("Quantidade de números positivos: " + qtdPositivos);
document.write("<br>Quantidade de números negativos: " + qtdNegativos);
document.write("<br>Media dos números: " + media);