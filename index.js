const lista = []
const item = {}

const calcularTotal = () => {
    const somar = lista.reduce((valorAcumulado, item) => {
        return Number(valorAcumulado) + Number(item.valorDaCompraComSinal)
    }, 0)
    return somar
}

const createTable = (dataDaCompra, classificacaoDaCompra, descricaoDaCompra, valorDaCompra) => {
    const bodyTable = document.getElementById('bodyTable')
    const newRow = document.createElement('tr')    
    newRow.id = descricaoDaCompra + valorDaCompra
    

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

    const buttonRemove = document.createElement('button')
    buttonRemove.classList = 'remove-button'
    buttonRemove.innerHTML = 'X'

    bodyTable.appendChild(newRow)
    newRow.append(newColumnDate, newColumnClass, newColumnDescription, newColumnValue, newColumnEdit, newColumnRemove)
    newColumnEdit.appendChild(buttonEdit)
    newColumnRemove.appendChild(buttonRemove)

}

document.addEventListener('click', (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest('tr')

    if (targetEl.classList.contains("remove-button")) {
        
        parentEl.remove()
    }
})


document.getElementById('btnAddItem').addEventListener('click', (ev) => {

    ev.preventDefault()
    
    const dataDaCompra = document.getElementById('dataDoItem').value
    const classificacaoDaCompra = document.getElementById('classificacaoDoItem').value
    const descricaoDaCompra = document.getElementById('descricaoDoItem').value
    const valorDaCompra = document.getElementById('valorDoItem').value
    const inputEntradaSaida = document.getElementsByName('entradaSaida')
    let valorDaCompraComSinal = 0

    for(let i = 0; i < inputEntradaSaida.length; i++){
        if(inputEntradaSaida[i].checked) {
            var inputChecked = inputEntradaSaida[i].value
        }   
    
    }

    switch(inputChecked) {
        case "entrada": 
            valorDaCompraComSinal = valorDaCompra
            break
        case "saida":
            valorDaCompraComSinal = valorDaCompra * (-1)
            break
    }

    
    const item = {}           
        
    item.dataDaCompra = dataDaCompra
    item.classificacaoDaCompra = classificacaoDaCompra
    item.descricaoDaCompra = descricaoDaCompra
    item.valorDaCompraComSinal = valorDaCompraComSinal   
    
    

    if (dataDaCompra == "" || classificacaoDaCompra == "" || descricaoDaCompra == "" || valorDaCompraComSinal == "") {
        alert ("Favor preencher todos os dados")    
    } else {         
        lista.push(item)  
        console.table(lista)            
        createTable(dataDaCompra, classificacaoDaCompra, descricaoDaCompra, valorDaCompraComSinal)        
        cleanInput() 
        
    }   
    calcularTotal() 
    console.log(calcularTotal())
})

const cleanInput = () => {
    dataDaCompra = document.getElementById('dataDoItem').value = ""
    classificacaoDaCompra = document.getElementById('classificacaoDoItem').value = ""
    descricaoDaCompra = document.getElementById('descricaoDoItem').value = ""
    valorDaCompra = document.getElementById('valorDoItem').value = ""
    const inputEntradaSaida = document.getElementsByName('entradaSaida').value = ""
    dataDaCompra = document.getElementById('dataDoItem').focus()

}









