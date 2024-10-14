document.addEventListener('DOMContentLoaded', function () {
     // function redirect() {
    //     window.location.href = obtenerEnlace(2);
    //     window.open('https://earlierindians.com/y4wyy4s1?key=badd1759f5f76ac901c9b03e77994850', '_blank');
    //     window.open('https://earlierindians.com/kqfmbbytt0?key=300aeea28d2a83dd1e93dcbbcc6ae6a1', '_blank');
    // } setTimeout(redirect, 18000);
    
    setTimeout(function() {
        window.open('https://yogapersuasive.com/kqfmbbytt0?key=300aeea28d2a83dd1e93dcbbcc6ae6a1', '_blank');
        window.open('https://yogapersuasive.com/y4wyy4s1?key=badd1759f5f76ac901c9b03e77994850', '_blank');
    }, 5000);

    // Funciones del cronómetro
    const boton = document.getElementById('boton');
    const cronometroElement = document.getElementById('cronometro');
    const cronometroContainer = document.querySelector('.cronometro-container');
    const messageOverlay = document.getElementById('messageOverlay');

    function actualizarCronometro() {
        cronometroElement.textContent = tiempoRestante + (tiempoRestante === 1 ? '' : '');

        if (tiempoRestante <= 0) {
            ocultarCronometro();
            setTimeout(() => {
                mostrarBoton();
                boton.addEventListener('click', function () {
                    abrirEnlaces();
                });
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
        ocultarCronometro();
        boton.classList.remove('oculto');
    }

    function abrirEnlaces() {
        window.open(obtenerEnlace(1), '_blank');
        window.location.href = obtenerEnlace(2);
        window.open(obtenerEnlace(3), '_blank');
    }

    function reiniciarCronometro() {
        tiempoRestante = 12;
        mostrarCronometro();
        ocultarBoton();
        intervalo = setInterval(actualizarCronometro, 1000);
    }

    function mostrarCronometro() {
        cronometroElement.style.display = 'block';
        cronometroContainer.classList.remove('hide');
        messageOverlay.style.display = 'none';
    }

    function ocultarBoton() {
        boton.classList.add('oculto');
        boton.removeEventListener('click', abrirEnlaces);
    }

    function obtenerEnlace(indice) {
        switch (indice) {
            case 1:
                return 'https://yogapersuasive.com/kqfmbbytt0?key=300aeea28d2a83dd1e93dcbbcc6ae6a1';
            case 2:
                const enlacePersonalizado = document.getElementById('enlacePersonalizado');
                const href = enlacePersonalizado ? enlacePersonalizado.dataset.href : '';
                const decodedHref = decodeURIComponent(href);
                return decodedHref;
            case 3:
                return 'https://yogapersuasive.com/y4wyy4s1?key=badd1759f5f76ac901c9b03e77994850';
            default:
                return '#';
        }
    }

    let tiempoRestante = 10;
    let intervalo = setInterval(actualizarCronometro, 1000);

    // Añadir dinámicamente el script de invoke.js y el contenedor de div
    const invokeScript = document.createElement('script');
    invokeScript.src = '//yogapersuasive.com/d541a33e190028f9bdf41429dda3c8e9/invoke.js';
    invokeScript.async = true;
    invokeScript.setAttribute('data-cfasync', 'false');
    document.body.appendChild(invokeScript);

    const invokeContainer = document.createElement('div');
    invokeContainer.id = 'container-d541a33e190028f9bdf41429dda3c8e9';
    document.body.appendChild(invokeContainer);

    // Añadir dinámicamente el script e2c56d2b7b29adf67dad00dff78adb61.js
    const otherScript = document.createElement('script');
    otherScript.src = '//yogapersuasive.com/e2/c5/6d/e2c56d2b7b29adf67dad00dff78adb61.js';
    document.body.appendChild(otherScript);
});
