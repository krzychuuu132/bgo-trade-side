

const header = document.querySelector('.header');
const hamburger_btn = document.querySelector('.header__hamburger-btn');

hamburger_btn.addEventListener('click',(e)=>{
    header.classList.toggle('header--active');
    e.target.classList.toggle('header__hamburger-btn--active');
})