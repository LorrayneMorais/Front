document.getElementById('notaForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    let nota = parseFloat(document.getElementById('nota').value);
    let resultado = document.getElementById('resultado');

    if (nota >= 7) {
        resultado.textContent = 'Parabéns! Você foi aprovado.';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Você foi reprovado. Se lascou!';
        resultado.style.color = 'red';
    }
});
