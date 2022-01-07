const password = document.getElementById('pass');
const show = document.getElementById('show');
const hide = document.getElementById('hideP');

show.addEventListener('click', ()=>{
    password.type = 'text';
    hide.classList.remove('hide');
    show.classList.add('hide');
});

hide.addEventListener('click', ()=>{
    password.type = 'password';
    show.classList.remove('hide');
    hide.classList.add('hide');
});

