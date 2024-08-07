// Crie um formulário com um campo de nome de utilizador e palavra-passe. 
// Utilize JavaScript para validar que nenhum dos campos fica vazio quando o botão de submissão é premido. 
// Estilize o formulário com CSS para torná-lo visualmente atraente. Utilize o Flexbox para dispor os elementos do formulário. 
// Destaque os campos com bordas vermelhas se a validação falhar, usando JavaScript para adicionar dinamicamente o estilo.
function ValidarCampos() {

    //Obtem valor dos campos inputs
    const userNameValue = document.getElementById('username');
    const passwordValue = document.getElementById('password');

    if (userNameValue.value.trim() === '') {
        userNameValue.classList.add('border-red');
        
        return false;
    }else if(passwordValue.value.trim() === ''){
        passwordValue.classList.add('border-red');
    }

    else {
        alert(`Bem vindo ${userNameValue.value}`);
    }

}