//cria a div e a label que aparecem quando a página está carrehando
function showLoading() {
    const div = document.createElement("div")
    div.classList.add("loading", "centralize")
    const label = document.createElement("label")
    label.textContent = "Carregando..."
    div.appendChild(label)
    document.body.appendChild(div)

    
}


function hideLoading() {
    const loadings = document.getElementsByClassName("loading")
    //se a lista tiver um elemento loadings, vai buscar o primeiro elemento e vai remover
    if(loadings.length) {
        loadings[0].remove()
    }
}