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

// 0401 Constructor Function

function Carro(marcaAtribuida, precoInicial) {
    this.taxa = 1.2
    this.marca = marcaAtribuida;
    this.precoFinal = precoInicial * this.taxa;
    this.preco = this.precoFinal;
}

const honda = new Carro('honda', 3000);
const fiat = new Carro('fiat', 4000);

// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//     }
//  }

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor);
    };
    this.ativar= function() {
        this.element().classList.add('ativar');
    };
}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
lastLi.ativar();

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//         console.log(this.nome + ' andou');
//     }
// }
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + ' andou');
    };
}
  
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new Pessoa('João', 20);
const pessoa1 = new Pessoa('Maria', 25);
const pessoa1 = new Pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function MeuDom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
}

const listaItens = new MeuDom('li');
const ul = new MeuDom('ul');

listaItens.addClass('ativar');
ul.addClass('ativar-ul');

