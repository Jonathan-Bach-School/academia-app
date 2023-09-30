function salvarUsuario(){
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    localStorage.setItem(nome, '{"nome":"'+ nome +'", "email":"'+email+'", "senha":"'+senha+'"}')
    console.log(localStorage.getItem(nome))
    window.open('#modal-cadastro', '_self')
}

function salvarNaAgenda(){
    nome = document.getElementById("nome").value;
    data = document.getElementById("data").value;
    hora = document.getElementById("hora").value;
    treino = document.getElementById("treino").value;
    localStorage.setItem(nome+data, '{"nome":"'+ nome +'", "data":"'+data+'", "hora":"'+hora+'", "treino":"'+treino+'"}')
    console.log(localStorage.getItem(nome))
    window.open('#modal-cadastro', '_self')
}

function fechar(){
    window.open('#', '_self')
}