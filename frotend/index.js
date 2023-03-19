//Variáveis
const url = "http://localhost:3000/itens"
let lista = []
let item = {}


//criar a função getItem que vai buscar as informações da API
function getItem() {
    axios.get(url)
        .then(response => {
            const data = response.data
            const tableBody = document.querySelector('table tbody')
            data.forEach(item => {
                const row = tableBody.insertRow()
                row.insertCell().innerText = item.data
                row.insertCell().innerText = item.classificacao
                row.insertCell().innerText = item.descricao
                row.insertCell().innerText = "R$ " + item.valor.toFixed(2)
                const buttonCell = row.insertCell()
                const button = document.createElement('button')
                buttonCell.appendChild(button)
                button.innerText = 'Remover'
                button.classList.add('remove-btn')
                button.id = item._id
            })

        })
        .catch(error => console.log(error))
}
getItem()


function addNewItem(item) {
    axios.post(url, item)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error))

}
//addNewItem ()

function updateItem() {
    axios.put(`${url}/641077b19b25c1e1f5ff09a3`, updateItem2)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
}
//updateItem()

function deleteItem(id) {
    axios.delete(`${url}/${id}`)
        .then(response => {
            alert(JSON.stringify(response.data))
            location.reload() 
        })
        .catch(error => console.log(error))
}
//deleteItem ()

function getOneItem() {
    axios.get(`${url}/641077b19b25c1e1f5ff09a3`)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}

//getOneItem ()


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

//Função para acionar o botão remover
const remover = () => {
    document.addEventListener('click', (e) => {
        const targetEl = e.target
        if (targetEl.classList.contains("remove-btn")) {            
            const id = targetEl.id
            deleteItem(id) 
                                  
        }
    })
}

remover()


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
    item.data = dataDaCompra
    item.classificacao = classificacaoDaCompra
    item.descricao = descricaoDaCompra
    item.valor = valorDaCompraComSinal

    console.log(item)

    if (dataDaCompra == "" || classificacaoDaCompra == "" || descricaoDaCompra == "" || valorDaCompraComSinal == "") {
        alert("Favor preencher todos os dados")
    } else {
        cleanInput()
        addNewItem(item)
        location.reload()
    }

})

















