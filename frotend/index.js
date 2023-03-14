//Variáveis
const url = "http://localhost:3000/itens"
let lista = []
let item = {}
let idObject = 0

  //criar a função getItem que vai buscar as informações da API
function getItem () {
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getItem() 


function addNewItem (item) {
    axios.post(url, item )
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
    
}
//addNewItem ()

function updateItem () {
    axios.put(`${url}/641077b19b25c1e1f5ff09a3`, updateItem2)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//updateItem()

function deleteItem () {
    axios.delete(`${url}/6410779c9b25c1e1f5ff09a0`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//deleteItem ()

function getOneItem () {
    axios.get(`${url}/641077b19b25c1e1f5ff09a3`)    
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

//getOneItem ()


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
    //item.id = objectIndex
    item.data = dataDaCompra
    item.classificacao = classificacaoDaCompra
    item.descricao = descricaoDaCompra
    item.valor = valorDaCompraComSinal

    console.log(item)

    if (dataDaCompra == "" || classificacaoDaCompra == "" || descricaoDaCompra == "" || valorDaCompraComSinal == "") {
        alert("Favor preencher todos os dados")
    } else {
        lista.push(item)
        createTable(dataDaCompra, classificacaoDaCompra, descricaoDaCompra, valorDaCompraComSinal)
        cleanInput()
        addNewItem(item)   
                  

    }
   
})

















