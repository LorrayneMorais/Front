document.getElementById('parImparForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é Par.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `O número ${numero} é Ímpar.`;
        resultado.style.color = 'blue';
    }
});
