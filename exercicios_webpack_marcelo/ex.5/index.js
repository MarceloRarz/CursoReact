const produto =  {
    nome: 'Caneta bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto) 
novoProduto.nome = 'Caneta bic azul'

console.log(produto, novoProduto)