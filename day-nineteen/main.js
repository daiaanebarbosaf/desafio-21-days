
const botaoPesquisar = document.querySelector("#botaoPesquisar")
const resultado = document.querySelector("#resultado")

function search(){
  botaoPesquisar.addEventListener("click", () => {
    const pesquisa = document.querySelector("#pesquisa").value
    
    resultado.innerHTML = `<img src="https://source.unsplash.com/400x400/?${pesquisa}">`

  })
}

