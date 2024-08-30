document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            hiddenElementsHeader();
        } else {
            showElementsHeader();
        }
    })

    // Atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            wideAllTabs();
            aba.classList.add('shows__list--is-active');
            removeActiveButton();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Accordion FAQ
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
})

function hiddenElementsHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showElementsHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrCloseAnswer(element) {
    const classe = 'faq__questions__item--is-open';
    const elementFather = element.target.parentNode;

    elementFather.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i< buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function wideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i< tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}