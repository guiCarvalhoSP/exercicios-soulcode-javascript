var valor_produto = 12;
var valor_pagar = 0;
var forma_de_pagamento = 1;

if(forma_de_pagamento == 1){
    valor_pagar = valor_produto - valor_produto * 0.1;
    document.write("Valor do produto: " + valor_produto);
    document.write("<br>Valor total a pagar: " + valor_pagar);
    document.write("<br>Forma de pagamento: Cartão ou cheque à vista. (10% de desconto)");
}

if(forma_de_pagamento == 2){
    valor_pagar = valor_produto - valor_produto * 0.15;
    document.write("Valor do produto: " + valor_produto);
    document.write("<br>Valor total a pagar: " + valor_pagar);
    document.write("<br>Forma de pagamento: Dinheiro à vista. (15% de desconto)");
}

if(forma_de_pagamento == 3){
    valor_pagar = valor_produto;
    document.write("Valor do produto: " + valor_produto);
    document.write("<br>Valor total a pagar: " + valor_pagar);
    document.write("<br>Forma de pagamento: 2x sem juros");
}

if(forma_de_pagamento == 4){
    valor_pagar = valor_produto + valor_produto * 0.1;
    document.write("Valor do produto: " + valor_produto);
    document.write("<br>Valor a pagar: " + valor_pagar);
    document.write("<br>Forma de pagamento: 3x com juros (10% de juros)");
}