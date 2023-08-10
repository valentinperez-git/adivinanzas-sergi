let numeroAzar = Math.floor(Math.random()*100) + 1 

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNan(numeroIngresado))
        mensaje.textContent = 'Por favor, introduce un numero vàlido entre 1 y 100'
        return
}

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Felicidades! Has adivinado el numero!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas alto! El nùmero es mayor al que dijiste';
        mensaje.style.color = 'red';   
    } else {
        mensaje.textContent = '¡Màs bajo! El nùmero es menor al que dijiste';
        mensaje.style.color = 'red'
    }