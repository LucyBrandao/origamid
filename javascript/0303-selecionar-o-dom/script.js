// 0303 Seleção de Elementos

const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const imgAnimais = document.querySelectorAll('.animais img');
console.log(imgAnimais);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index) {
    console.log(item, index);
});

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

arrayGrid.forEach(function(item) {
    console.log(item);
})

// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgsImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelector('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');
console.log(h2Animais);

// Selecione o último p do site
const ps = document.querySelectorAll('p');
console.log(ps[--ps.length]);
