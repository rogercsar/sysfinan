let inputUser = document.querySelector('#txtUser');
let inputPass = document.querySelector('#txtPass');
let linkPag = document.querySelector('#linkPag');
let logUser = inputUser.value;
let logPass = inputPass.value;

function acesso(){
      
    if(logUser == ""){
        alert("Informe um usuário válido!");
    } else {
        localStorage.setItem('usuario', logUser); 
        localStorage.setItem('password', logPass);
    
        alert('Login bem sucedido!');
        linkPag.setAttribute('href', './tela-app.html');
    }
    
}
