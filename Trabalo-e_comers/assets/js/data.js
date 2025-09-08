
let sesionAbierta;
const correoRegex = /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/;



function validar() {
    const cont = document.getElementById('contraseña')
    const password = cont.value;

    const user_p = document.getElementById('usuario')
    const user = user_p.value;

    if (password.length >=4 && password.length <= 10 && correoRegex.test(user)){
        window.open('inner_sesion.html')
        localStorage.setItem('userData', JSON.stringify(user))
        sesionAbierta = true;

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
        alert("si te aparece este mensaje es porque no cargo la información de la sesión correctamente")
    }
}
    


