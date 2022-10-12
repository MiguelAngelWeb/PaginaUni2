
/*Menu*/
(function () {
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = () => {
        listElements.forEach(element => {
            element.addEventListener('click', () => {


                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if (subMenu.clientHeight === 0) {
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = () => {
        listElements.forEach(element => {

            if (element.children[1].getAttribute('style')) {
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', () => {

        if (window.innerWidth > 800) {
            deleteStyleHeight();
            if (list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        } else {
            addClick();
        }
    });

    if (window.innerWidth <= 800) {
        addClick();
    }

    menu.addEventListener('click', () => list.classList.toggle('menu__links--show'));



})();

/*Menu*/


/*Progressbar*/

let progressbar = document.querySelector('.progressbar');

function ScrollProgressBar() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let windowHeight = scrollHeight - clientHeight;
    let porcentaje = scrollTop / windowHeight * 100;

    progressbar.style.width = porcentaje + '%';
}

window.addEventListener('scroll', ScrollProgressBar);

/*Progressbar*/



/* Texto que cambia*/
const typed = new Typed('.typed', {
    strings: ['<i class="palabra"> la salud</i>',
        '<i class="palabra">el mundo</i>',
        '<i class="palabra">la vida</i>']

    ,
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
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
/* Texto que cambia*/




const encabezados = document.querySelectorAll('.encabezado');
const observer = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const id = '#' + entrada.target.id;
            history.pushState({}, '', id);

        }
    })
}, {
    threshold: 1,
    rootMargin: '0px 0px -50% 0px'
});

encabezados.forEach(encabezado => {
    observer.observe(encabezado);
})












