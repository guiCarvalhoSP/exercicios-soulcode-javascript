var numb1 = 0, numb2 = 0;

numb1 = parseFloat(prompt("Digite um número: "));
numb2 = parseFloat(prompt("Digite um segundo número: "));

document.write("Num 1: " + numb1 + " | Num2: " + numb2 + "<br>");

if(numb1 >= numb2){
    document.write("O resultado da divisão é: " + Math.floor((numb1/numb2)));
} else {
    document.write("O resultado da divisão é: " + Math.floor((numb2/numb1)));
}