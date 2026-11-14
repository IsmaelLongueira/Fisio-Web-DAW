//Archivo para darle funcionalidad a la web
// Seleccionamos todas las tarjetas del HTML
const tarjetas = document.querySelectorAll('.tarjeta');

// Recorremos cada tarjeta una por una
tarjetas.forEach(function(tarjeta) {
    
    // Añadimos un evento al hacer clic en la tarjeta
    tarjeta.addEventListener('click', function() {
        
        // Primero quitamos el color resaltado de todas las tarjetas
        tarjetas.forEach(function(t) {
            t.style.backgroundColor = '#f8f9fa';
        });

        // Cambiamos el color de fondo solo de la tarjeta pulsada
        tarjeta.style.backgroundColor = '#caf0f8';

        // Obtenemos el texto del título (h3) de esa tarjeta y mostramos un aviso
        const titulo = tarjeta.querySelector('h3').textContent;
        alert('Has seleccionado: ' + titulo);
    });

}); 