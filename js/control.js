let form = document.querySelector('form');
let ParteUser = document.getElementById("usuario");
let PartePass = document.getElementById("pw");
let submit = document.getElementById('submit');
function preventDefault(){}

 
form.onsubmit = function(e) {
    if (ParteUser.value === '' || PartePass.value === '') {
        e.preventDefault();
        alert('Completá ambos datos!');
    }else{

    if(ParteUser.value.includes("@")){
            alert(`Enviado`)
        }
        else{
            alert('El usuario no tiene @');
        }
    }      
    
}