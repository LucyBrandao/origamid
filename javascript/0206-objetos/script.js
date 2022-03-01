// 0206 Objetos

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: 'Lucy',
  sobrenome: 'Brandão',
  idade: 23,
  peso: '60kg',
  altura: '1.64',
  signo: 'aries',
  possuiFaculdade: true,
  bonita: true
}

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

this.carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  patas: 4,
  cor: '#000',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'au au'
    } else {
      return '...'
    }
  }
}
