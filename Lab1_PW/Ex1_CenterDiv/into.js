//aciona quando to conteudo da pagina for carregado
document.addEventListener("DOMContentLoaded", function() {
    //Cria-se um novo elemento HTML do tipo <div>
    const string = document.createElement('div');
    string.classList.add('message');
    //Conteúdo contido dentro da div expressao
    string.textContent = 'Hello, World!';
    //adicionar o elemento representado pela expressão, como um filho do elemento <body> do documento HTML.
    document.body.appendChild(string);
});