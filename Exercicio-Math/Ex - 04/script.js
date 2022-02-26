var numb = 0;

numb = parseFloat(prompt("Digite um número: "));
_random = Math.round(Math.random()*1000);
document.write("Número escolhido: " + numb + " | Número random: " + _random);
document.write("<br>Subtração randomica absoluta: " + Math.abs(numb - _random));