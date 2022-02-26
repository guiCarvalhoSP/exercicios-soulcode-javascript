var mes = 0;

mes = parseInt(prompt("Digite um valor de 1 a 12 para saber quantos dias tem o mês. Janeiro = 1, Fevereiro = 2, Março = 3 [...]"));

switch (mes) {
    case 1:
        document.write("31 dias<br> Mês: Janeiro");
        break;
    case 2:
        document.write("28 dias (29 se for ano bissexto)<br> Mês: Fevereiro");
        break;
    case 3:
        document.write("31 dias<br> Mês: Março");
        break;
    case 4:
        document.write("30 dias<br> Mês: Abril");
        break;
    case 5:
        document.write("31 dias<br> Mês: Maio");
        break;
    case 6:
        document.write("30 dias<br> Mês: Junho");
        break;
    case 7:
        document.write("31 dias<br> Mês: Julho");
        break;
    case 8:
        document.write("31 dias<br> Mês: Agosto");
        break;
    case 9:
        document.write("30 dias<br> Mês: Setembro");
        break;
    case 10:
        document.write("31 dias<br> Mês: Outubro");
        break;
    case 11:
        document.write("30 dias<br> Mês: Novembro");
        break;
    case 12:
        document.write("31 dias<br> Mês: Dezembro");
        break;
    default: document.write("Mês invalido");
}