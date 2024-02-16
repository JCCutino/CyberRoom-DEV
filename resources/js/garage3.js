$(document).ready(function() {
    // Definir un contador para hacer un seguimiento del índice actual del mensaje
    let contador = 0;

    // Manejar el clic en el botón "Siguiente"
    $("#next").click(function() {
        // Mostrar mensaje dependiendo del contador
        switch (contador) {
            case 0:
                $("#text").text("¡Enhorabuena agente! Has encontrado a Philip J. Fry. Ahora, tu cuarta misión es localizar a Apu de los Simpsons y traerlo a la agencia.");
                break;
            case 1:
                $("#text").text("Apu es astuto y perspicaz. No te dejes engañar por su apariencia tranquila, puede ser de gran ayuda en nuestra misión.");
                break;
            case 2:
                $("#text").text("Una vez que hayas localizado a Apu, asegúrate de traerlo a la agencia. ¡Buena suerte en tu misión, agente!");
                $("#next").replaceWith('<a id="next" class="next" href="tu-script-php">Viajar</a>');

                break;
            default:
                $("#text").text("¡Date prisa, agente! El tiempo apremia.");
                break;
        }
        
        // Incrementar el contador
        contador++;
    });
});
