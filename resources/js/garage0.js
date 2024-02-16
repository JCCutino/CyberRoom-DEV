$(document).ready(function() {
    // Definir un contador para hacer un seguimiento del índice actual del mensaje
    let contador = 0;

    // Manejar el clic en el botón "Siguiente"
    $("#next").click(function() {
        // Incrementar el contador
        contador++;
        
        // Mostrar mensaje dependiendo del contador
        switch (contador) {
            case 1:
                $("#text").text("Bienvenido agente. Tu misión es descubrir quién es N. Para lograrlo, necesitarás reunir a los mejores agentes del multiverso.");
                break;
            case 2:
                $("#text").text("El enigma de N es un desafío que pocos pueden resolver. Tu inteligencia y habilidades serán puestas a prueba.");
                break;
            case 3:
                $("#text").text("Recuerda, la discreción es clave. Mantén tus movimientos en secreto y desconfía de cualquier sospechoso.");
                break;
            case 4:
                $("#text").text("Nuestro futuro depende de tu éxito en esta misión. No defraudes a la agencia, agente.");
                break;
            case 5:
                $("#text").text("Tu primera misión es encontrar a la pupa. ¡Ve y no pierdas tiempo!");
                $("#next").replaceWith('<a id="next" class="next" href="lintern.php">Viajar</a>');

                break;
            default:
                $("#text").text("¡Vaya, vaya! Parece que estás perdido. ¿Necesitas un manual para abrir una puerta?");
                break;
        }
    });
});
