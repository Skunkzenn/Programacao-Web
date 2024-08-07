const ITEMS_PER_PAGE = 5; // Itens por página
let currentPage = 1;

function fetchData(page) {
  // Substitua esta URL pelo endpoint da sua API real
  const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${ITEMS_PER_PAGE}`;

  // Realiza a chamada fetch para obter os dados da API
  fetch(apiUrl)
    .then((response) => {
      // Verifica se a resposta da API está OK
      if (!response.ok) {
        throw new Error("Erro ao obter os dados da API");
      }
      // Retorna os dados da resposta da API como JSON
      return response.json();
    })
    .then((data) => {
      // Chama a função displayData para exibir os dados recebidos
      displayData(data);
    })
    .catch((error) => {
      // Em caso de erro, exibe uma mensagem de erro
      console.error("Erro ao buscar os dados:", error);
    });
}

function displayData(data) {
    // Obtém o contêiner onde os dados serão exibidos
    const container = document.getElementById("data-container");
    // Limpa o conteúdo anterior do contêiner
    container.innerHTML = "";
    // Para cada item de dados, cria um elemento div e adiciona ao contêiner
    data.forEach((item) => {
      const div = document.createElement("div");
      // Exibe o ID e o título do item dentro do elemento div
      div.textContent = `ID: ${item.id}, Title: ${item.title}`;
      container.appendChild(div);
    });
  }
  
  function updatePaginationButtons() {
    // Obtém o contêiner da paginação
    const paginationContainer = document.getElementById("pagination-container");
    // Limpa o conteúdo anterior do contêiner de paginação
    paginationContainer.innerHTML = "";
  
    // Cria botão "Prev" e adiciona evento para atualizar para a página anterior
    const prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.className = "pagination-button";
    prevButton.addEventListener("click", () => {
      // Verifica se há uma página anterior antes de atualizar
      if (currentPage > 1) {
        currentPage--;
        // Busca e exibe os dados da página anterior
        fetchData(currentPage);
        // Atualiza os botões de paginação
        updatePaginationButtons();
      }
    });
    paginationContainer.appendChild(prevButton);
  
    // Cria botão "Next" e adiciona evento para atualizar para a próxima página
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.className = "pagination-button";
    nextButton.addEventListener("click", () => {
      // Atualiza para a próxima página
      currentPage++;
      // Busca e exibe os dados da próxima página
      fetchData(currentPage);
      // Atualiza os botões de paginação
      updatePaginationButtons();
    });
    paginationContainer.appendChild(nextButton);
  }
  
  // Busca e exibe os dados da página inicial
  fetchData(currentPage);
  // Atualiza os botões de paginação
  updatePaginationButtons();
  
