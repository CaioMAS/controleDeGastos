const tableBody = document.querySelector('table tbody');

const data = [
    {
      "data": "14-03-2023",
      "classificacao": "Alimentação",
      "descricao": "Almoço de domingo",
      "valor": 25.15
    },
    {
      "data": "16-03-2023",
      "classificacao": "Lazer",
      "descricao": "Churrasco",
      "valor": 25.15
    },
    {
      "data": "17-03-2023",
      "classificacao": "Plano de saúde",
      "descricao": "Unimed",
      "valor": 25.15
    },
    {
      "data": "19-03-2023",
      "classificacao": "Lazer",
      "descricao": "Gole",
      "valor": 25.15
    },
    {
        "data": "19-03-2023",
        "classificacao": "Lazer",
        "descricao": "Gole",
        "valor": 25.15
      }
  ];
  
  data.forEach(item => {
    const row = tableBody.insertRow();
    row.insertCell().innerText = item.data;
    row.insertCell().innerText = item.classificacao;
    row.insertCell().innerText = item.descricao;
    row.insertCell().innerText = item.valor.toFixed(2);
  });