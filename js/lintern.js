class Linterna{
  constructor(cont, id, radio){
    this.fondo = document.getElementById(cont);
    this.luz = document.getElementById(id); 
    this.radio = radio+"px";
    this.encendida = false;
    this.fondo.addEventListener('mousedown', this);
  }
handleEvent(ev){
   switch (ev.type){
     case "mousedown":
       this.toggle(ev);
      break;
     case "mousemove":
       this.mover(ev);
  }
} 
toggle(ev){
   if(this.encendida){
     this.encendida = false;
     this.luz.style.width = "0px";
     this.luz.style.height= "0px"; 
     this.fondo.removeEventListener("mousemove", this);
     }else{
     this.encendida = true;
     this.luz.style.width = this.radio;
     this.luz.style.height= this.radio;
     this.luz.style.filter = "blur(15px)";
     this.fondo.addEventListener("mousemove", this); 
     this.luz.style.cursor = 'help';
     this.mover(ev);
  }
} 
mover(ev){
   let pX = ev.clientX - this.luz.clientWidth/2 - this.fondo.offsetLeft;
  let pY = ev.clientY - this.luz.clientHeight/2 - this.fondo.offsetTop; 
   this.luz.style.left = pX + "px";
   this.luz.style.top =  pY + "px";
  }
}
let linterna = new Linterna('pizarra','linterna', 200);


// Función para verificar el tamaño de la pantalla y mostrar el mensaje
function checkScreenSize() {
  // Definir el tamaño mínimo en píxeles para ser considerado como 'responsive'
  var minWidth =  768; // Por ejemplo,  768px es comúnmente usado como punto de corte para dispositivos móviles

  // Obtener el ancho actual de la ventana
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Verificar si el ancho es menor al mínimo permitido
  if (width < minWidth) {
      // Mostrar el mensaje de advertencia
      alert('¡Cuidado, no es responsive!');
  }
}

// Llamar a la función cuando se carga la página
window.onload = checkScreenSize;

// También llamar a la función cada vez que cambia el tamaño de la ventana
window.onresize = checkScreenSize;