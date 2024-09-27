function adicionarItem() {
    const itemInput = document.getElementById("itemInput");
    const item = itemInput.value.trim();

    if (item !== "") {
        const listaDeCompras = document.getElementById("listaDeCompras");

        // Criar um novo item de lista
        const novoItem = document.createElement("li");
        novoItem.textContent = item;

        // Criar botão de remover
        const botaoRemover = document.createElement("span");
        botaoRemover.textContent = "X";
        botaoRemover.onclick = () => listaDeCompras.removeChild(novoItem);

        novoItem.appendChild(botaoRemover);

        // Adicionar o novo item à lista
        listaDeCompras.appendChild(novoItem);

        // Limpar o campo de entrada
        itemInput.value = "";
    }
}
