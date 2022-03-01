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

// 0402 Prototype

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const andre = new Pessoa('andré', 28);

console.log(Pessoa.prototype);
console.log(andre.prototype);

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa('andré', 'rafael', 28);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function - li.click.constructor.name
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
