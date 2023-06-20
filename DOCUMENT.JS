
function Verificaredad(){
    var edad = document.querySelector("#EDAD").value;
    var nombre = document.querySelector("#NOMBRE").value;
    
    if(edad == ""){
        alert("INGRESE UNA EDAD");
    }else if(edad < 0 ){
        alert("No se puede tener una edad menor a 0")
    }else if(edad >= 18){
        alert(nombre +" es mayor de edad");
    }else{
        alert(nombre + " es menor de edad");
    }
}

const form = document.getElementById("myForm");

function validaEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validaForm(){
    const input = document.getElementById("email")
    const inputvalue = input.value

    if(!validaEmail(inputvalue)){
        alert('Por favor ingrese un correo valido.')
    }else{
        alert('Correo electronico enviado correctamente.')
    }
    
}

form.addEventListener("submit", function(alejandro){
    alejandro.preventDefault()
    validaForm();
    
})

