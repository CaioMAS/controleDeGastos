//Variáveis
const url = "http://localhost:3000/itens"
const urlClassificacoes = "http://localhost:3000/classificacoes"
let lista = []
let soma = 0
let saida = 0



//criar a função getItem que vai buscar os itens na API API
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

//função que vai buscar classificação por ID
function getClassificacaoPorId() {
    axios.get(urlClassificacoes)
        .then(response => {
            const data = response.data
            const classificacao = document.getElementById('classificacao').value
            data.forEach(item => {
                if (item.classificacao === classificacao) {
                    const id = item._id
                    deleteCLassificacao(id)
                }
            })

        })
        .catch(error => console.log(error))
}


//criar a função getItem que vai buscar as classificações e cria options no silect na  API
function getClassificacao() {
    axios.get(urlClassificacoes)
        .then(response => {
            const data = response.data
            const select = document.querySelector('#options')
            data.forEach(classif => {
                const option = document.createElement('option')
                option.value = classif.classificacao
                option.text = classif.classificacao
                select.appendChild(option)
            })
        })
        .catch(error => console.log(error))
}
getClassificacao()

function getParaResumoDisplay() {
    axios.get(url)
        .then(response => {
            const data = response.data
            const entradaDisplay = document.getElementById('entradas')
            const saidaDisplay = document.getElementById('saidas')
            const saldoDisplay = document.getElementById('saldoFinal')
            data.forEach(item => {
                if (item.valor > 0) {
                    soma += item.valor
                    entradaDisplay.textContent = `R$ ${soma.toFixed(2)}`
                } else if (item.valor < 0) {
                    saida += item.valor
                    saidaDisplay.textContent = `R$ ${saida.toFixed(2)}`
                }
            })
            let saldo = soma + saida
            console.log(saldo)
            saldoDisplay.textContent = `R$ ${saldo.toFixed(2)}`

        })
        .catch(error => console.log(error))
}

getParaResumoDisplay()


//adiciona itens de saída / entrada no banco de dados
function addNewItem(item) {
    axios.post(url, item)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error))

}

//adiciona classificação no banco de dados
function addNewClassificacao(classificacao) {
    axios.post(urlClassificacoes, classificacao)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error))

}

//altera o item, não está sendo utilizada no código
function updateItem() {
    axios.put(`${url}/641077b19b25c1e1f5ff09a3`, updateItem2)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
}

//deleta item do banco de dados de saída / entrada
function deleteItem(id) {
    axios.delete(`${url}/${id}`)
        .then(response => {
            alert(JSON.stringify(response.data))
            location.reload()
        })
        .catch(error => console.log(error))
}

//deleta a classificação do banco de dados
function deleteCLassificacao(id) {
    axios.delete(`${urlClassificacoes}/${id}`)
        .then(response => {
            alert(JSON.stringify(response.data))
            location.reload()
        })
        .catch(error => console.log(error))
}

//busca um item por ID, não está sendo utilizada
function getOneItem() {
    axios.get(`${url}/641077b19b25c1e1f5ff09a3`)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}

const cleanInputClassificacao = () => {
    const classificacaoAdicionada = document.getElementById('classificacao').value = ""
}


//Função para limpar o input quando o botão adicionar foi acionado
const cleanInput = () => {
    dataDaCompra = document.getElementById('dataDoItem').value = ""
    descricaoDaCompra = document.getElementById('descricaoDoItem').value = ""
    valorDaCompra = document.getElementById('valorDoItem').value = ""
    const inputEntradaSaida = document.getElementsByName('entradaSaida').value = ""
    dataDaCompra = document.getElementById('dataDoItem').focus()

}

//Função para acionar o botão remover de cada item
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

//função que aciona o botão que vai remover a classificação
const removerClassificacao = () => {
    document.getElementById('excluirClassificacao').addEventListener('click', () => {
        //const classificacao = document.getElementById('classificacao').value
        getClassificacaoPorId()

    })

}
removerClassificacao()

//Botão para adicionar as classificações no banco de dados
document.getElementById('addClassificacao').addEventListener('click', () => {
    const classificacaoAdicionada = document.getElementById('classificacao').value
    const classificacao = {}
    classificacao.classificacao = classificacaoAdicionada
    if (classificacaoAdicionada == "") {
        alert("Favor preencher a classificação")
    } else {
        addNewClassificacao(classificacao)
        cleanInputClassificacao()
        location.reload()
    }


})


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

















