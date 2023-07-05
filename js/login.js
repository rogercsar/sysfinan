let inputUser = document.querySelector('#txtUser');
let inputPass = document.querySelector('#txtPass');
let linkPag = document.querySelector('#linkPag');
let logUser = inputUser.value;
let logPass = inputPass.value;

function acesso(){
    if(logUser == localStorage.getItem('usuario') && logPass == localStorage.getItem('password')){
        alert('Login bem sucedido!');
        linkPag.setAttribute('href', './tela-app.html');
    }
    else {
        linkPag.setAttribute('href', './tela-app.html');
    }
}
