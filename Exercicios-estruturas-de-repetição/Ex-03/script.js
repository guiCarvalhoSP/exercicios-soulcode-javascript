var numeros = new Array(10);
var entre0e25 = 0, entre26e50 = 0, entre51e75 = 0, entre76e100 = 0;


for(i=1;i<=10; i++){
    numeros[i] = parseFloat(prompt("Digite um número inteiro entre 0 e 100."))

    if(numeros[i] >= 0 && numeros[i] <= 25){
        entre0e25++;

    } else if(numeros[i] >= 26 && numeros[i] <= 50){
        entre26e50++
        
    } else if(numeros[i] >= 51 && numeros[i] <= 75){
        entre51e75++;

    } else{
        entre76e100++

    }

}

document.write("Quantidade de números entre 0 & 25: " + entre0e25 );
document.write("<br>Quantidade de números entre 26 & 50: " + entre26e50);
document.write("<br>Quantidade de números entre 51 & 75: " + entre51e75 );
document.write("<br>Quantidade de números entre 76 & 100: " + entre76e100 );