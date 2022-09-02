const elementoResposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')


function mostra(conteudo) {
  document.write(conteudo);
}

function sorteia(n) {

  return Math.round(Math.random() * n);

}

function fazerPergunta(){

   resposta = sorteia(1000);

  mostra ("Sua nova senha será: @pa$$w" + resposta);
}
