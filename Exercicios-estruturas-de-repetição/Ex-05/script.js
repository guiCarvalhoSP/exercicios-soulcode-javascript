var soma = 0;

for(i=1; i<=500; i++){
    
    if(i %2 == 1 && i %3 == 0){
        soma += i;
    }
}

document.write("A soma total é de: " + soma);