// let rafaNome = 'Rafa'
let gui = {
  nome: 'Guilherme',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
}

let paulo = {
  nome: 'Paulo',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
}

let renata = {
  nome: 'Renata',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
}

let elementoTabela = document.querySelector('#tabelaJogadores')

exibirNaTela()

function exibirNaTela() {  
  elementoTabela.innerHTML = `
  <tr>
        <td>${gui.nome}</td>
        <td>${gui.vitoria}</td>
        <td>${gui.empate}</td>
        <td>${gui.derrota}</td>
        <td>${gui.pontos}</td>
        
        <td><button onClick="adicionarVitoria(gui)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(gui)">Empate</button></td>
        <td><button onClick="adicionarDerrota(gui)">Derrota</button></td>
      </tr>
`
}

  function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirNaTela();
  }

function adicionarEmpate(jogador) {
  jogador.empate++
  jogador.pontos++
  exibirNaTela()
}

function adicionarDerrota(jogador) {
  jogador.derrota++
  exibirNaTela()
}