var numeros = function(numb1, numb2){
    var resultado;
    if(numb1 > numb2){
        resultado = "Primeiro número é maior";
    } else if(numb1 < numb2){
        resultado = "Segundo número é maior";
    } else {
        resultado = "Ambos são iguais";
    }
    return resultado;
}

document.write( numeros(parseFloat(prompt("Digite o primeiro valor")), parseFloat(prompt("Digite o segundo valor"))) );