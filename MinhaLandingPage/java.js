// script.js

// Seleciona todas as divs com a classe 'categoria'
const categorias = document.querySelectorAll('.categoria');

// Itera sobre cada categoria
categorias.forEach(categoria => {
    // Adiciona um evento de clique a cada categoria
    categoria.addEventListener('click', () => {
        // Obtém o link associado à categoria a partir do atributo 'data-link'
        const link = categoria.getAttribute('data-link');
        // Redireciona o usuário para o link ao clicar na categoria
        window.location.href = link;
    });
});
