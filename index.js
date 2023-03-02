
//Variáveis
let lista = []
let item = {}
let idObject = 0

//Função que calcula o saldo
const calcularSaldo = () => {
    const somar = lista.reduce((valorAcumulado, item) => {
        return Number(valorAcumulado) + Number(item.valorDaCompraComSinal)
    }, 0)
    return somar.toFixed(2)
}

//Função que calcula o valor de entrada
const calcularEntrada = () => {

    let valorEntrada = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].valorDaCompraComSinal > 0) {
            valorEntrada += Number(lista[i].valorDaCompraComSinal)
        }
    }
    return valorEntrada.toFixed(2)
}

//Função que calcula o valor de saída
const calcularSaida = () => {

    let valorSaida = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].valorDaCompraComSinal < 0) {
            valorSaida += Number(lista[i].valorDaCompraComSinal)
        }
    }
    return valorSaida.toFixed(2)
   
}

/*Função que juntas as classes e calcula o somatório de cada classe
Essa função está apenas aparecendo no console, será usadas posteriormente
para alimentar a interface do usuário com esse resumo*/
const resumoClassificacao = () => {
    const resumo = lista.reduce((result, item, index) => {
      if (!result[item.classificacaoDaCompra]) {
        result[item.classificacaoDaCompra] = {
          id: index,
          total: 0
        };
      }
      result[item.classificacaoDaCompra].total += Number(item.valorDaCompraComSinal);
      return result;
    }, {});
    console.log(resumo);
  };


//Essa função cria as linhas, colunas e botões quando aciona o botão ADICIONAR
const createTable = (dataDaCompra, classificacaoDaCompra, descricaoDaCompra, valorDaCompra) => {
    const bodyTable = document.getElementById('bodyTable')
    const newRow = document.createElement('tr')
    newRow.id = (idObject - 1)

    const newColumnDate = document.createElement('td')
    newColumnDate.classList = 'columnBody'
    newColumnDate.innerText = dataDaCompra

    const newColumnClass = document.createElement('td')
    newColumnClass.classList = 'columnBody'
    newColumnClass.innerText = classificacaoDaCompra

    const newColumnDescription = document.createElement('td')
    newColumnDescription.classList = 'columnBody'
    newColumnDescription.innerText = descricaoDaCompra

    const newColumnValue = document.createElement('td')
    newColumnValue.classList = 'columnBody'
    newColumnValue.innerText = valorDaCompra

    const newColumnEdit = document.createElement('td')
    newColumnEdit.classList = 'columnValue'
    const newColumnRemove = document.createElement('td')
    newColumnRemove.classList = 'columnValue'
   
    const buttonRemove = document.createElement('button')
    buttonRemove.classList = 'remove-button'
    buttonRemove.innerHTML = 'X'
    buttonRemove.id = (idObject - 1)
    //Função de remover linha da interface e do array no botão X
    buttonRemove.addEventListener('click', () => {
        bodyTable.removeChild(newRow)
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id == buttonRemove.id) {
                lista.splice(i, 1)
            }
        }
    
    /*Chamando novamente as funções quando o botão X é acionado para atualizar na interface os valores  */   
    const saldoFinal = document.getElementById('saldoFinal')
    saldoFinal.textContent = `R$ ${calcularSaldo()}`

    const entradaDisplay = document.getElementById('valorDeEntrada')
    entradaDisplay.textContent = `R$ ${calcularEntrada()}`

    const saidaDisplay = document.getElementById('valorSaida')
    saidaDisplay.textContent = `R$ ${calcularSaida()}`

    resumoClassificacao()

    console.table(lista)

    })

    bodyTable.appendChild(newRow)
    newRow.append(newColumnDate, newColumnClass, newColumnDescription, newColumnValue, newColumnEdit, newColumnRemove)    
    newColumnRemove.appendChild(buttonRemove)

}

//Função para criar as classificações
const createClass = () => {
    const classificacaoAdicionada = document.getElementById('classificacao')
    const select = document.querySelector('#options')
    const newOption = document.createElement('option')
    newOption.value = classificacaoAdicionada.value
    newOption.text = classificacaoAdicionada.value

    select.appendChild(newOption)
}

//Botão para adicionar as classificações
document.getElementById('addClassificacao').addEventListener('click', () => {
    createClass()
    const classificacaoAdicionada = document.getElementById('classificacao').value = ""
})

//Função para limpar o input quando o botão adicionar foi acionado
const cleanInput = () => {
    dataDaCompra = document.getElementById('dataDoItem').value = ""
    
    descricaoDaCompra = document.getElementById('descricaoDoItem').value = ""
    valorDaCompra = document.getElementById('valorDoItem').value = ""
    const inputEntradaSaida = document.getElementsByName('entradaSaida').value = ""
    dataDaCompra = document.getElementById('dataDoItem').focus()

}

//Função que aciona o evento do botão adicionar e faz aparecer as informações na tela
document.getElementById('btnAddItem').addEventListener('click', (ev) => {
    ev.preventDefault()
    const dataDaCompra = document.getElementById('dataDoItem').value
    const select = document.querySelector('#options')
    const indice = select.selectedIndex
    const valor = select.value
    const text = select.options[indice].text
    const classificacaoDaCompra = text
    const descricaoDaCompra = document.getElementById('descricaoDoItem').value
    const valorDaCompra = document.getElementById('valorDoItem').value
    const inputEntradaSaida = document.getElementsByName('entradaSaida')

    let valorDaCompraComSinal = 0

    //Lopping para checar se é entrada ou saída e colocar + ou -
    for (let i = 0; i < inputEntradaSaida.length; i++) {
        if (inputEntradaSaida[i].checked) {
            var inputChecked = inputEntradaSaida[i].value
        }

    }
    switch (inputChecked) {
        case "entrada":
            valorDaCompraComSinal = valorDaCompra
            break
        case "saida":
            valorDaCompraComSinal = valorDaCompra * (-1)
            break
    }

    //Cria cada objeto dentro do array quando aciona o botão adicionar
    const item = {}
    const objectIndex = idObject
    idObject++
    item.id = objectIndex
    item.dataDaCompra = dataDaCompra
    item.classificacaoDaCompra = classificacaoDaCompra
    item.descricaoDaCompra = descricaoDaCompra
    item.valorDaCompraComSinal = valorDaCompraComSinal

    if (dataDaCompra == "" || classificacaoDaCompra == "" || descricaoDaCompra == "" || valorDaCompraComSinal == "") {
        alert("Favor preencher todos os dados")
    } else {
        lista.push(item)
        createTable(dataDaCompra, classificacaoDaCompra, descricaoDaCompra, valorDaCompraComSinal)
        cleanInput()
        resumoClassificacao()

    }

    const resumoFinal = document.getElementById('resumo')
    resumoFinal.innerHTML = lista

    const saldoFinal = document.getElementById('saldoFinal')
    saldoFinal.textContent = `R$ ${calcularSaldo()}`

    const entradaDisplay = document.getElementById('valorDeEntrada')
    entradaDisplay.textContent = `R$ ${calcularEntrada()}`

    const saidaDisplay = document.getElementById('valorSaida')
    saidaDisplay.textContent = `R$ ${calcularSaida()}`

    console.table(lista)
    

})















