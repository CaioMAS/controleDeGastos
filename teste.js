//Primeiro criar uma constante e colocar o local da url
const url = "http://localhost:3000/itens"
const newItem = {
    data: "2023-03-14",
    classificacao: "Alimentação",
    descricao: "Gole de sábado",
    valor: 25.68
}

const updateItem2 = {
    data: "2023-03-15",
    classificacao: "Lazer",
    descricao: "ZZZZZZZZZ",
    valor: 12.36
}


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

function addNewItem () {
    axios.post(url,newItem )
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


