const toggle = document.querySelector('.toggle');
const mylist = document.querySelector('.list');
const icon = document.querySelector('.icon');

const ACTIVE = 'active';

function toggleHandler(){
    mylist.classList.toggle(ACTIVE);
    icon.classList.toggle(ACTIVE);
}

function init() {
    toggle.addEventListener('click', toggleHandler);
}

init();