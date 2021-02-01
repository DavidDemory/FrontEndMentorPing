var form = document.getElementById("container--form");
var email = document.getElementById("form--mail");
var errorMessage = document.getElementById("error--message");

form.addEventListener("submit", (e) => {
    if (email === '' || !isValid(email.value)) {
        e.preventDefault();
        errorMessage.classList.add('visible');
        email.classList.add('invalid');
    }
})

function isValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}