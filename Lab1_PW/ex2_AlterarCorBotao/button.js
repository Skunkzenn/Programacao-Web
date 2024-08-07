function alterColorButton(botao){
    // Define um evento de clique para o botão
    botao.addEventListener('click', function(){
        let corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
        botao.style.background = corAleatoria;
        //altera o texto
        botao.textContent = 'Cor alterada';
        // alert('Cor alterada!!');
    })
}

// Seleciona o botão com a classe 'botao1'
let botao = document.querySelector('.botao1')
//Chamar a função para aceder a troca de cores
alterColorButton(botao);