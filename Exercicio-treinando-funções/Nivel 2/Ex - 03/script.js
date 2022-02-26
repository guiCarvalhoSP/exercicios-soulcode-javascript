var n = 0;

var primos = function (numb) {
    var qtdDivisores = 0;
    for (var i = 1; i <= numb; i++) {
        if (numb % i == 0) {
            ++qtdDivisores;
        }
        if (qtdDivisores > 2) { //Qualquer número que tenha mais de 2 divisores não é primo
            document.write("Não é número primo");
            break;
        } else if (i == numb && qtdDivisores <= 2) {
            document.write("É primo");
        }
    }

    intervalosPrimos(numb);
}

var intervalosPrimos = function(numb02){
    document.write("<br>Lista de primos: ");
    var primos = 0;

    for(i = 1; i<=numb02;i++){
        primos = 0;

        for(j=1; j<=i; j++){
            if(i %j == 0){
                primos++;
                if(primos > 2){
                    break;
                }
            }
        }
        if(primos ==2){
            document.write(i + " ")
        }
    }
}

n = parseInt(prompt("Digite um número e verifique os primos dentro do intervalo de tempo: "));

primos(n);