const classificacoes = [
    {
        "id": 1,
        "classificacao": "Alimentação"
    },
    {
        "id": 2,
        "classificacao": "Lazer"
    },
    {
        "id": 3,
        "classificacao": "Plano de saúde"
    },
    {
        "id": 4,
        "classificacao": "Telefone"
    },
    {
        "id": 5,
        "classificacao": "Transporte"
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

