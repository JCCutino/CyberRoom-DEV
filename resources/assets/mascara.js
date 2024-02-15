'use strict'

document.addEventListener('DOMContentLoaded', function(){
    let clickCount = 0;
    document.getElementById('enmascarado').addEventListener('click', function () {
        clickCount++;
        if(clickCount>=10){
        this.classList.toggle('active');
        document.getElementById('enmascarado2').classList.toggle('active');
        }
    });
    document.getElementById('enmascarado2').addEventListener('click', function () {
        clickCount++;
        if(clickCount>=20){
        this.classList.toggle('active');
        document.getElementById('enmascarado3').classList.toggle('active');
        }
    });
    document.getElementById('enmascarado3').addEventListener('click', function () {
        clickCount++;
        if(clickCount>=30){
        this.classList.toggle('active');
        document.getElementById('enmascarado4').classList.toggle('active');
        }
    });
    document.getElementById('enmascarado4').addEventListener('click', function () {
        clickCount++;
        if(clickCount>=40){
        this.classList.toggle('active');
        document.getElementById('revelacion').classList.toggle('active');
        }
    });
});