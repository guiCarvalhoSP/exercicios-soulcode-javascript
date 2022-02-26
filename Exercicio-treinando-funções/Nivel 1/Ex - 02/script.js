function valor(num1, num2){
    return num1 * num2;
}

var conta = valor(parseFloat(prompt("Digite um número real: ")), parseFloat(prompt("Digite o segundo número real: "))) / 2;

document.write("Resultado: " + conta);