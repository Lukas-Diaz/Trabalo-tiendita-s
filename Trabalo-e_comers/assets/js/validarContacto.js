document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", (event) => {
    const nombre = document.getElementById("nombre-entrada").value.trim();
    const correo = document.getElementById("correo-entrada").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    
    if (nombre.length > 100) {
      alert("El nombre debe tener menos  de 100 carácteres!");
      event.preventDefault();
      return;
    }

    
    const correoRegex = /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (!correoRegex.test(correo)) {
      alert("Por favor ingrese un correo válido.");
      event.preventDefault();
      return;
    }
    if (correo.length > 100){
        alert("El correo debe tener menos de 100 carácteres!")
        event.preventDefault();
        return;
    }

    
    if (comentario.length > 500) {
      alert("El comentario no puede superar los 500 caracteres.");
      event.preventDefault();
      return;
    }

    
    alert("Formulario válido. ¡Mensaje enviado!");
  });
});
