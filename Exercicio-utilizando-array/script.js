var numeros = new Array(101);

for(i=0; i < numeros.length; i++){
    numeros[i] = Math.pow(i, 2);
    document.write("Posição " + i + " = " + numeros[i] + "<br>");
}