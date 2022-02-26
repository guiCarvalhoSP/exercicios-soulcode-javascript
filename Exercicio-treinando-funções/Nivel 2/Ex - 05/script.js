var number = 0;

number = parseFloat(prompt("Digite um valor qualquer: "));

var verificar = function(numb){
    var caracter;
    if(numb > 0){
        caracter = "P";
    } else {
        caracter = "N";
    }
    return caracter;
}

document.write(verificar(number));