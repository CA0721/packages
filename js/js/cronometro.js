document.addEventListener('DOMContentLoaded', function () {
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
      }, 10000); // Mostrar el botón después de 10 segundos
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
    boton.style.display = 'block';
  }

  function abrirEnlaces() {
    // Abre cada enlace en una nueva ventana
    window.open(obtenerEnlace(1), '_blank');
    window.open(obtenerEnlace(2), '_blank');
    window.open(obtenerEnlace(3), '_blank');
  }

  function reiniciarCronometro() {
    tiempoRestante = 30; // Ajusta el tiempo según tus necesidades
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
    boton.style.display = 'none';
    boton.removeEventListener('click', abrirEnlaces);
  }

  function obtenerEnlace(indice) {
    // Puedes personalizar los enlaces según el índice
    switch (indice) {
      case 1:
        return 'https://www.toprevenuegate.com/y4wyy4s1?key=badd1759f5f76ac901c9b03e77994850';
      case 2:
        return 'https://t.me/+a5TXPY3cciM5Y2Ux';
      case 3:
        return 'https://earlierindians.com/nfxn8ztb?key=32c8e129ffd69632ddacb89ef333d0e2';
      default:
        return '#';
    }
  }

  let tiempoRestante = 30;
  let intervalo = setInterval(actualizarCronometro, 1000);
});
