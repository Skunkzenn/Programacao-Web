function openTab(tabName) {
    let i, tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");

    // Percorre todos os elementos com a classe tabcontent e define o estilo CSS display de cada um para "none"
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Define o estilo CSS display do elemento com o ID especificado em tabName para "block". 
    document.getElementById(tabName).style.display = "block";
  }
  