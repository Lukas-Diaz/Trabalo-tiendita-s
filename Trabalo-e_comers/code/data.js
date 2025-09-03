



function validar() {
    const cont = document.getElementById('contraseña')
    const pasword = cont.value;

    const user_p = document.getElementById('usuario')
    const user = user_p.value;

    if (pasword == 12345 && user == 'pepe'){
        window.open('iner.html')
    }else{
        alert("usuario no encontrado - error 0")        
    }
}

