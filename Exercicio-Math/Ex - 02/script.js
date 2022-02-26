var numb1 = 0, numb2 = 0, numb3 = 0, soma = 0;

var potencia = function(numb, expoente){
    resultado = Math.pow(numb, expoente);
    soma += resultado;
    return resultado;
} 

numb1 = parseFloat(prompt("Digite um número: "));
numb2 = parseFloat(prompt("Digite um segundo número: "));
numb3 = parseFloat(prompt("Digite um terceiro número: "));

document.write("1º número: " + numb1 + "^2 = " + potencia(numb1, 2) + " | " + numb1 + "^3 = " + potencia(numb1, 3) + " | " + numb1 + "^ 4 = " + potencia(numb1, 4) + " | ");

document.write("<br>2º número: " + numb2 + "^2 = " + potencia(numb2, 2) + " | " + numb2 + "^3 = " + potencia(numb2, 3) + " | " + numb2 + "^ 4 = " + potencia(numb2, 4) + " | ");

document.write("<br>3º número: " + numb3 + "^2 = " + potencia(numb3, 2) + " | " + numb3 + "^3 = " + potencia(numb3, 3) + " | " + numb3 + "^ 4 = " + potencia(numb3, 4) + " | ");

document.write("<br>Soma de todos os valores: " + soma);