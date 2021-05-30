
function test(){
    var validado = true;
    const nombre = document.getElementById("fnick").value;
    const mail = document.getElementById("fmail").value;
    const juego = document.getElementById("fjuego").value;
    var errores = [];
    var aux = -1;

    if(!nombre.match(/^[A-Z a-z 0-9\s]+$/) || nombre.length<3){
        aux++;
        errores[aux] = "Nick Incorrecto! \n";                 
    }
    if(!mail.match(/^([A-Z a-z 0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/) || mail.length < 15){
        aux++;
        errores[aux] = "Mail Incorrecto! \n";     
    } 
    if(!juego.match(/^[A-Z a-z 0-9\s]+$/)){
        aux++;
        errores[aux] = "Ingrese algun juego valido! \n";
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
        aux++;
        errores[aux] = "Seleccione su consola! \n";
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
        aux++;
        errores[aux] = "Seleccione su generacion! \n";
    }  
    
    if (aux>0){
        alert(errores);
        validado = false;
    }
    else{
        confirm("Desea enviar su formulario?")
    }
    return validado;
}
    
var slideIndex = 0;
showSlides(); 
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

    var recoIndex = 1;
    showSlides(recoIndex);
    
    function plus(n) {
        showSlides(recoIndex += n);
    }
    
    function juegoactual(n) {
        showSlides(recoIndex = n);
    }
