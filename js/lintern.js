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
     this.fondo.addEventListener("mousemove", this); 
     this.luz.style.cursor = 'none';
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
