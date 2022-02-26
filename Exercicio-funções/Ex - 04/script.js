function idade(ano){
    var verificacao;
    if(2021 - ano >= 18){
        verificacao = "Maior de idade.";
    } else{
        verificacao = "Menor de idade."
    }

    return verificacao;
}

document.write(idade(parseInt(prompt("Digite o seu ano de nascimento:"))));