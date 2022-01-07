const signPass = document.getElementById('signPass');
const signShow = document.getElementById('Sshow');
const signHide = document.getElementById('ShideP');

signShow.addEventListener('click', ()=>{
    signPass.type = 'text';
    signShow.classList.add('hide');
    signHide.classList.remove('hide');
});

signHide.addEventListener('click', ()=>{
    signPass.type = 'password';
    signHide.classList.add('hide');
    signShow.classList.remove('hide');
});

// For confirm Password

const confPass = document.getElementById('signPassAgn');
const signShowAgn = document.getElementById('SshowAgn');
const signHideAgn = document.getElementById('ShidePAgn');

signShowAgn.addEventListener('click', ()=>{
    confPass.type = 'text';
    signShowAgn.classList.add('hide');
    signHideAgn.classList.remove('hide');
});

signHideAgn.addEventListener('click', ()=>{
    confPass.type = 'password'
    signHideAgn.classList.add('hide');
    signShowAgn.classList.remove('hide');
});

const signUp = document.getElementById('signUp');

signUp.addEventListener('click',()=>{
    const passOne = signPass.value; 
    const passTwo = confPass.value;

    if (passOne === passTwo & passOne !='' & passTwo !='') {
        alert('Can Proceed Further');
    } 
    else {
        alert('Passwords do not match');
        signPass.value = '';
        confPass.value = '';
    }
});