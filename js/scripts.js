const tarjeta1 = document.getElementById('tarjeta1')
const tarjeta2 = document.getElementById('tarjeta2')
const titulo1 = document.getElementById('titulo1')
const leyenda = document.getElementById('leyenda')
const pantallaPrincipal = document.getElementById('pantallaPrincipal')
const tituloInputPalabra = document.getElementById('tituloInputPalabra')

let palabra

function ocultar(elemento) {
    elemento.classList.remove('animate__bounceInUp','animate__delay-2s')
    elemento.classList.add('animate__animated', 'animate__bounceOutUp','animate__fast')
    /* elemento.classList.add('animate__bounceOutUp') */
}

function mostrar(elemento) {
    elemento.classList.remove('ocultar')
    elemento.classList.add('animate__animated','animate__slow','animate__bounceInUp','animate__delay-2s')
    
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


function iniciarJuego(valor){
    console.log(valor)
    if (valor != '' && valor != null) {
      palabra = valor.toUpperCase()

    ocultar(tarjeta2,"'animate__fast'")
    mostrar(pantallaPrincipal)  

    }else{
        tituloInputPalabra.classList.add('animate__animated','animate__shakeX')
        
        const myTimeout = setTimeout(timmerBorraClase, 1500);

        function timmerBorraClase() {
            tituloInputPalabra.classList.remove('animate__animated','animate__shakeX')
        }
    }

     
}

function enviarLetra(letra) {
    console.log(letra)
    
}


/* para dividir el string en un array
const str = 'book';

console.log(str.split('')); // [ 'b', 'o', 'o', 'k' ] 

cambiar CSS style
const sample = document.getElementById("myid"); // using CONST

// change css style
sample.style.color = 'red'; // Changes color, adds style property.

// or (not recomended)
sample.style = "color: red"; //Replaces all style properties. NOT RECOMENDED


*/