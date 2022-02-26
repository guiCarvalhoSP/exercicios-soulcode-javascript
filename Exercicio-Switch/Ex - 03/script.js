var itemPedido = 0, qtd = 0, precoTotal;

itemPedido = parseInt(prompt("Especificação | Código | Preço; Cachorro quente | 100 | 1.20; Bauru simples | 101 | 1.30; Bauru com ovo | 102 | 1.50; Hambúrger | 103 | 1.20; Cheeseburguer | 104 | 1.30; Refrigerante | 105 | 1.00; Digite o código o item desejado"))
qtd = parseInt(prompt("digita a quantidade"));

switch (itemPedido) {
    case 100:
        precoTotal = 1.20 * qtd;
        document.write("O valor deu: R$" + precoTotal);
        document.write("<br>Você pediu cachorro quente, qtd: " + qtd);
        break;
    case 101:
        precoTotal = 1.30 * qtd;
        document.write("O valor deu: R$" + precoTotal);
        document.write("<br>Você Bauru Simples, qtd: " + qtd);
        break;
    case 102:
        precoTotal = 1.50 * qtd;
        document.write("O valor deu: R$" + precoTotal);
        document.write("<br>Você pediu Bauru com ovo, qtd: " + qtd);
        break;
    case 103:
        precoTotal = 1.20 * qtd;
        document.write("O valor deu: R$" + precoTotal);
        document.write("<br>Você pediu Hambúrger, qtd: " + qtd);
        break;
    case 104:
        precoTotal = 1.30 * qtd;
        document.write("O valor deu: R$" + precoTotal);
        document.write("<br>Você pediu Cheeseburguer, qtd: " + qtd);
        break;
    case 105:
        precoTotal = 1.0 * qtd;
        document.write("O valor deu: R$" + precoTotal);
        document.write("<br>Você pediu Refrigerante, qtd: " + qtd);
        break;
}