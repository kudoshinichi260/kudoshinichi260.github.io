const home = document.querySelector('.header__home') 
const portfolio = document.querySelector('.header__portfolio')
const c_home = document.querySelector('.content__home')
const c_portfolio = document.querySelector('.content__portfolio')
window.onload = function(){
    openHome();
}
function openHome(){
    home.style.display = 'flex';
    portfolio.style.display = 'none';
    c_home.style.display = 'block';
    c_portfolio.style.display = 'block';
}
function openPortfolio(){
    home.style.display = 'none';
    portfolio.style.display = 'flex';
    c_home.style.display = 'none';
    c_portfolio.style.display = 'block';
}
