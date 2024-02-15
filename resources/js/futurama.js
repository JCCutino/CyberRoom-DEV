'use strict'

/* CAMBIAR CONTENIDO DEL PRIMER DIV (FUT_INICIO) */
document.addEventListener('DOMContentLoaded', function () {
    const cambiarContenidoBtn = document.querySelector('.btn-custom-red');

    cambiarContenidoBtn.addEventListener('click', function () {
        const futInicio = document.querySelector('.fut-inicio');
        futInicio.innerHTML = `
        <p><span class=fw-medium>Fry</span>: ¡No veo nada Bender!</p>
        <p><span class=fw-medium>Bender</span>: ¡Quita cachocarne! Hay un cable aquí que sobra.</p>
        <p><span class=fw-medium>Fry</span>: ¿Y si le reducimos el tamaño a esto? Quizá solucione el problema.</p>
        <p><span class=fw-medium>Bender</span>: No sé qué relación hay, pero por probar...</p>
      `;
    });
});

/* REVELAR EL SEGUNDO DIV EN TAMAÑO DE PANTALLA MÓVIL */

document.addEventListener('DOMContentLoaded', function () {
    const futInicio = document.querySelector('.fut-inicio');
    const futMid = document.querySelector('.fut-mid');
    const iniciarBtn = document.getElementById('iniciarBtn'); // Añade el ID al botón "Iniciar"
    let botonIniciado = false; // Estado para verificar si se ha pulsado el botón "Iniciar"

    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function handleScreenSizeChange(e) {
        if (botonIniciado) { // Verificar si se ha pulsado el botón "Iniciar"
            if (e.matches) {
                futInicio.classList.add('d-none');
                futMid.classList.remove('d-none');
            } else {
                futInicio.classList.remove('d-none');
                futMid.classList.add('d-none');
            }
        }
    }

    handleScreenSizeChange(mediaQuery);
    mediaQuery.addEventListener('change', handleScreenSizeChange);

    iniciarBtn.addEventListener('click', function () {
        botonIniciado = true; // Marcar que se ha pulsado el botón "Iniciar"
    });
});


/* *REVELA LA PRUEBA FINAL */
document.addEventListener('DOMContentLoaded', function () {
    const futMid = document.querySelector('.fut-mid');
    const futEnd = document.querySelector('.fut-end');
    const cortarBtn = document.getElementById('cortarBtn'); // Seleccionar el botón "Cortar"

    cortarBtn.addEventListener('click', function () {
        futMid.innerHTML = `
        <div>
        <p>Introduzca correctamente las palabras clave</p>
        </div>
        `;
        futEnd.classList.remove('d-none'); // Quitar la clase d-none de fut-end
    });
});


/* FORMULARIO FINAL */
document.addEventListener('DOMContentLoaded', function () {
    const solucionForm = document.getElementById('solucionForm');

    solucionForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtiene los valores de los campos del formulario
        const campo1 = document.getElementById('campo1').value.trim().toLowerCase();
        const campo2 = document.getElementById('campo2').value.trim().toLowerCase();
        const campo3 = document.getElementById('campo3').value.trim().toLowerCase();
        const campo4 = document.getElementById('campo4').value.trim().toLowerCase();

        // Verifica si las respuestas son correctas
        if (campo1 === 'mutante' && campo2 === 'impuro' && campo3 === 'isengard' && campo4 === 'hacha') {
            // Crea un elemento de imagen
            const futMid = document.querySelector('.fut-mid');
            futMid.innerHTML = ''; // Limpia cualquier contenido anterior
            const imagen = document.createElement('img');
            imagen.src = '../../resources/img/bg-futurama.jpg'; // Ruta de la imagen
            futMid.appendChild(imagen); // Agrega la imagen a fut-mid

            // Muestra el mensaje de felicidades como un h5 dentro de fut-mid
            const felicidades = document.createElement('h5');
            felicidades.textContent = '¡Felicidades! Has encontrado la solución correcta.';
            felicidades.classList.add('text-white'); // Añade la clase text-white
            futMid.appendChild(felicidades);

            // Oculta fut-end
            const futEnd = document.querySelector('.fut-end');
            futEnd.classList.add('d-none');
        } else {
            // Si las respuestas no son correctas, muestra un mensaje de error
            alert('Respuestas incorrectas. Inténtalo de nuevo.');
        }
    });
});