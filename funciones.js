
/* Prueba de JS en proyecto */

function inicializarFAQ() {
    
    const preguntas = document.querySelectorAll('.listafaq li p:first-child');

    
    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            
            pregunta.parentElement.classList.toggle('active');
        });
    });
}

inicializarFAQ();