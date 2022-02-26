// Declaração de variaveis
var numb01 = 0, numb02 = 0, numb03 = 0, numb04 = 0;
var maiornum = 0, menornum = 0, segundnum = 0, tercnum = 0;

// definição do usuario dos números
numb01 = parseFloat(prompt("Digite o 1º número (utilize ponto ao invés de virgulas):"));

numb02 = parseFloat(prompt("Digite o 2º número (utilize ponto ao invés de virgulas):"));

numb03 = parseFloat(prompt("Digite o 3º número (utilize ponto ao invés de virgulas):"));

numb04 = parseFloat(prompt("Digite o 4º número (utilize ponto ao invés de virgulas):"));

// Logica para definir ordem dos maiores e menores números.
maiornum = numb01;

if(numb02 > maiornum){
    segundnum = maiornum;
    maiornum= numb02;
} else {
    segundnum = numb02;
}

if(numb03 > maiornum){
    tercnum = segundnum;
    segundnum = maiornum;
    maiornum = numb03;
} else if(numb03 > segundnum){
    tercnum = segundnum;
    segundnum = numb03;
} else{
    tercnum = numb03;
}

if(numb04 > maiornum){
    menornum = tercnum;
    tercnum = segundnum;
    segundnum = maiornum;
    maiornum = numb04;
} else if(numb04 > segundnum){
    menornum = tercnum
    tercnum = segundnum;
    segundnum = numb04;
} else if(numb04 > tercnum){
    menornum = tercnum;
    tercnum = numb04;
} else {
    menornum = numb04;
}

// Escrita dos resultados
document.write("Ordem crescente dos números: " + menornum + " " + tercnum + " " + segundnum + " " + maiornum  + "<br>");
document.write("Ordem decrescente dos números: " + maiornum + " " + segundnum + " " + tercnum + " " + menornum);
