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
