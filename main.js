$(document).ready(function() {
    $('.enlaces').click(function() {
        var valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.filtro').show('.1000');

        } else {
            $('.filtro').not('.' + valor).hide('1000');
            $('.filtro').filter('.' + valor).show('1000');

        }
        $('ul .enlaces').click(function() {
            $(this).addClass('activo').siblings().removeClass('activo');
        });

    });
});



const typed = new Typed('.typed', {
    strings: [
        '<i class="letras">Proactivo</i>',
        '<i class="letras">Apasionado de las nuevas Tecnologías</i>',
        '<i class="letras">Gran capacidad de trabajo en equipo</i>',
        '<i class="letras">Siempre con ganas de aprender y seguir mejorando</i>',

    ],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});


var d = new Date();
var month = new Array(12);
month[0] = 'Enero';
month[1] = 'Febrero';
month[2] = 'Marzo';
month[3] = 'Abril';
month[4] = 'Mayo';
month[5] = 'Junio';
month[6] = 'Julio';
month[7] = 'Agosto';
month[8] = 'Septiembre';
month[9] = 'Octubre';
month[10] = 'Noviembre';
month[11] = 'Diciembre';
var todaysDate = +d.getDate() + ' de ' + month[d.getUTCMonth()] + ' del ' + d.getUTCFullYear();
document.getElementById('fechahoy').innerHTML = " " + todaysDate;