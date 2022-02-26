var conta = function(num1, num2, num3){
    var soma = num1 + num2 + num3;
    document.write("Valor da soma: " + soma);
    media(soma);
}

var media = function(total){
    document.write("A media dos itens é: " + (total/3));
}
conta(2,4,6);