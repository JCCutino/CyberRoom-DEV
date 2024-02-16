<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Futurama</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="../../resources/css/futurama.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="../../resources/js/futurama.js" defer></script>
</head>

<body>
    <main>

        <div id="iniciarBtn" class="fut-inicio rounded-5 d-grid justify-content-center align-items-center">
            <h5>La máquina responsive</h5>
            <div class="text-center">
                <button class="btn btn-custom-red col-6">Iniciar</button>
            </div>
        </div>

        <div class="fut-mid text-center d-none">
            <div class="my-2">
                <h5 class="col-12 py-2">Cable 1</h5>
                <p class="fst-italic">"Nunca habrá suficiente riqueza"</p>
                <div class="text-center">
                    <a href="https://www.warhammer.com/en-GB/shop/horus-heresy-age-of-darkness-2022-eng">
                        <button class="btn btn-custom-red col-4 mb-2">Cortar</button>
                    </a>
                </div>
            </div>
            <div class="my-2">
                <h5 class="col-12 py-2">Cable 2</h5>
                <p class="fst-italic">"¿ Pedro ?¿ Eres tú ?"</p>
                <div class="text-center">
                    <a href="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/35/1535558414-lotr.gif?resize=1024:*">
                        <button class="btn btn-custom-red col-6 mb-2">Cortar</button>
                    </a>
                </div>
            </div>
            <div class="my-2">
                <h5 class="col-12 py-2">Cable 3</h5>
                <p class="fst-italic">"Solo los puros de corazón..."</p>
                <div class="text-center">
                    <button id="cortarBtn" class="btn btn-custom-red col-4 mb-2">Cortar</button>
                </div>
            </div>
        </div>

        <div class="fut-end d-none">
            <form id="solucionForm" class="d-grid">
                <label for="campo1"><span class="fst-italic">"Mata al..."</span></label>
                <input type="text" id="campo1" name="campo1" required>
                <label for="campo2"><span class="fst-italic">"Purga al..."</label>
                <input type="text" id="campo2" name="campo2" required>
                <label for="campo3"><span class="fst-italic">"They're taking the hobbits to..."</label>
                <input type="text" id="campo3" name="campo3" required>
                <label for="campo4"><span class="fst-italic">"Cuenta con mi arco y con mi..."</label>
                <input type="text" id="campo4" name="campo4" required>
                <div class="text-center mt-3">
                    <button class="btnbtn-custom-red" type="submit">Enviar</button>
                </div>
            </form>
        </div>

    </main>
</body>

</html>