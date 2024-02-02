``

<body>
    <div id="foco" class="foco">Efecto linterna<br>Rechaza ley SOPA</div>
    

    
    <style type="text/css">
        .foco {
         z-index: 9999999;
         text-align: center;
         font-size: 50px;
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         background: url('/u/1179') center center no-repeat;

        }


    </style>

    <script type="text/javascript">

        window.addEventListener('load', function (event) {

            document.getElementById('foco').addEventListener('mousemove', function (event) {

                this.style.backgroundPosition = (event.clientX - 2048) + 'px ' + (event.clientY - 2048) + 'px';

            }, false);

            document.getElementById('foco').addEventListener('click', function (event) {

                this.style.display = 'none';

            }, false);



        }, true);

    </script>

</body>
``
