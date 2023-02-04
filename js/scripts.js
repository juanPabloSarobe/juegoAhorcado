const tarjeta1 = document.getElementById('tarjeta1')
const tarjeta2 = document.getElementById('tarjeta2')
const titulo1 = document.getElementById('titulo1')

function ocultar(elemento) {
    elemento.classList.remove('animate__bounceInUp')
    elemento.classList.add('animate__animated', 'animate__bounceOutUp')
    /* elemento.classList.add('animate__bounceOutUp') */
}

function mostrar(elemento) {
    elemento.classList.remove('tarj2')
    elemento.classList.add('animate__animated','animate__bounceInUp','animate__slow','animate__delay-2s')
    
}

function iniciarJuego() {
    ocultar(titulo1)
    ocultar(tarjeta1)
    mostrar(tarjeta2)
    
}