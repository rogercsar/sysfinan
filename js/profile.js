let user = localStorage.getItem('usuario');

let displayUser = document.getElementById('displayUser');

function carregaTela(){
    let user = localStorage.getItem('usuario');
    let displayUser = document.getElementById('displayUser');
    displayUser.textContent = "Olá, " + user;
}