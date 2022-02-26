function valor(){
    preco = (parseFloat(prompt("Digite o preço do produto para calcular o desconto de 5%:")));
    return preco * 0.05;
}

document.write("Total de desconto: R$ " + valor());