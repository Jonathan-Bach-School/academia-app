function salvarUsuario(){
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    localStorage.setItem(nome, '{"nome":"'+ nome +'", "email":"'+email+'", "senha":"'+senha+'"}')
    alert("O Usuário "+ nome +" foi salvo com sucesso!");
    console.log(localStorage.getItem(nome))
}