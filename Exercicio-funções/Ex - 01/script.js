function number(verificacao){
    if(verificacao %2 == 0){
        document.write("Par");
    } else {
        document.write("Impar");
    }
}

number(parseInt(prompt("Digite um número inteiro para verificar se é impar ou par")));