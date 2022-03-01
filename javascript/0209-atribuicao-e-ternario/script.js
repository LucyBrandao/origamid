// 0208 Arrays e Loops

var videoGames = ['switch', 'ps4', 'xbox', '3ds'];

for (var num = 0; num < 10; num++) {
  console.log(num);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] == 'ps4') {
    break
  }
}

videoGames.forEach(function(item, index) {
  console.log(item, index);
})

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anos = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anos.forEach(function(ano) {
  console.log(`O brasil ganhou a copa de ${ano}`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
