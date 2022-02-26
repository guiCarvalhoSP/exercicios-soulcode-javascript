var multiplo = function(numb){
    if(numb %5 == 0){
        document.write("É multiplo de 5.")
    } else {
        document.write("Não é multiplo de 5.")
    }
}

multiplo(parseInt(prompt("Digite um valor inteiro e verifique se é multiplo de 5")));