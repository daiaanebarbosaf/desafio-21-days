const elementoResposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')


function mostra(resposta) {
  document.write(resposta);
}

function fazerPergunta(){

  function sorteia(n) {

    return Math.round(Math.random() * n);

  }

  resposta = sorteia(1000);

  mostra ("Sua nova senha será: @pa$$w" + resposta);
}
