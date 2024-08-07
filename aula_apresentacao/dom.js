const botao = document.getElementById('btn-exibir');
const visualizar = document.getElementById('exibicao');
let palavras = ['pera', 'uva', 'maça', 'salada'];

let posicaoAtual = 0;

botao.addEventListener('click', function() {
  visualizar.textContent = palavras[posicaoAtual];
  visualizar.style.display = 'block';
  posicaoAtual = (posicaoAtual + 1) % palavras.length;
});
