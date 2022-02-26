var idade = 0;

idade = prompt("Digite sua idade");

document.write("Sua idade: " + idade);
if(idade < 16){
    document.write("<br>Não pode votar.");
} else if(idade <=17 || idade >=70){
    document.write("<br>Voto não obrigatório.");
} else {
    document.write("<br>Voto obrigatório.");
}