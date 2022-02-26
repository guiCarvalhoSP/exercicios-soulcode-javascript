var numb = 0;

numb = prompt("Digite um número");

document.write(numb + "<br>");

if(numb > 0){
    document.write("Número positivo");
}
 if(numb < 0){
    document.write("Número negativo");
} 
if(numb == 0){
    document.write("Número nulo");
}