$(document).ready(function() {
    // Definir un contador para hacer un seguimiento del índice actual del mensaje
    let contador = 0;

    // Manejar el clic en el botón "Siguiente"
    $("#next").click(function() {
        // Mostrar mensaje dependiendo del contador
        switch (contador) {
            case 0:
                $("#text").text("¡Enhorabuena agente! Has encontrado a la pupa. Ahora, date prisa, tu próxima misión es encontrar al científico más inteligente.");
                break;
            case 1:
                $("#text").text("Rick Sanchez es conocido por su genio. Mantén la calma y asegúrate de que llegue a salvo a la agencia.");
                break;
            case 2:
                $("#text").text("La seguridad de la agencia depende de la información que solo Rick puede proporcionar. No falles en esta tarea, agente.");
                break;
            case 3:
                $("#text").text("¡Date prisa, agente! El tiempo apremia.");               
                 $("#next").replaceWith('<a id="next" class="next" href="rick.php">Viajar</a>');
                break;
            default:
                
                break;
        }
        
        // Incrementar el contador
        contador++;
    });
});
