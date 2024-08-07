// chama o id do modal pai
let modal = document.getElementById('modal');

let modalContent = document.querySelector('.modal-content');

// Botao para abrir o modal
let btnOpen = document.getElementById("openModalBtn");

// Botao para fechar o modal
let btnClose = document.querySelector(".close")

// Se clicar no botao 'open' abre o modal
btnOpen.onclick = function() {
  modal.style.display = "block";
  alterColorButton(btnOpen);
  alterColorModal(modalContent);
}

// Se clicar no botao 'close' fecha o modal
btnClose.onclick = function() {
  modal.style.display = "none";
}

//Ao utilizar o windows.onClick defini-se uma função em que cada evento vai carregar a estrutura da função
//Se o utilizador clicar fora do botao de abrir e clicar fora do conteúdo modal, a janela do modal fechará
window.onclick = function(event) {
    if (event.target !== btnOpen && !modal.contains(event.target)) {
        modal.style.display = "none";
    }
}

function alterColorButton(botao){
  // Define um evento de clique para o botão
  botao.addEventListener('click', function(){
      let corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
      botao.style.background = corAleatoria;
  })
}

function alterColorModal(modal){
    let corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
    modal.style.background = corAleatoria;
}

// //Define um evento de saída de hover para o botão
// btnOpen.addEventListener('mouseout', function(){
//   let corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
//   botao.style.backgroundColor = corAleatoria; // Volta à cor original quando o mouse sai do botão
// });