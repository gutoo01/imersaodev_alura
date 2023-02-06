var numeroSecreto = parseInt(Math.random() * 1001)

while (chute != numeroSecreto) {
  
var chute = prompt('Digite um número entre 1 e 1000')

// se o chute for igual ao número secreto 

  if (chute == numeroSecreto) {
      alert('Acertou!') 
  } else if (chute > numeroSecreto) {
      alert('Errou... o número é menor')
  } else if (chute < numeroSecreto) {
      alert('Errou... o número é maior')
  }
}