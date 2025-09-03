
let secionAbierta;


function validar() {
    const cont = document.getElementById('contraseña')
    const pasword = cont.value;

    const user_p = document.getElementById('usuario')
    const user = user_p.value;

    if (pasword == 12345 && user == 'pepe'){
        window.open('inner_secion.html')
        localStorage.setItem('userData', JSON.stringify(user))
        secionAbierta = true;

    }else{
        alert("usuario no encontrado - error 0")
    }
    
}

//obtener informacion del usuario
function getInfousuario() {
    const datosGuardados = localStorage.getItem('datosUsuario');
    if (datosGuardados == null){
        const info_user = document.getElementById('name_user')
        info_user.innerHTML = localStorage.getItem('userData')
    }else{
        alert("si te aparese este mensaje es porque no cargo la info de la cesion correctamente")
    }
}
    


