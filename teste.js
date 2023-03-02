const lista = [
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Alimentação", descricaoDaCompra: "Comida", valorDaCompraComSinal: 50},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Lazer", descricaoDaCompra: "Gole", valorDaCompraComSinal: 40},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Alimentação", descricaoDaCompra: "Comida", valorDaCompraComSinal: 30},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Lazer", descricaoDaCompra: "Gole", valorDaCompraComSinal: 20},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Alimentação", descricaoDaCompra: "Comida", valorDaCompraComSinal: 10},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Lazer", descricaoDaCompra: "Gole", valorDaCompraComSinal: 5},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Alimentação", descricaoDaCompra: "Comida", valorDaCompraComSinal: 2}
]


function calcularGastosPorCategoria(lista) {
    const gastosPorCategoria = lista.reduce((acc, item) => {
      const categoria = item.classificacaoDaCompra;
      const valor = item.valorDaCompraComSinal;
      acc[categoria] = (acc[categoria] || 0) + valor;
      return acc;
    }, {});
  
    console.table(gastosPorCategoria);
  }
  
  calcularGastosPorCategoria(lista);