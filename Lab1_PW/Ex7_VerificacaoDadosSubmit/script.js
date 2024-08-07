let button = document.getElementById('submit-btn');

button.addEventListener('click', function (event) {
  let nameInput = document.getElementById('Nome');
  let emailInput = document.getElementById('Email');
  let nameValue = nameInput.value;
  let emailValue = emailInput.value;

  // Função para verificar se um e-mail tem um formato válido
  function isValidEmail(email) {
    // Expressão regular para verificar o formato do e-mail
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (nameValue === '' || emailValue === '' || !isValidEmail(emailValue)) {
    event.preventDefault();
    if(nameValue === ''){
      alert('Por favor, preencha todos os campos corretamente.');
      nameInput.classList.add('error');
    } 
    if(emailValue === '' || !isValidEmail(emailValue)){
      alert('Formato de e-mail inválido! ')
      emailInput.classList.add('error');
    }
    
  }
  else {
    alert('Dados enviados com sucesso!');
    console.log(nameValue, emailValue);
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    nameInput.value = '';
    emailInput.value = '';
  }
});

