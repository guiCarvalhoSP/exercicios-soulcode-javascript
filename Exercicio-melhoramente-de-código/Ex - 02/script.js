function idade(){
    var verificacao, ano = 0;
    valido = false;
    while(!valido){
        ano = parseInt(prompt("Digite o seu ano de nascimento"));
        if (ano > 2021 || ano < 1891){
            alert("Idade invalida, tente novamente");
        } else{
            valido = true;
        }
    }
    if(2021 - ano >= 18){
        verificacao = "Maior de idade.";
    } else{
        verificacao = "Menor de idade."
    }

    return verificacao;
}

document.write(idade());