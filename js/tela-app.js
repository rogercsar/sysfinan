let user = localStorage.getItem('usuario');

let displayUser = document.querySelector('#displayUser');

function carregaTela(){
    displayUser.value = user;
}