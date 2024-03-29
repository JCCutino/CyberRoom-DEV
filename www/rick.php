<!doctype html>
<html lang="en">
    <head>
        <title>Prueba Rick</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

        <link rel="stylesheet" href="../resources/css/rick.css">
      <script defer src="../resources/js/rick.js"></script>
        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
    </head>

    <body>
        
    <img src="../resources/img/rick1.png" alt="" id="rick" class="rick">
    <img src="../resources/img/hoja-garaje.png" alt="" id="hoja" class="hoja">
    <img src="../resources/img/caja-fuerte.png" alt="" id="caja" class="caja">
    <img src="../resources/img/pistola-portal.webp" alt="" id="pistola" class="pistola">

<div class="popup">
    <p id="message">¡Oye tú! ¿Qué haces aquí? ¿No tienes nada mejor que hacer que estar atrapado en este absurdo escape room?</p>
    <div class="buttons">
        <button id="next">Siguiente</button>
        <button id="close" style="display: none;">Cerrar</button>
    </div>
</div>

<div class="popup-hoja" id="popup-hoja">
            <p>--. .. .-.. .. .--. --- .-.. .-.. .- ...</p>
</div>
<div class="panel">
    <div class="display"></div> 
    <div class="dial">
        <div class="row">
            <div class="digit">1</div>
            <div class="digit">4</div>
            <div class="digit">7</div>
            <div class="digit-null"></div>
        </div>
        <div class="row">
            <div class="digit">2</div>
            <div class="digit">5</div>
            <div class="digit">8</div>
            <div class="digit">0</div>

        </div>
        <div class="row">
            <div class="digit">3</div>
            <div class="digit">6</div>
            <div class="digit">9</div>
            <div class="digit-null"></div>

        </div>
    </div>
    <div class="accept"><i class="fas fa-check"></i> </div>
    <div class="trash"><i class="fas fa-trash-alt"></i></div>
    <div class="dial-top"><i class="fas fa-arrow-up"></i></div>
</div>


    <div class="nota-contra">
        <div class="contenido-contra">
            <p id="codigoPistola">Código Pistola: 7327583</p>
        </div>
    </div>

    <div class="panel-pistola" id="panel-pistola">
    <div class="display-pistola">_ _ _ _ _ _ _</div>
    <div class="dial-pistola">
        <div class="digit-pistola">0</div>
        <div class="digit-pistola">1</div>
        <div class="digit-pistola">2</div>
        <div class="digit-pistola">3</div>
        <div class="digit-pistola">4</div>
        <div class="digit-pistola">5</div>
        <div class="digit-pistola">6</div>
        <div class="digit-pistola">7</div>
        <div class="digit-pistola">8</div>
        <div class="digit-pistola">9</div>
    </div>
    <button class="accept-pistola"><i class="fas fa-check"></i> Aceptar</button>
    <div class="trash-pistola"><i class="fas fa-trash-alt"></i></div>
    <div class="dial-top-pistola"><i class="fas fa-arrow-up"></i></div>
    <div class="message-pistola"></div>
</div>



        
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
