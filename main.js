const email = document.querySelector("#email");
const confirmedEmail = document.querySelector("#confirmEmail")
const myForm = document.querySelector("#my-form");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(email.value !== confirmedEmail.value) {
        alert('Email addresses do not match. Please try again.')
    }
})

   
