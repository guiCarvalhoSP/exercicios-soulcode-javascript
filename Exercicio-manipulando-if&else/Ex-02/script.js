var massa = 0, altura = 0, imc = 0;

massa = prompt("Digite seu peso");
altura = prompt("Digite sua altura (não use virgula, utilize ponto):");

imc = massa / Math.pow(altura, 2);

document.write("Seu IMC é de: " + imc + "<br>");

if (imc < 18.5){
    document.write("Você está abaixo do peso.")
} else if(imc < 25){
    document.write("Você está no peso normal.");
} else if(imc < 30 && imc > 25) {
    document.write("Você está acima do peso");
} else{
    document.write("Você está obeso");
}