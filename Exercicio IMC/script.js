var massa = 90, altura = 1.90, imc = 0;

imc = massa / Math.pow(altura, 2);

document.write("Seu IMC é de: " + imc + "<br>");

if (imc < 18.5){
    document.write("Você está abaixo do peso.")
} else if(imc < 25){
    document.write("Você está no peso normal.");
} else {
    document.write("Você está acima do peso")
}