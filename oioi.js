const tableBody = document.querySelector('table tbody');
const url = "http://localhost:3000/itens"



  function getItem () {
    axios.get(url)
    .then(response => {
        const data = response.data
        
        data.forEach(item => {
          const row = tableBody.insertRow();
          row.insertCell().innerText = item.data;
          row.insertCell().innerText = item.classificacao;
          row.insertCell().innerText = item.descricao;
          row.insertCell().innerText = item.valor.toFixed(2);
        });
    })
    .catch(error => console.log(error))
}
getItem() 








    data.forEach(item => {
    const row = tableBody.insertRow();
    row.insertCell().innerText = item.data;
    row.insertCell().innerText = item.classificacao;
    row.insertCell().innerText = item.descricao;
    row.insertCell().innerText = item.valor.toFixed(2);
  });