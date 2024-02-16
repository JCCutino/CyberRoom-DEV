$(document).ready(function() {
    // Definir un contador para hacer un seguimiento del índice actual del mensaje
    let contador = 0;

    // Manejar el clic en el botón "Siguiente"
    $("#next").click(function() {
        // Mostrar mensaje dependiendo del contador
        switch (contador) {
            case 0:
                $("#text").text("¡Enhorabuena agente! Has encontrado a Rick Sanchez. Ahora, tu tercera misión es traer a Philip J. Fry de Futurama a la agencia.");
                break;
            case 1:
                $("#text").text("Fry es un individuo peculiar pero invaluable para nuestra causa. Encuéntralo y asegúrate de que se una a nosotros.");
                break;
            case 2:
                $("#text").text("Una vez que hayas localizado a Fry, asegúrate de traerlo a la agencia. ¡Buena suerte en tu misión, agente!");
                $("#next").replaceWith('<a id="next" class="next" href="fut_index.php">Viajar</a>');
                break;
            default:
                $("#text").text("¡Date prisa, agente! El tiempo apremia.");
                break;
        }
        
        // Incrementar el contador
        contador++;
    });
});
