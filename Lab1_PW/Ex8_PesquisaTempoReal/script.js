const entradaPesquisa = document.getElementById('searchInput');
const itensLista = document.getElementById('itemList');
const itens = itensLista.querySelectorAll('.item');

/*  Adiciona um evento de input ao campo de pesquisa. */
entradaPesquisa.addEventListener('input', function () {
  const searchTerm = entradaPesquisa.value.trim().toLowerCase();  // Converte o valor do campo de pesquisa para minúsculas.

  // Itera sobre os itens da lista.
  itens.forEach(function (item) {
    const text = item.textContent.toLowerCase(); // Converte o texto do item para minúsculas.
    const textMath = text.includes(searchTerm);  // Verifica se o texto do item contém o termo de pesquisa.
    
    if (textMath) {
      item.style.animation = 'fadeIn 0.3s ease-in-out';  // Adiciona a animação de fade-in ao item.
      item.classList.remove('hidden');  // Exibe o item.
    }
    else {
      item.style.animation = 'fadeOut 0.3s ease-in-out';  // Adiciona a animação de fade-out ao item.
      item.classList.add('hidden');  // Oculta o item.
    }
});});
