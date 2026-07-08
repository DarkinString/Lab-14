/*
  AD-14 - JavaScript para la página de contacto.
  Objetivo: mostrar una alerta Bootstrap cuando el usuario presione el botón Enviar.
*/
window.addEventListener("DOMContentLoaded", () => {
    fetch('Navnime.html')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('No se pudo cargar el menú')
            }
            return respuesta.text();
        })
        .then(data => {
            document.getElementById('navnime').innerHTML = data;
        })
        .catch(error => console.error('Error:', error))
})
