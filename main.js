const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};
let home = document.querySelector('.homes');
let about = document.querySelector('.abouts');
let services = document.querySelector('.servicess');
let portfolio = document.querySelector('.portfolios');
let contact = document.querySelector('.contacts');

home.onclick = () => {
	home.classList.toggle('active');
    about.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    contact.classList.remove('active');
};
about.onclick = () => {
	home.classList.remove('active');
    about.classList.toggle('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    contact.classList.remove('active');
};
services.onclick = () => {
	home.classList.remove('active');
    about.classList.remove('active');
    services.classList.toggle('active');
    portfolio.classList.remove('active');
    contact.classList.remove('active');
};
portfolio.onclick = () => {
	home.classList.remove('active');
    about.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.toggle('active');
    contact.classList.remove('active');
};
contact.onclick = () => {
	home.classList.remove('active');
    about.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    contact.classList.toggle('active');
};


