const tarjeta1 = document.getElementById('tarjeta1')
const tarjeta2 = document.getElementById('tarjeta2')
const titulo1 = document.getElementById('titulo1')
const leyenda = document.getElementById('leyenda')
let palabra

function ocultar(elemento) {
    elemento.classList.remove('animate__bounceInUp')
    elemento.classList.add('animate__animated', 'animate__bounceOutUp')
    /* elemento.classList.add('animate__bounceOutUp') */
}

function mostrar(elemento) {
    elemento.classList.remove('ocultar')
    elemento.classList.add('animate__animated','animate__bounceInUp','animate__slow','animate__delay-2s')
    
}

function prepararJuego() {
    ocultar(titulo1)
    ocultar(tarjeta1)
    mostrar(tarjeta2)
    
}
function verificaLetra(valor) {
    
    if(!allLetter(valor)){
        leyenda.classList.remove('leyOff')
        leyenda.classList.add('animate__animated','animate__shakeX')
        
        const myTimeout = setTimeout(timmerBorraClase, 1500);

        function timmerBorraClase() {
            leyenda.classList.remove('animate__animated','animate__shakeX')
        }
      return document.getElementById('palabra').value = valor.slice(0, -1)  
    }
    
    
}


function iniciarJuego(){
     palabra = document.getElementById('palabra').value.toUpperCase()

    ocultar(tarjeta2)
}



/* para dividir el string en un array
const str = 'book';

console.log(str.split('')); // [ 'b', 'o', 'o', 'k' ] */