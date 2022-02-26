var salario = 0, aumento = 0;

salario = parseFloat(prompt("Salario do funcionario:"));
aumento = prompt("Plano de trabalho (A, B ou C):");

switch (aumento) {
    case "A":
        salario += salario * 0.1;
        document.write("Novo salario: R$" + salario);
        break;
    case "a":
        salario += salario * 0.1;
        document.write("Novo salario: R$" + salario);
        break;
    case "B":
        salario += salario * 0.15;
        document.write("Novo salario: R$" + salario);
        break;
    case "b":
        salario += salario * 0.15;
        document.write("Novo salario: R$" + salario);
        break;
    case "C":
        salario += salario * 0.2;
        document.write("Novo salario: R$" + salario);
        break;
    case "c":
        salario += salario * 0.2;
        document.write("Novo salario: R$" + salario);
        break;
    default: document.write("Apenas caracteres A, B ou C.");
}