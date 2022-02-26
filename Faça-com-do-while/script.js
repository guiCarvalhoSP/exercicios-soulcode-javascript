var idade;
confirma = false;
do{
    idade = parseInt(prompt("Digite sua idade: "));
    if(idade > 0){
        confirma = true
    } else{
        alert("valor invalido, tente novamente!");
        confirma = false
    }

} while(confirma == false);

document.write("Idade: " + idade);