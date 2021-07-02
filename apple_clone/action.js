const toggle__btn = document.querySelector('.toggle__btn');
const navbar__menu = document.querySelector('.navbar__menu');
const cancle__btn = document.querySelector('.cancle__btn');

function action_slide_menu() {
    navbar__menu.classList.toggle('block');
    toggle__btn.classList.toggle('none');
    cancle__btn.classList.toggle('block');
    document.body.style.background='black';
    navbar__menu.style.transition = '1s';
}

function action_cancle_btn() {
    cancle__btn.classList.toggle('block');
    toggle__btn.classList.toggle('none');
    navbar__menu.classList.toggle('block');
    document.body.style.background='white';
}

function init() {
    toggle__btn.addEventListener('click', action_slide_menu);
    cancle__btn.addEventListener('click', action_cancle_btn);
}

init();