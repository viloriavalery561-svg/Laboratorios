document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contacto");

    form.addEventListener("submit", function(event) {
        const nombre = document.getElementById("nombre").value.trim();
        const motivo = document.getElementById("motivo").value.trim();
        const correo = document.getElementById("correo").value.trim();

        if (nombre === "" || motivo === "" || correo === "") {
            alert("Por favor completa todos los campos.");
            event.preventDefault(); // evita el envío
        } else if (!correo.includes("@")) {
            alert("Por favor ingresa un correo válido.");
            event.preventDefault();
        } else {
            alert("Formulario enviado correctamente. ¡Gracias por contactarme!");
        }
    });
});