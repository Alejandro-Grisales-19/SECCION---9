
var slider = document.getElementsByClassName("slider")
var sliderimagen = document.getElementById("slider-imagen");

var images = ['imagenes/EDIFICIO.jpg','imagenes/PAISAJE.jpg','imagenes/UNIVERSIDAD.jpg','imagenes/VIA.jpg'];

var currentIndex = 0;

function cambiarimagen(){
    sliderimagen.src = images[currentIndex];
}

function siguiente(){
    currentIndex ++;
    if(currentIndex === images.length){
        currentIndex = 0;
    }
    cambiarimagen();
}

function anterior(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    cambiarimagen();
}

cambiarimagen();

