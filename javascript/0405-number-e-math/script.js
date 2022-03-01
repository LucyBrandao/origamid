function initiTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            }) 
            tabContent[index].classList.toggle('ativo');
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}
initiTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const ativoClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(ativoClass);
        accordionList[0].nextElementSibling.classList.add(ativoClass);

        function activeAccordion() {
            this.classList.toggle(ativoClass);
            this.nextElementSibling.classList.toggle(ativoClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
    
}
initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();

// 0405 Number e Math

// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);

console.log(numeroMaximo)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[3]);
