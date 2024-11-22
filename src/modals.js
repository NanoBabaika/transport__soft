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


// Модалка из секции 8
 
let formBtn = document.getElementById('form__btn');
let formModal = document.getElementById('modal_form')
let closeModalForm = document.getElementById('form-btn-close');

formBtn.addEventListener('click', function(e){
    e.preventDefault();    
    formModal.style.display = "block";
    console.log('Данные отправлены! {^_^}');
});

closeModalForm.addEventListener('click', function(e) {
    formModal.style.display = "none";    
});

window.addEventListener('click', function(e) {
    if(e.target == formModal) {
        formModal.style.display = "none";    
    }
})

// Добавить валидацию формы