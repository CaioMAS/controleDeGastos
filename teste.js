const lista = [
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Alimentação", descricaoDaCompra: "Comida", valorDaCompraComSinal: 50},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Lazer", descricaoDaCompra: "Gole", valorDaCompraComSinal: 40},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Alimentação", descricaoDaCompra: "Comida", valorDaCompraComSinal: 30},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Lazer", descricaoDaCompra: "Gole", valorDaCompraComSinal: 20},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Alimentação", descricaoDaCompra: "Comida", valorDaCompraComSinal: 10},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Lazer", descricaoDaCompra: "Gole", valorDaCompraComSinal: 5},
    {dataDaCompra: "01/03/2023", classificacaoDaCompra: "Alimentação", descricaoDaCompra: "Comida", valorDaCompraComSinal: 2}
]

const calcularSaldo = () => {
    const somar = lista.reduce((valorAcumulado, item) => {
        return Number(valorAcumulado) + Number(item.valorDaCompraComSinal)
    }, 0)
    return somar
}

console.log(calcularSaldo())

const nova = []
for (let i = 0; i < lista.length; i++) {
    if (lista[i].classificacaoDaCompra === "Alimentação") {
        nova.push(lista[i])
    }
}

console.log(nova)