// 0307 Eventos

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
// img.addEventListener('click', () => {
//   console.log('Clicou');
// })

function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
}

animaisLista.addEventListener('click', callbackLista);
// console.log(animaisLista);

function handleKeyboard(event) {
  if (event.key === 'f') {
    console.log('F');
  } else if (event.key === 'a') {
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keydown', handleKeyboard);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const todosElementos = document.querySelectorAll('body *');
// function handleElemento(event) {
//   event.currentTarget.remove();
// }
// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', handleElemento);
// })


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event) {
  if(event.key === 't') {
    console.log('T');
    document.documentElement.classList.toggle('texto-maior');
  }
}

window.addEventListener('keydown', handleClickT);
