// 0205 Funções

// função área quadrado
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(6));


// função imc
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

console.log(imc(60, 1.64));

// função on-click s imples
addEventListener('click', function(){
  console.log('hello');
})

// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(x) {
  return !!x;
}

console.log(verificaTruthy(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Lucy', 'Brandão'));

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 === 0) {
    return 'confia';
  } else {
    return 'desconfia';
  }
}

console.log(verificaPar(8));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(arg) {
  return typeof(arg);
}

console.log(verificaTipo(8));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  return console.log(nomeCompleto('Lucy', 'Brandao'));
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  // var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
