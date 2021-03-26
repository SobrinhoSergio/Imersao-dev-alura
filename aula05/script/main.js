function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector("#filme")
    var filmeFavorito = campoFilmeFavorito.value    
    if (filmeFavorito.endsWith('.jpeg')){
      listarFilmesNaTela(filmeFavorito)
  }  else{
    alert("Imagem inválida")
  }
   campoFilmeFavorito.value = " "
  }
  
  function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector("#listaFilmes")
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }

  //https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-m8zzyx_5670999f.jpeg