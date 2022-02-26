var numb1 = 0, numb2 = 0;

numb1 = parseFloat(prompt("Digite um número: "));
numb2 = parseFloat(prompt("Digite um segundo número: "));

document.write("Primeiro número: " + numb1 + " . Sua raíz quadrada (arredondada): " + Math.round(Math.sqrt(numb1)) + "<br>");

document.write("Segundo número: " + numb2 + " . Sua raíz quadrada (arredondada): " + Math.round(Math.sqrt(numb2)) + "<br>");