var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength) {
        elMsg.style.color = 'red';
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
    } else {
        elMsg.innerHTML = '';
    }
}
elUsername.addEventListener('blur', function() {
    checkUsername(8);
}, false);

var elPassword = document.getElementById('password');
var elPsw = document.getElementById('psw');

function checkPassword(min) {
    if (elPassword.value.length < min) {
        elPsw.style.color = 'red';
        elPsw.textContent = 'Your password must be ' + min + ' characters or more';
    } else {
        elPsw.innerHTML = '';
    }
}
elPassword.addEventListener('blur', function() {
    checkPassword(8);
}, false); //do not understand addEventListener


function conPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var elConfirm = document.getElementById("nomatch");

    if (password != confirmPassword) {
        elConfirm.style.color = "red";
        elConfirm.innerHTML = "Password and Confirm Password do not match";
    } else {
        elConfirm.style.color = "green";
        elConfirm.innerHTML = "Matching";
    }
}

function valEmail(){
            var email = document.getElementById("email").value;
            var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
            var error = document.getElementById("valid");
            if(!regex.test(email)){
               error.style.color ='red';
               error.innerHTML= "Enter a valid email";
                } else {
                error.innerHTML = '';
                }
        }   