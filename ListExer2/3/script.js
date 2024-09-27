document.getElementById('idadeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    let idade = parseInt(document.getElementById('idade').value);
    let resultado = document.getElementById('resultado');

    if (idade >= 18) {
        resultado.textContent = 'Você pode acessar o conteúdo!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Você não pode acessar o conteúdo.';
        resultado.style.color = 'red';
    }
});
