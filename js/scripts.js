const tarjeta1 = document.getElementById('tarjeta1')
const tarjeta2 = document.getElementById('tarjeta2')
const titulo1 = document.getElementById('titulo1')
const leyenda = document.getElementById('leyenda')
const pantallaPrincipal = document.getElementById('pantallaPrincipal')
const tituloInputPalabra = document.getElementById('tituloInputPalabra')
const ahorcado = document.getElementById('ahorcado')
const seccionLetras = document.getElementById('seccionLetras')
const leyendaLoss = document.getElementById('leyendaLoss')
const tarjetaLoss = document.getElementById('tarjetaLoss')
const tarjetaWin = document.getElementById('tarjetaWin')

let palabra
let arrPalabra = []
let arrAdivinado = []
let adivinado
let vidas = 0

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
    recortarPalabra()

    }else{
        tituloInputPalabra.classList.add('animate__animated','animate__shakeX')
        
        const myTimeout = setTimeout(timmerBorraClase, 1500);

        function timmerBorraClase() {
            tituloInputPalabra.classList.remove('animate__animated','animate__shakeX')
        }
    }

     
}
//ACA ya tengo la palabra

function recortarPalabra(){
    arrPalabra = palabra.split('')

    console.log(arrPalabra)
    let arrayLength = arrPalabra.length;
    let temp;
        for (let i = 0; i < arrayLength; i++) {
        temp = document.createElement('div');
        temp.className = 'resultado';
        temp.id = i
        temp.innerHTML = '_';
        document.getElementById('acertijo').appendChild(temp);
    }
}

function enviarLetra(letra) {
        
    if (letra != '' && letra != null) {
        
        if (arrPalabra.includes(letra)) {
            arrAdivinado = []
            for (let i = 0; i < arrPalabra.length; i++) {
                
                if (arrPalabra[i] == letra) {
                    document.getElementById(i).innerHTML = letra
                }
                arrAdivinado.push(document.getElementById(i).innerHTML)
            }
            adivinado = arrAdivinado.join('')
            
            
        }else{
            
            vidas++
            let direccion = "url('../res/img/a" + vidas+".webp')"
            ahorcado.style.backgroundImage = direccion
            ahorcado.classList.add('animate__animated','animate__fadeIn')
            
            const myTimeout = setTimeout(timmerBorraFadeIn, 1500);

            function timmerBorraFadeIn() {
            ahorcado.classList.remove('animate__animated','animate__fadeIn')
        }
            
        }

    }
    verificaResultado()
}

function verificaResultado() {
    if (adivinado === palabra) {
        disparaFuegos()
        esconderTeclado()
        win()
    }else if ( vidas === 8){
       esconderTeclado()
        leyendaLoss.innerHTML = 'La palabra era: ' + palabra
        loss()
    }
    
}

function esconderTeclado(){
    seccionLetras.classList.add ('esconder')
}
function win() {
    mostrar(tarjetaWin)
}

function loss() {
    mostrar(tarjetaLoss)
}
function reiniciar() {
    location.reload()
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