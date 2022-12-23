const password = document.getElementById('password');
const eye = document.getElementById('eye');

function eyeClick(){
let passwordinput = password.type== "password"

if(passwordinput){
    showPassword()

} else {
    hidePassword()
}

}

function showPassword(){
    password.setAttribute("type","text")
    eye.setAttribute("class","fa-regular fa-eye-slash")
}

function hidePassword(){
    password.setAttribute("type","password")
    eye.setAttribute( "class", "fa-regular fa-eye")

}

