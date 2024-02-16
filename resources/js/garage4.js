$(document).ready(function() {
    // Definir un contador para hacer un seguimiento del índice actual del mensaje
    let contador = 0;

    // Manejar el clic en el botón "Siguiente"
    $("#next").click(function() {
        // Mostrar mensaje dependiendo del contador
        switch (contador) {
            case 0:
                $("#text").text("¡Enhorabuena agente! Has encontrado a Apu. Ahora, date prisa, nuestra inteligencia a conseguidio localizar a N.");
                break;
            case 1:
                $("#text").text("Ten cuidado ahí fuera, N es un misterio para nosotros al igual que sus intenciones.");
                break;
            case 2:
                $("#text").text("Estate alerta, lo que descubras en esta misión puede cambiar el curso de la historia");
                break;
            case 3:
                $("#text").text("¡Date prisa, agente! Y que la suerte te acompañe.");               
                 $("#next").replaceWith('<a id="next" class="next" href="mascara.php">Viajar</a>');
                break;
            default:
                
                break;
        }
        
        // Incrementar el contador
        contador++;
    });
});
