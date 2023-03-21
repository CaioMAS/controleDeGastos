const array = [
    {
        id: "64189952d762dd851871578f",
        data: "19/03/2023",
        classificacao: "Alimentação",
        descricao: "Comida",
        valor: -25.15
    },

    {
        id: "641899a1d762dd8518715794",
        data: "19/03/2023",
        classificacao: "Lazer",
        descricao: "Gole",
        valor: -25.87
    },

    {
        id: "641899bed762dd851871579e",
        data: "19/03/2023",
        classificacao: "Diversos",
        descricao: "Nada",
        valor: -59.68
    },

    {
        id: "64189a78d762dd85187157ad",
        data: "19/03/2023",
        classificacao: "Salário",
        descricao: "Dev",
        valor: 5000
    },   

    {
        id: "64198f68bf5b2db8f37fbd69",
        data: "20/03/2023",
        classificacao: "Salário",
        descricao: "DevFrela",
        valor: 2500
    },

    {
        id: "6419908a9e43a80bb5b152e7",
        data: "20/03/2023",
        classificacao: "Alimentação",
        descricao: "Almoço",
        valor: -23.5
    },

    {
        id: "641990b3ddcfc7f7351afa85",
        data: "20/03/2023",
        classificacao: "Lazer",
        descricao: "GOle",
        valor: -12.25
    },

    {
        id: "64199163579ff3f1999e8674",
        data: "20/03/2023",
        classificacao: "Alimentação",
        descricao: "Lanche",
        valor: -23.3
    },

    {
        id: "64199163579ff3f1999e8674",
        data: "20/03/2023",
        classificacao: "Alimentação",
        descricao: "Lanche",
        valor: -50
    }
]

const buscarCLassificacao = () => {
    const somaTotal = array.reduce((valorAcumulado, item) => {
        return valorAcumulado + item.valor
    }, 0)
    console.log(somaTotal)
}

//buscarCLassificacao()

const juntarClassificacao = () => {
    const classificacoes = array.reduce((acc, item) => {
        if (item.classificacao in acc) {
            acc[item.classificacao] += item.valor;            
          } else if (item.valor < 0) {
            acc[item.classificacao] = item.valor;
          }
          return acc;
       
      }, {});
      
      console.log(classificacoes)    
}

//juntarClassificacao()

const numeros = [0, 4, 2, 4, 7]

const somar = () => {
    const soma = numeros.reduce((acc, numero) => {
        return acc + numero
    }, 0)

    console.log(soma)
}

//somar()

const itens = [
    {descricao: 'pen', quant: 1, price: 3},
    {descricao: 'rule', quant: 2, price: 5},
    {descricao: 'erase', quant: 2, price: 6}
]

const pagar = () => {
    const totalPagar = itens.reduce((acc, item) => {
        return acc + (item.quant * item.price)
    }, 0)
    console.log(totalPagar)
}

//pagar()

const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica", "Caio", "Yure"]



const numeroLetras = () => {
    const iniciais = names.reduce((acc, item) => {
        const primeiraLetra = item[0].toLocaleLowerCase()
        if(acc[primeiraLetra]) {
            acc[primeiraLetra]++
        } else {
            acc[primeiraLetra] = 1
        }

        return acc
    }, {})

    console.log(iniciais)
}

//numeroLetras()

const pessoas = [
    {nome: "Daniel", idade: 28},
    {nome: "Maria", idade: 29},
    {nome: "Marta", idade: 29},
    {nome: "Caio", idade: 26},
]

const idades = () => {
    const juntarIdades = pessoas.reduce((acc, item) => {
        if(acc[item.idade]) {
            acc[item.idade].push(item.nome)
        } else {
            acc[item.idade] = []
            acc[item.idade].push(item.nome)
        }

        return acc
    }, {})

    console.log(juntarIdades)
}

idades()


