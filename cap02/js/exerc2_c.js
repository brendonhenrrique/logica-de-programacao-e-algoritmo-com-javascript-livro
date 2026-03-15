const frm = document.querySelector('form');
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');

frm.addEventListener('submit', e => {
    e.preventDefault();

    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const desconto = preco * 0.50;
    const promocao = (preco * 2) + desconto;

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$: ${desconto.toFixed(2)}`;
})