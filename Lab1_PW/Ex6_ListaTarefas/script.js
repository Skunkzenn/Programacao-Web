// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function () {
    
    const taskInput = document.getElementById("taskInput"); // Obtém a referência do elemento de entrada de tarefa
    const todoList = document.getElementById("todoList");  // Obtém a referência da lista de tarefas

    /* EVENTO PRESS ENTER - OBTER DADOS DE INPUT */
    // Adiciona um evento de escuta para a tecla "Enter" pressionada no campo de entrada de tarefa
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") { // Verifica se a tecla pressionada é "Enter"
        const taskText = taskInput.value.trim(); // Obtém o texto da tarefa, remove espaços em branco do início e do fim
        // Verifica se o texto da tarefa não está vazio
        if (taskText !== "") { 
          addTask(taskText); // Adiciona a tarefa à lista    
          taskInput.value = ""; // Limpa o campo de entrada de tarefa
        }
      }
    });
    
    /* TRABALHA SOB O TEXTO DE INPUT */
    // Função para adicionar uma nova tarefa à lista
    function addTask(taskText) {

      /* ELEMENTO LISTA 'LI' */
      const listItem = document.createElement("li"); // Cria um novo item de lista para a tarefa
      listItem.classList.add("todo-item"); // Adiciona a classe 'todo-item' ao item de lista
  
      /* ELEMENTO CHECKBOX */
      const checkbox = document.createElement("input"); // Cria um novo elemento de checkbox
      checkbox.type = "checkbox"; // Define o tipo de entrada como "checkbox"

      // TRATAMENTO DE EVENTO CHECKBOX AO REALIZAR CLICK
      checkbox.addEventListener("change", function () {
        listItem.classList.toggle("completed"); // Alterna a classe 'completed' no item de lista quando a checkbox é marcada/desmarcada
      });
    
      /* ELEMENTO SPAN P/ ARMAZENAR TEXTO OBTIDO NO INPUT */
      const taskSpan = document.createElement("span"); // Cria um novo elemento de span para exibir o texto da tarefa
      taskSpan.textContent = taskText; // Define o texto da tarefa para o texto fornecido
      
      /* ELEMENTO BOTÃO DE EXCLUSÃO */
      const deleteButton = document.createElement("button"); // Cria um novo botão de exclusão para remover a tarefa
      deleteButton.textContent = "❌"; // Define o texto do botão de exclusão como um emoji '❌'
      deleteButton.classList.add("delete-btn"); // Adiciona a classe 'delete-btn' ao botão de exclusão
      // Adiciona um evento de escuta para remover o item de lista quando o botão de exclusão é clicado
      deleteButton.addEventListener("click", function () {
        listItem.remove();
      });
  
      // Adiciona os elementos de checkbox, span de tarefa e botão de exclusão ao item de lista
      listItem.appendChild(checkbox);
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteButton);
      
      // Adiciona o item de lista à lista de tarefas
      todoList.appendChild(listItem);
    }
});