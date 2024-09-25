function mudarTexto() {
    let botao = document.getElementById('botaoTexto');
    if (botao.innerText === "Clique aqui") {
        botao.innerText = "Obrigado por clicar!";
    } else {
        botao.innerText = "Clique aqui";
    }
}
