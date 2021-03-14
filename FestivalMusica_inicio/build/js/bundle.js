//Desarrollando  SCROLLNAV

document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    navegacionFija(); 
});

function navegacionFija() {

    const barra = document.querySelector('.header');

    //Registrar Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        //console.log(entries[0]);
        if(entries[0].isIntersecting) {
            //console.log('Elemento Visible');
            barra.classList.remove('fijo');
        } else {
            //console.log('El Elemento no es visible');
            barra.classList.add('fijo');
          }    
    });

    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));

}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
        
            //console.log(e.target.attributes.href.value);

            seccion.scrollIntoView( {
                behavior: 'smooth'
            });

        });
    });

}







//console.log('Nuevo Archivo Bundle LISTO');


document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
} );

function crearGaleria() {
    const galeria =  document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 12; i++ ) {
         const imagen = document.createElement('IMG');
         imagen.src = `build/img/thumb/${i}.webp`;
         imagen.dataset.imagenId = i;         
         
         //Llamar a la funcion de mostrar imagen en Grande
           imagen.onclick = mostrarImagen;

         const lista = document.createElement('LI');
         lista.appendChild(imagen);
         galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    // Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    //console.log(imagen);
    overlay.classList.add('overlay'); //Creamos una clase nueva para CSS

    // Cuando se da click, cerrar la imagen
    overlay.onclick = function() {
        overlay.remove();
    }

    // Botón para cerrar la Imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // Cuando se presiona, cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen);


    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
} 

