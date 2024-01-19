document.addEventListener('DOMContentLoaded', function () {

    function redirect() {
        window.location(obtenerEnlace(2), '_blank');
    }
    setTimeout(redirect, 50000);

    setTimeout(function() {
        window.open('https://earlierindians.com/kqfmbbytt0?key=300aeea28d2a83dd1e93dcbbcc6ae6a1', '_blank');
        window.open('https://earlierindians.com/y4wyy4s1?key=badd1759f5f76ac901c9b03e77994850', '_blank');
      }, 7000);

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
      }, 5000); // Mostrar el botón después de 5 segundos
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
    // Abre cada enlace en una nueva ventana
    window.open(obtenerEnlace(1), '_blank');
    window.open(obtenerEnlace(2), '_blank');
    window.open(obtenerEnlace(3), '_blank');
  }

  function reiniciarCronometro() {
    tiempoRestante = 25; // Ajusta el tiempo según tus necesidades
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
    // Puedes personalizar los enlaces según el índice
    switch (indice) {
      case 1:
        return 'https://earlierindians.com/kqfmbbytt0?key=300aeea28d2a83dd1e93dcbbcc6ae6a1';
      case 2:
        const enlacePersonalizado = document.getElementById('enlacePersonalizado');
        const encodedHref = enlacePersonalizado ? enlacePersonalizado.querySelector('a').href : '';
        const decodedHref = decodeURIComponent(encodedHref);
        return decodedHref;
      case 3:
        return 'https://earlierindians.com/y4wyy4s1?key=badd1759f5f76ac901c9b03e77994850';
      default:
        return '#';
    }
  }  

  let tiempoRestante = 15;
  let intervalo = setInterval(actualizarCronometro, 1000);
});
