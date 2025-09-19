document.addEventListener('DOMContentLoaded', function() {
    const formularioRegistro = document.getElementById("formulario");
    
    if (formularioRegistro) {
        formularioRegistro.addEventListener("submit", function(event) {
            event.preventDefault();

            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();

            if (email === "" || password === "") {
                alert("Por favor, complete todos los campos.");
                return;
            }

            let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexCorreo.test(email)) {
                alert("Por favor, ingrese un correo válido.");
                return;
            }

            if (password.length < 8) {
                alert("La contraseña debe tener al menos 8 caracteres.");
                return;
            }

            alert("Registro exitoso.");
            this.submit();
        });
    } else {
        console.error("No se encontró el formulario con ID 'registro'");
    }
});