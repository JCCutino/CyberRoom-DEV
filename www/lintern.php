<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="../resources/img/lichcol.png">

    <title>Encuentra al caracol</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="../resources/css/lintern.css">
        <script defer src="../resources/js/lintern.js"></script>
</head>

<body class="bg">
    <!-- Imagen que activa el modal -->
     <img src="../resources/img/lichcol.png" class="clickable" alt="Descripción de la imagen"
        data-bs-toggle="modal" data-bs-target="#exampleModal">

    <!-- Modal de Bootstrap -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Encontraste a La Pupa</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body pb-0 bg-danger">
                    <h5> Parece que La Pupa estaba disfrazada del caracól de Hora de Aventuras </h5>
                    <img src="../resources/img/pupa2.png" class="img-fluid" alt="la puta sangrienta">
                </div>
                <div class="modal-footer mt-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Ir al siguiente paso</button>
                </div>
            </div>
        </div>
    </div>
    <div class="pizarra" id="pizarra">
        <div class="linterna" id="linterna"></div>
    </div>


</body>

</html>