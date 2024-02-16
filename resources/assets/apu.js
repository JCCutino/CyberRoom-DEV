'use strict'

document.addEventListener('DOMContentLoaded', function(){
    let clickCount = 0;
    document.getElementById('apu').addEventListener('click', function () {
        clickCount++;
        if(clickCount===1){
            document.getElementById('mensaje1').classList.toggle('active');
        }
    });
    document.getElementById('pasar').addEventListener('click', function () {
        clickCount++;
        if(clickCount===2){
            document.getElementById('mensaje1').classList.toggle('active');
            document.getElementById('mensaje2').classList.toggle('active');
        }
    });
    document.getElementById('pasar1').addEventListener('click', function () {
        clickCount++;
        if(clickCount===3){
            document.getElementById('mensaje2').classList.toggle('active');
            document.getElementById('mensaje3').classList.toggle('active');
            document.getElementById('apu').classList.toggle('active');
            document.getElementById('apu2').classList.toggle('active');
        }
    });
    document.getElementById('pasar2').addEventListener('click', function () {
        clickCount++;
        if(clickCount===4){
            document.getElementById('mensaje3').classList.toggle('active');
            document.getElementById('mensaje4').classList.toggle('active');
        }
    });

    document.getElementById("buttonsubmit").addEventListener('click', function(){
        let correcto="6JP5EAQKFE1H";
        let valor_introducido=document.getElementById("codigo").value;
        if(correcto===valor_introducido){
            document.getElementById('apu2').classList.toggle('active');
            document.getElementById('apu3').classList.toggle('active');
            document.getElementById('mensaje4').classList.toggle('active');
            document.getElementById('mensaje6').classList.toggle('active');
        }else{
            document.getElementById('mensaje4').classList.toggle('active');
            document.getElementById('mensaje5').classList.toggle('active');
        }
    });

    document.getElementById("buttonsubmit2").addEventListener('click', function(){
        let correcto="6JP5EAQKFE1H";
        let valor_introducido=document.getElementById("codigo2").value;
        if(correcto===valor_introducido){
            document.getElementById('apu2').classList.toggle('active');
            document.getElementById('apu3').classList.toggle('active');
            document.getElementById('mensaje5').classList.toggle('active');
            document.getElementById('mensaje6').classList.toggle('active');
        }
    });
});