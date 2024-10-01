// script.js

// Seleciona todas as divs com a classe 'categoria'
const temporadas = document.querySelectorAll('.temporadas');

// Itera sobre cada categoria
temporadas.forEach(temporadas => {
    // Adiciona um evento de clique a cada categoria
    temporadas.addEventListener('click', () => {
        // Obtém o link associado à categoria a partir do atributo 'data-link'
        const link = temporadas.getAttribute('data-link');
        // Redireciona o usuário para o link ao clicar na categoria
        window.location.href = link;
    });
});