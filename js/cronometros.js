// Evento para cargar todo el script una vez que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Redireccionar y abrir ventanas después de un tiempo
    setTimeout(function() {
        window.open('https://yogapersuasive.com/kqfmbbytt0?key=300aeea28d2a83dd1e93dcbbcc6ae6a1', '_blank');
        window.open('https://yogapersuasive.com/y4wyy4s1?key=badd1759f5f76ac901c9b03e77994850', '_blank');
    }, 5000);

    // Variables y elementos del cronómetro
    const boton = document.getElementById('boton');
    const cronometroElement = document.getElementById('cronometro');
    const cronometroContainer = document.querySelector('.cronometro-container');
    const messageOverlay = document.getElementById('messageOverlay');
    let tiempoRestante = 10;
    let intervalo = setInterval(actualizarCronometro, 1000);

    // Funciones para manejar el cronómetro
    function actualizarCronometro() {
        cronometroElement.textContent = tiempoRestante;

        if (tiempoRestante <= 0) {
            ocultarCronometro();
            setTimeout(() => {
                mostrarBoton();
                boton.addEventListener('click', abrirEnlaces);
            }, 3000);
            clearInterval(intervalo);
        } else {
            tiempoRestante--;
        }
    }

    function ocultarCronometro() {
        cronometroElement.style.display = 'none';
        cronometroContainer.classList.add('hide');
        messageOverlay.style.display = 'flex';
    }

    function mostrarBoton() {
        boton.classList.remove('oculto');
    }

    function abrirEnlaces() {
        window.open(obtenerEnlace(1), '_blank');
        window.location.href = obtenerEnlace(2);
        window.open(obtenerEnlace(3), '_blank');
    }

    function obtenerEnlace(indice) {
        switch (indice) {
            case 1:
                return 'https://yogapersuasive.com/kqfmbbytt0?key=300aeea28d2a83dd1e93dcbbcc6ae6a1';
            case 2:
                const enlacePersonalizado = document.getElementById('enlacePersonalizado');
                const href = enlacePersonalizado ? enlacePersonalizado.dataset.href : '';
                return decodeURIComponent(href);
            case 3:
                return 'https://yogapersuasive.com/y4wyy4s1?key=badd1759f5f76ac901c9b03e77994850';
            default:
                return '#';
        }
    }

    // Agrega los scripts y el div dinámicamente al final del body
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = '//yogapersuasive.com/e2/c5/6d/e2c56d2b7b29adf67dad00dff78adb61.js';

    const script2 = document.createElement('script');
    script2.async = true;
    script2.setAttribute('data-cfasync', 'false');
    script2.src = '//yogapersuasive.com/d541a33e190028f9bdf41429dda3c8e9/invoke.js';

    const divContainer = document.createElement('div');
    divContainer.id = 'container-d541a33e190028f9bdf41429dda3c8e9';

    document.body.appendChild(script1);
    document.body.appendChild(divContainer);
    document.body.appendChild(script2);
});
