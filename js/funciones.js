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

