const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],

  imprimirResumo: function () {
    let cliente = carrinho.nomeDoCliente;

    let totalDeItens = 0;
    let totalAPagar = 0;

    for (let i = 0; i < carrinho.produtos.length; i++) {
      totalAPagar += carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd;
      totalDeItens += carrinho.produtos[i].qtd;
    }
    console.log(`Cliente: ${cliente}`);
    console.log(carrinho.imprimirDetalhes());
    console.log(
      `Total de Itens: ${totalDeItens}\nTotal a pagar: R$${
        totalAPagar / 100
      },00`
    );
  },
  addProduto: function () {
    for (let i = 0; i < carrinho.produtos.length; i++) {
      if (carrinho.produtos[i].id === novaBermuda.id) {
        carrinho.produtos[i]["qtd"] += novaBermuda["qtd"];
        carrinho.produtos["precoUnit"] += novaBermuda["precoUnit"];
      }
    }
    if (novoTenis.id !== carrinho.produtos.id)
      carrinho["produtos"].push(novoTenis);
  },

  imprimirDetalhes: function () {
    let itens = [];
    let sum = 1;
    for (let i = 0; i < carrinho.produtos.length; i++) {
      itens.push(
        `Item ${sum}- Nome: ${carrinho.produtos[i].nome} - Quantidade: ${
          carrinho.produtos[i].qtd
        } - Preco: R$ ${
          (carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd) / 100
        },00`
      );
      sum++;
    }
    return itens;
  },
  calcularTotalDeItens: function () {
    let totalItens = 0;
    for (let i = 0; i < carrinho.produtos.length; i++) {
      totalItens += carrinho.produtos[i].qtd;
    }
    return totalItens;
  },
  calcularTotalAPagar: function () {
    let totalPagar = 0;
    for (let i = 0; i < carrinho.produtos.length; i++) {
      totalPagar +=
        (carrinho.produtos[i].precoUnit / 100) * carrinho.produtos[i].qtd;
    }
    return totalPagar / 100;
  },
};

// novos itens
const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};
let total = 0;

function melhorDesconto() {
  let descontoItem = carrinho.produtos[0].precoUnit * carrinho.produtos[0].qtd;
  let descontoPercentual = 0;

  for (let i = 0; i < carrinho.produtos.length; i++) {
    total += (carrinho.produtos[i].precoUnit / 100) * carrinho.produtos[i].qtd;

    if (carrinho.produtos[i].precoUnit < descontoItem) {
      descontoItem = carrinho.produtos[i].precoUnit / 100;
    }
  }

  descontoPercentual += total * 0.1;

  if (descontoItem > descontoPercentual) {
    console.log(
      `Item mais barato FREE , desconto de R$ ${descontoItem},00 Total a pagar R$ ${
        total - descontoItem
      },00`
    );
  } else {
    console.log(
      `Desconto 10%: R$${descontoPercentual},00 Total a pagar R$ ${
        total - descontoPercentual
      },00\nDesconto item de menor preço não aplicado valor R$ ${descontoItem},00 é menor que descont % já aplicado\nObrigado e volte sempre`
    );
  }
}

carrinho.addProduto(carrinho, novaBermuda, novoTenis);
carrinho.imprimirDetalhes(carrinho, novaBermuda, novoTenis);
carrinho.imprimirResumo(carrinho, novaBermuda, novoTenis);
carrinho.calcularTotalAPagar(carrinho, novaBermuda, novoTenis);
carrinho.calcularTotalDeItens(carrinho, novaBermuda, novoTenis);

melhorDesconto(carrinho);
