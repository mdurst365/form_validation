const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    // get the values from the inputs
const usernameValue=  username.value.trim();
const emailValue =  email.value.trim();
const passwordvalue =  password.value.trim();
const password2value =   password2.value.trim();

//check for empty values and throw error if submitted with no input
    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'User Name cannot be blank')
    } else {
        //add success class
        setSuccessFor(username);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small tag
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}