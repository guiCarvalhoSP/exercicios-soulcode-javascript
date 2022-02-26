var numb = 0;

numb = prompt("Digite um número");

document.write(numb + "<br>");

if((numb %=2) == 0){
    document.write("Número par");
} 
if((numb %=2) == 1){
    document.write("Número ímpar");
}
