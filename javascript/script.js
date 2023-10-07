function salvarUsuario(){
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    localStorage.setItem(nome, '{"nome":"'+ nome +'", "email":"'+email+'", "senha":"'+senha+'"}')
    console.log(localStorage.getItem(nome))
    window.open('#modal-cadastro', '_self')
}

function salvarNaAgenda(){
    dataId = new Date();
    nome = document.getElementById("nome").value;
    data = document.getElementById("data").value;
    hora = document.getElementById("hora").value;
    treino = document.getElementById("treino").value;
    agenda = localStorage.getItem('agenda');
    if (!agenda){
        agenda = '[]';
    }
    const obj = JSON.parse(agenda);
    obj.push({
        dataId,
        nome,
        data,
        hora,
        treino
    })
    localStorage.setItem('agenda', JSON.stringify(obj));
    window.open('#modal-cadastro', '_self')
}

function fechar(){
    window.open('#', '_self')
}

function getDadosAgenda(){
    console.log('foi get dados');
    tbody = document.getElementsByTagName('tbody')[0];

    agenda = localStorage.getItem('agenda');
    if (!agenda){
        agenda = '[]';
    }
    console.log(agenda);
    console.log(tbody);

    const obj = JSON.parse(agenda);

    for (let index = 0; index < obj.length; index++) {
        if (tbody.innerHTML) {
            tbody.innerHTML += `<tr><td>${obj[index].nome}</td><td>${obj[index].data}</td><td>${obj[index].hora}</td><td>${obj[index].treino}</td></tr>`;
        } else {
            tbody.innerHTML = `<tr><td>${obj[index].nome}</td><td>${obj[index].data}</td><td>${obj[index].hora}</td><td>${obj[index].treino}</td></tr>`;
        }
    }


}