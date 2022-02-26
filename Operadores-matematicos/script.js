var num = 18;
var num2 = 0;
var num3 = 0;
var num4 = 0;

num += 0;
document.write("Resultado 1: " + num);

num2 = num;
num2 *= 45;
document.write("<br>Resultado 2: " + num2);

num3 += 0;
num3 *= 18;
num3 /= num;
document.write("<br>Resultado 3: " + num3);

num4 = 5000;
num4 /= 3;
num4 *= 30;
document.write("<br>Resultado 4: " + num4);

document.write("<br>Resultado 1: " + num + ". Resultado 2: " + num2 + ". Resultado 3: " + num3 + ". Resultado 4: " + num4);
