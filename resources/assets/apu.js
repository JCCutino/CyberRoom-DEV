'use strict'

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('apu').addEventListener('click', function () {
        document.getElementById('mensaje').classList.toggle('active');
    });
});