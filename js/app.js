function comprar() {
    //recuperar informações do formulario
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    // fazendo cálculo descontando os ingressos 
    if (tipoIngresso.value == 'pista') {
        comprarPista(quantidadeIngresso);
    } 
    if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidadeIngresso);
    }
    if (tipoIngresso.value == 'inferior') {
        comprarInferior(quantidadeIngresso);
    }

}

function comprarPista(quantidadeIngresso) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeIngresso > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
    
}

function comprarSuperior(quantidadeIngresso) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeIngresso > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
    
}

function comprarInferior(quantidadeIngresso) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeIngresso > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
    
}


