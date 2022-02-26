var numb1 = 0, numb2 = 0, numb3 = 0;

var verificaMaior = (num1, num2, num3) => document.write("Maior número é: " + Math.max(num1, num2, num3));
var verificaMenor = (num1, num2, num3) => document.write("Maior número é: " + Math.min(num1, num2, num3));


numb1 = parseFloat(prompt("Digite o primeiro número: "));
numb2 = parseFloat(prompt("Digite o segundo número: "));
numb3 = parseFloat(prompt("Digite o terceiro número: "));

verificaMaior(numb1, numb2, numb3);
verificaMenor(numb1, numb2, numb3);