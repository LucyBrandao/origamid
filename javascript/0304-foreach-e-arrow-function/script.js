// 0304 ForEach e Arrow Function

const img = document.querySelectorAll('img');
img.forEach(function(item, index, array){
    console.log(item); // o item atual no loop
    console.log(index); // o número do index
    console.log(array); // a Array completa
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos); // transforma em array

titulosArray.forEach(function(item){
  console.log(item);
});

const imagens = document.querySelectorAll('img');
imagens.forEach((item) => console.log(item));

// Mostre no console cada parágrado do site
const ps = document.querySelectorAll('p');
ps.forEach((p) => console.log(p));

// Mostre o texto dos parágrafos no console
ps.forEach((p) => console.log(p.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
