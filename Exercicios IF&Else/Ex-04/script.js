var numb1 = 0, numb2 = 0;

numb1 = parseFloat(prompt("Digite o primeiro número"));
numb2 = parseFloat(prompt("Digite o segundo número"));

document.write("1º Número: " + numb1 + " | 2º Número: " + numb2 + "<br>");

if(numb1 > numb2){
    document.write("1º número é maior");
} else if(numb2 > numb1){
    document.write("2º número é maior");
} else{
    document.write("Ambos são iguais");
}