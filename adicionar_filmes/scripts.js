function adicionarFilme() {
  let filmeFavorito = document.querySelector('#filme').value
  let lista = document.querySelector('#listaFilmes')
  lista.innerHTML = `${lista.innerHTML}<img src= ${filmeFavorito}>`
  document.querySelector('#filme').value = ''
}