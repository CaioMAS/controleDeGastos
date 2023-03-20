const classificacoes = [
    {
        "id": 1,
        "classificacao": "Alimentação",
        "valor": 6.5
    },
    {
        "id": 2,
        "classificacao": "Lazer",
        "valor": 10.2
    },
    {
        "id": 3,
        "classificacao": "Plano de saúde",
        "valor": 11.8
    },
    {
        "id": 4,
        "classificacao": "Telefone",
        "valor": 11.8
    },
    {
        "id": 5,
        "classificacao": "Transporte",
        "valor": 11.8
    },
]

const buscarClass = () => {
    classificacoes.forEach((item) => {
        const input = "Transporte"
        if (item.classificacao === input) {
            console.log(item.id)
        }
    })
}

buscarClass()



