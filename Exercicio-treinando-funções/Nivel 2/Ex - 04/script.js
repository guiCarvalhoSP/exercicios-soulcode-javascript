//Não recomendo testar esse programa passando como número algo maior que 496 (terceiro número perfeito), pois havera um grande consumo de memoria RAM
var number = 0;

number = parseInt(prompt("Digite um número: "));

var perfeito = function (numb) {
    var total = 0;
    for (i = 1; i < numb; i++) {
        if (numb % i == 0) {
            total += i;
        }
        if (total == numb && i == (numb - 1)) {
            document.write("É um número perfeito.<br>")
        } else if (i == (numb - 1)) {
            document.write("Não é um número perfeito<br>")
        }
    }
}

var listaPerfeitos = function (numb2) {
    var total = 0;
    document.write("Lista de números perfeitos até o nEsimo número digitado: ");
    for (i = 2; i <= numb2; i++) {

        for (j = 1; j < i; j++) {
            if (i % j == 0) {
                total += j;
            }
            if (total == i && j == (i - 1)) {
                document.write(i + ", ");
            } 
        }
        total = 0;
    }
}

perfeito(number);
listaPerfeitos(number)