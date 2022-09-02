const elementoResposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

document.addEventListener("keypress", function(e){
if(e.key === "Enter"){
  //console.log("Aperto o enter")
  const btn = document.querySelector("#buttonPerguntar")
  btn.click();
}
})  

function mostra(conteudo) {
  document.write(conteudo);
  pulaLinha();
}

function fazerPergunta(){

  function sorteia(n) {

    return Math.round(Math.random() * n);

  }

  resposta = sorteia(1000);

  mostra ("Sua nova senha será: @pa$$w" + resposta);
}
