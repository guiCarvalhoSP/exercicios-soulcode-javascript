var numb = 0;

numb = parseInt(prompt("Digite um valor de 1 a 10"));

switch (numb) {
    case 1:
        document.write("Um");
        break;
    case 2:
        document.write("Dois");
        break;
    case 3:
        document.write("Três");
        break;
    case 4:
        document.write("Quatro");
        break;
    case 5:
        document.write("Cinco");
        break;
    case 6:
        document.write("Seis");
        break;
    case 7:
        document.write("Sete");
        break;
    case 8:
        document.write("Oito");
        break;
    case 9:
        document.write("Nove");
        break;
    case 10:
        document.write("Dez");
        break;
    default: document.write("Apenas valores de 1 a 10");
}