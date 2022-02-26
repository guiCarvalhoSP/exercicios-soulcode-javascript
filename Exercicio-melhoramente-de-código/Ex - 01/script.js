var divisao = function(){
    var valido = false;
    var numb1 = 0, numb2 = 0;
    if(numb1 < numb2){
        var aux = 0;
        aux = numb2;
        numb2 = numb1;
        numb1 = aux;
    }

    while (!valido){
        numb1 = parseInt(prompt("Digite um primeiro número: "));
        if(numb1 == 0 || isNaN(numb1)){
            alert("Valor invalido, tente novamente.");
        } else{
            valido = true;
        }
    }
    while (!valido){
        numb2 = parseInt(prompt("Digite um segundo número: "));
        if(numb1 == 0 || isNaN(numb1)){
            alert("Valor invalido, tente novamente.");
        } else{
            valido = true;
        }
    }
}

document.write("A divisão deu:  " + divisao());