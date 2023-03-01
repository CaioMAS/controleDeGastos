let lista = []
let item = {}
let idObject = 0

const calcularSaldo = () => {
    const somar = lista.reduce((valorAcumulado, item) => {
        return Number(valorAcumulado) + Number(item.valorDaCompraComSinal)
    }, 0)
    return somar.toFixed(2)
}

const calcularEntrada = () => {

    let valorEntrada = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].valorDaCompraComSinal > 0) {
            valorEntrada += Number(lista[i].valorDaCompraComSinal)
        }
    }
    return valorEntrada.toFixed(2)
}

const calcularSaida = () => {

    let valorSaida = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].valorDaCompraComSinal < 0) {
            valorSaida += Number(lista[i].valorDaCompraComSinal)
        }
    }
    return valorSaida.toFixed(2)
   
}



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

    const buttonEdit = document.createElement('button')
    buttonEdit.classList = 'edit-button'
    buttonEdit.innerHTML = 'E'
    buttonEdit.id = (idObject - 1)

    const buttonRemove = document.createElement('button')
    buttonRemove.classList = 'remove-button'
    buttonRemove.innerHTML = 'X'
    buttonRemove.id = (idObject - 1)
    buttonRemove.addEventListener('click', () => {
        bodyTable.removeChild(newRow)
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id == buttonRemove.id) {
                lista.splice(i, 1)
            }
        }

    const saldoFinal = document.getElementById('saldoFinal')
    saldoFinal.textContent = `R$ ${calcularSaldo()}`

    const entradaDisplay = document.getElementById('valorDeEntrada')
    entradaDisplay.textContent = `R$ ${calcularEntrada()}`

    const saidaDisplay = document.getElementById('valorSaida')
    saidaDisplay.textContent = `R$ ${calcularSaida()}`

    console.table(lista)

    })

    bodyTable.appendChild(newRow)
    newRow.append(newColumnDate, newColumnClass, newColumnDescription, newColumnValue, newColumnEdit, newColumnRemove)
    newColumnEdit.appendChild(buttonEdit)
    newColumnRemove.appendChild(buttonRemove)

}

const createClass = () => {
    const classificacaoAdicionada = document.getElementById('classificacao')
    const select = document.querySelector('#options')
    const newOption = document.createElement('option')
    newOption.value = classificacaoAdicionada.value
    newOption.text = classificacaoAdicionada.value

    select.appendChild(newOption)
}

document.getElementById('addClassificacao').addEventListener('click', () => {
    createClass()
    const classificacaoAdicionada = document.getElementById('classificacao').value = ""
})

const cleanInput = () => {
    dataDaCompra = document.getElementById('dataDoItem').value = ""
    
    descricaoDaCompra = document.getElementById('descricaoDoItem').value = ""
    valorDaCompra = document.getElementById('valorDoItem').value = ""
    const inputEntradaSaida = document.getElementsByName('entradaSaida').value = ""
    dataDaCompra = document.getElementById('dataDoItem').focus()

}


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

    }

    const saldoFinal = document.getElementById('saldoFinal')
    saldoFinal.textContent = `R$ ${calcularSaldo()}`

    const entradaDisplay = document.getElementById('valorDeEntrada')
    entradaDisplay.textContent = `R$ ${calcularEntrada()}`

    const saidaDisplay = document.getElementById('valorSaida')
    saidaDisplay.textContent = `R$ ${calcularSaida()}`

    console.table(lista)


})
















