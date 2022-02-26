var numero = 0;
numero = parseInt(prompt("Digite um número inteiro para calcular seu fatorial:"));
conta = numero;
if(numero != 0){
    for(i=1; i<numero; i++){
    conta *= i;
    }
} else{
    conta = 1;
}


document.write("O fatorial de " + numero + " = " + conta);