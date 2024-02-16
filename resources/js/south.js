"use strict";

$(document).ready(function () {
  // Inicializar la funcionalidad de arrastre
  $(".draggable").draggable({
    // Al soltar la pieza, verificar si está dentro de la silueta
    stop: function (event, ui) {
      verificarColocacion(ui.helper);
    },
  });

  // Función para verificar si la pieza está dentro de la silueta
  function verificarColocacion(pieza) {
    // Obtener las coordenadas de la silueta
    let silueta = $(".silueta");
    let siluetaRect = silueta[0].getBoundingClientRect();
    let siluetaLeft = siluetaRect.left;
    let siluetaTop = siluetaRect.top;

    // Obtener las coordenadas de la pieza soltada
    let piezaRect = pieza[0].getBoundingClientRect();
    let piezaLeft = piezaRect.left;
    let piezaTop = piezaRect.top;

    // Lógica para verificar si la pieza está dentro de la silueta
    if (
      piezaLeft >= siluetaLeft &&
      piezaLeft + piezaRect.width <= siluetaLeft + siluetaRect.width &&
      piezaTop >= siluetaTop &&
      piezaTop + piezaRect.height <= siluetaTop + siluetaRect.height
    ) {
      // Mostrar el mensaje de éxito
      $("#myModal").show();
    }
  }
});

$(document).ready(function () {
  // Función para verificar el tamaño de la ventana
  function verificarTamanioVentana() {
    // Obtener el ancho de la ventana
    let anchoVentana = $(window).width();

    // Establecer un umbral, por ejemplo, 600 píxeles, como límite mínimo para el responsive
    let umbralMinimo = 600;

    // Verificar si la ventana está en pantalla completa
    let esPantallaCompleta = window.innerWidth == screen.width && window.innerHeight == screen.height;

    // Mostrar el modal si el ancho de la ventana es menor que el umbral y no está en pantalla completa
    if (anchoVentana < umbralMinimo && !esPantallaCompleta) {
      $("#modalNoResponsive").show();
    } else {
      $("#modalNoResponsive").hide();
    }
  }

  // Verificar el tamaño de la ventana al cargar la página
  verificarTamanioVentana();

  // Verificar el tamaño de la ventana cuando se redimensiona
  $(window).resize(function () {
    verificarTamanioVentana();
  });
});

function showAlert() {
  alert("Estás en un bucle Pringao!");
}

// Función para recargar la página y mostrar un alert antes de la recarga
function reloadPageWithAlert() {
  // Mostrar el alert antes de la recarga
  showAlert();
  
  // Recargar la página después de un breve tiempo (1000 milisegundos)
  setTimeout(function() {
    location.reload(true); // true indica que la recarga debe ser forzada desde el servidor
  }, 1000);
}

// Configurar el intervalo de recarga cada 15 segundos
setInterval(function() {
  reloadPageWithAlert();
}, 5000);
