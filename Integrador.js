
function test(){
    var validado = true;
    const nombre = document.getElementById("fnick").value;
    const mail = document.getElementById("fmail").value;
    const juego = document.getElementById("fjuego").value;

    if(!nombre.match(/^[A-Z a-z 0-9\s]+$/) || nombre.length<3){
        alert("Nick Incorrecto!");
        document.getElementById("fnick").focus();       
        return false;
           
    }
    if(!mail.match(/^([A-Z a-z 0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/) || mail.length < 15){
        alert("Mail Incorrecto!");
        document.getElementById("fmail").focus();
        return false;
    } 
    if(!juego.match(/^[A-Z a-z 0-9\s]+$/)){
        alert("Ingrese algun juego valido!");
        document.getElementById("fjuego").focus();
        return false;
    }
    
    const formulario = document.getElementById('nose');
    var c = false;
    for (i = 0 ; i < formulario.tipo.length;i++){
        if(formulario.tipo[i].checked){
            formulario.tipo.checked;   
            c = true;
            break;
        }
    }  
    if(!c){
        alert(`Seleccione su consola ${nombre}!`);
        return false;
    }
    
    const formulario2 = document.getElementById('nose');
    var c = false;
    for (i = 0 ; i < formulario2.gene.length;i++){
        if(formulario2.gene[i].checked){
            formulario2.gene.checked;   
            c = true;
            break;
        }
    }  
    if(!c){
        alert(`Seleccione su generacion ${nombre}!`);
        return false;
    }   
    return validado;
}
  
    var recoIndex = 1;
    recomend(recoIndex);
    
    function plus(n) {
      recomend(recoIndex += n);
    }
    
    function juegoactual(n) {
      recomend(recoIndex = n);
    }
    
    function recomend(n) {
      var i;
      var jue = document.getElementsByClassName("aka");
      var sig = document.getElementsByClassName("dol");
      if (n > jue.length) {recoIndex = 1}    
      if (n < 1) {recoIndex = jue.length}
      for (i = 0; i < jue.length; i++) {
        jue[i].style.display = "none";  
      }
      for (i = 0; i < sig.length; i++) {
        sig[i].className = sig[i].className.replace(" active", "");
      }
      jue[recoIndex-1].style.display = "block";  
      sig[recoIndex-1].className += " active";
    }
