var sexo = function(){
    var escolha = prompt("Você é do sexo Masculino ou Feminino | Masculino = M ; Feminino = F");
    var resposta;
    if(escolha == "m" || escolha == "M") {
        resposta = "É masculino!"
    } else if(escolha == "f" || escolha == "F"){
        resposta = "É feminino!"
    } else {
        resposta = "Prefiro não informar."
    }
    return resposta;
}

document.write(sexo());