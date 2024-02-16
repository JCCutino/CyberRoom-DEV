"use strict"

$(document).ready(function () {
  $(".draggable").draggable();
});


  $(document).ready(function() {
    $(".draggable").draggable({
      containment: "#cartman",
      snap: "#cartman",
      snapMode: "inner"
    });

    $(".draggable").on("dragstop", function() {
      var puzzleCompleto = verificarPuzzleCompleto();
      
      if (puzzleCompleto) {
        $("#myModal").show();
      }
    });

    function verificarPuzzleCompleto() {
      // Define rangos de coordenadas para cada pieza
      var rangos = {
        cabesa: { top: [70, 80], left: [160, 180] },
        cuerpo: { top: [140, 160], left: [10, 30] },
        manoIzquierda: { top: [60, 80], left: [180, 200] },
        manoDerecha: { top: [60, 80], left: [165, 185] },
        piernas: { top: [230, 250], left: [40, 60] },
        pieIzquierdo: { top: [280, 300], left: [10, 30] },
        pieDerecho: { top: [280, 300], left: [25, 45] }
      };

      // Verifica si todas las piezas están en sus rangos correspondientes
      for (var pieza in rangos) {
        var posicion = $("#" + pieza).position();
        var rango = rangos[pieza];

        if (!verificarRango(posicion, rango)) {
          return false; // Al menos una pieza está fuera de su rango
        }
      }

      return true; // Todas las piezas están en sus rangos
    }

    function verificarRango(posicion, rango) {
      return (
        posicion.top >= rango.top[0] &&
        posicion.top <= rango.top[1] &&
        posicion.left >= rango.left[0] &&
        posicion.left <= rango.left[1]
      );
    }
  });
