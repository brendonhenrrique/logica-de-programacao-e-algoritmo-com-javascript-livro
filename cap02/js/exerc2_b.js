const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', e => {
    e.preventDefault();

    const valorUso = Number(frm.inUso.value);
    const tempoCliente = Number(frm.inCliente.value);

    const valorMin = Math.ceil(tempoCliente / 15) * valorUso;

    resp.innerText= `Valor a Pagar R$: ${valorMin.toFixed(2)}`;

    // frm.reset()
})

frm.addEventListener('reset', () => {
    resp.innerText = "";
    frm.inUso.focus();
})