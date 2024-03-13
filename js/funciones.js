//---------------------------------- NAV ------------------------------------------------------------------------------
/* const btnFotografia = document.querySelector('.fotografia');
const btnPeliculas = document.querySelector('.peliculas');

btnFotografia.addEventListener('click', () => {
    console.log('Hola');
})
console.log(btnFotografia);
console.log(btnPeliculas); */

//---------------------------------GALERIA---------------------------------------------------------------------------------
const imgBox = document.getElementById("imgBox");
const img_PopUp = document.getElementById("img_PopUp");
const caruselarray = document.getElementsByClassName("carousel-item");
console.log(caruselarray);

function abrirImg(reference){
    imgBox.style.display = "flex";
    img_PopUp.src = reference
}

function cerrarImg(){
    imgBox.style.display = "none";
}

for (let i = 0; i < caruselarray.length; i++) {
    caruselarray[i].addEventListener("click", (function(index) {
        return function() {
            let imagen = caruselarray[index].querySelector("img");
            console.log(imagen.src);
        };
    })(i));
}

window.onload = function() {
    // Función para ajustar el tamaño del iframe con margen
    function ajustarIframeConMargen() {
      var contenedor = document.querySelector('.galeriaVideo');
      var iframe = contenedor.querySelector('iframe');
      var width;
      var screenWidth = window.innerWidth;
  
      if (screenWidth >= 1024) {
        // Pantalla de escritorio: Restar 320px para el margen total (160px a cada lado)
        width = contenedor.clientWidth - 320;
      } else {
        // Celulares y tablets: Restar 20px para el margen total (10px a cada lado)
        width = contenedor.clientWidth - 20;
      }
  
      var height = (width / 16) * 9; // Proporción 16:9
      iframe.style.width = width + 'px';
      iframe.style.height = height + 'px';
      contenedor.style.margin = '0 10px'; // Agregamos margen de 10px a cada lado
    }
  
    // Llamar a la función cuando la ventana cambie de tamaño
    window.addEventListener('resize', ajustarIframeConMargen);
  
    // Llamar a la función al cargar la página
    ajustarIframeConMargen();
  };


