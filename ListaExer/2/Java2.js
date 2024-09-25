let numeroCurtidas = 0;

function curtir() {
    numeroCurtidas++;
    document.getElementById('curtidas').innerText = numeroCurtidas;
}

function descurtir() {
    if (numeroCurtidas > 0) {
        numeroCurtidas--;
        document.getElementById('curtidas').innerText = numeroCurtidas;
    }
}
