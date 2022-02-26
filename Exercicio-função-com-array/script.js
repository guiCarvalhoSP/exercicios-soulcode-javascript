var numeros = new Array(5);
var vetor = "vetor = ["
var vetorApos = "vetor = ["

var dobra = function(){
    for(i=0; i < numeros.length; i++){
        if(i < (numeros.length - 1)){
            vetorApos += numeros[i]*2 + ", "
        } else{
            vetorApos += numeros[i]*2 + "]"
        }
    }
    document.write("O resultado pós função é: <br>");
    return vetorApos;
}

for(i=0; i < numeros.length; i++){
    numeros[i] = parseInt(prompt("Digite um valor para o " + (i+1) + "º número:"));
    if(i < (numeros.length - 1)){
        vetor += numeros[i] + ", "
    } else{
        vetor += numeros[i] + "]"
    }
}

document.write(vetor + "<br>");
document.write(dobra());