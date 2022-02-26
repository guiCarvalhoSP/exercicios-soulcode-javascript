var alturas = new Array(15);
var maiorAlt = 0, menorAlt = 1000;
var pessoaAlt = 0, pessoaBaix = 0;

for(i=0;i<=14; i++){
    alturas[i] = parseFloat(prompt("Digite a altura da pessoa " + (i+1) + " em m ou cm"))

    if(alturas[i] > maiorAlt){
        maiorAlt = alturas[i];
        pessoaAlt = i + 1;
    } else if(alturas[i] < menorAlt){
        menorAlt = alturas[i];
        pessoaBaix = i + 1;
    }
}

document.write("A " + pessoaAlt + "º é mais a alta, com " + maiorAlt + " m / cm" );
document.write("<br>A " + pessoaBaix + "º é mais a baixa, com " + menorAlt + " m / cm" );