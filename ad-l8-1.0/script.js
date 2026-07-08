/*
  //AD-14 - JavaScript para la página de contacto.
  //Objetivo: mostrar una alerta Bootstrap cuando el usuario presione el botón Enviar.
*/
window.addEventListener("DOMContentLoaded", () => {
    fetch('Navnime.html')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('No se pudo cargar el menú')
                
            }
    fetch("Noticias.html")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar Noticias.html");
            }
            return respuesta.text();
        })
        .then(data => {
            document.getElementById('navnime').innerHTML = data;
        })
        .catch(error => console.error('Error:', error))
            })
            document.getElementById("noticias").innerHTML = data;
        })
        .catch(error => console.error("Error:", error));

});
