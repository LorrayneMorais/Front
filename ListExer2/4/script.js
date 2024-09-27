function hasJavaScript(habilidades) {
    return habilidades.includes("JavaScript");
}

// Exemplo de uso
let habilidades = ["HTML", "CSS", "JavaScript", "React"];
console.log(hasJavaScript(habilidades)); // Retorna true

let outrasHabilidades = ["Python", "Java", "C#"];
console.log(hasJavaScript(outrasHabilidades)); // Retorna false
