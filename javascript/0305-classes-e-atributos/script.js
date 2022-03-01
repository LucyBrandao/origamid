// 0305 Classes e Métodos

const menu = document.querySelector('.menu');
menu.classList.add('ativo');
console.log(menu.className);

menu.className += ' teste';
console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');
console.log(img.getAttribute('alt'));
img.setAttribute('alt', 'Fox');
console.log(img.getAttribute('alt'));

const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`Andou ${`km`}`);
  }
}

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  console.log(img.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');
console.log(link);
