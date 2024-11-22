// Модалка мобильного меню из шапки
let burgerBtn = document.getElementById('burger');
let btnClose = document.getElementById('burgerClose');
let mobileMenu = document.getElementById('mobileMenu');

burgerBtn.addEventListener('click', function(e){
    e.preventDefault();    
    mobileMenu.style.display = "block";

});

btnClose.addEventListener('click', function(e) {
    mobileMenu.style.display = "none";    
});

 