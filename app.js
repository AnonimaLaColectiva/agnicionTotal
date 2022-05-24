let section = document.querySelector('seccion');
let container = document.querySelector('container');

let optionButtons = document.querySelector('option-buttons')
let participanteUno = document.getElementById('participante1')
let participanteDos = document.getElementById('participante2');
let historiaLevelUno = 0
let historiaLevelDos = 0
let no_of_clicks = 0

const historia1 = function() {
    alert('Has recibido un nuevo correo \n ¿Deseas leerlo?')
    let base1 = document.getElementById('base');
    if(historiaLevelUno == 0) {
    base1.innerHTML = '<p> Estimado Esteban...</p>'
    }

let contenedor = document.getElementById('contenedor');
let borrarParticipanteUno = document.getElementById('option-buttons').removeChild(participanteUno) 
let borrarParticipanteDos = document.getElementById('option-buttons').removeChild(participanteDos);
let botonTerminarJuego = document.createElement('button')
botonTerminarJuego.setAttribute('id', 'salir')
    botonTerminarJuego.innerText = 'Salir'
let optionButtons = document.getElementById('option-buttons').appendChild(botonTerminarJuego)
document.getElementById('salir').addEventListener('click', salir, true)
let modEstiloSalir = document.getElementById('salir').style.color = 'black'
let botonSiguiente = document.createElement('button')
botonSiguiente.setAttribute('id', 'siguiente')
botonSiguiente.innerText = 'Siguiente'
optionButtons = document.getElementById('option-buttons').appendChild(botonSiguiente)
document.getElementById('siguiente').addEventListener('click', siguiente, true)
let modEstiloSiguiente = document.getElementById('siguiente').style.color = 'black'

let btnGrid = document.getElementById('option-buttons')
btnGrid.style.border = '1px'
btnGrid.style.padding = '10px'

}


const esteban1 = participanteUno.addEventListener('click', historia1, true);

//creating a 'next' button event
const contenidoHistoria = ['texto 1', 'texto 2', 'texto 3', 'texto 4', 'texto 5']
const siguiente = function() {
const base = document.getElementById('base');
base.innerHTML = `<p> ${contenidoHistoria[no_of_clicks]}</p>`
no_of_clicks == (contenidoHistoria.length - 1) ? no_of_clicks = 0 : no_of_clicks = no_of_clicks + 1;

}

const salir = function() {
    let base1 = document.getElementById('base')
    base1.innerHTML = '<p>Saliste del juego :(  </p>'
    let botonTerminarJuego = document.getElementById('salir')
    let borrarSalir = document.getElementById('option-buttons').removeChild(botonTerminarJuego) 
    let botonSiguiente = document.getElementById('siguiente')
let borrarSiguiente = document.getElementById('option-buttons').removeChild(botonSiguiente);
}


const historia2 = function () {
    alert('funciona')
    let base2 = document.getElementById('base');
    if(historiaLevelUno == 0) {
    base2.innerHTML = '<p> algo ocurre</p>'
}
let contenedor = document.getElementById('contenedor');
let borrarParticipanteUno = document.getElementById('option-buttons').removeChild(participanteUno) 
let borrarParticipanteDos = document.getElementById('option-buttons').removeChild(participanteDos);
let botonTerminarJuego = document.createElement('button')
botonTerminarJuego.setAttribute('id', 'salir')
    botonTerminarJuego.innerText = 'Salir'
let optionButtons = document.getElementById('option-buttons').appendChild(botonTerminarJuego)
document.getElementById('salir').addEventListener('click', salir2, true)
let modEstiloSalir = document.getElementById('salir').style.color = 'black'
let botonSiguiente = document.createElement('button')
botonSiguiente.setAttribute('id', 'siguiente')
botonSiguiente.innerText = 'Siguiente'
optionButtons = document.getElementById('option-buttons').appendChild(botonSiguiente)
document.getElementById('siguiente').addEventListener('click', siguiente2, true)
let modEstiloSiguiente = document.getElementById('siguiente').style.color = 'black'

let btnGrid = document.getElementById('option-buttons')
btnGrid.style.border = '1px'
btnGrid.style.padding = '10px'

}

const esteban2 = participanteDos.addEventListener('click', historia2, true)

const contenidoHistoria2 = ['texto 0', 'texto 1', 'texto 2', 'texto 4', 'texto 5']
const siguiente2 = function() {
const base2 = document.getElementById('base');
base2.innerHTML = `<p> ${contenidoHistoria2[no_of_clicks]}</p>`
no_of_clicks == (contenidoHistoria2.length - 1) ? no_of_clicks = 0 : no_of_clicks = no_of_clicks + 1;


}

const salir2 = function() {
    let base1 = document.getElementById('base')
    base1.innerHTML = '<p>Saliste del juego :(  </p>'
    let botonTerminarJuego = document.getElementById('salir')
    let borrarSalir = document.getElementById('option-buttons').removeChild(botonTerminarJuego) 
    let botonSiguiente = document.getElementById('siguiente')
let borrarSiguiente = document.getElementById('option-buttons').removeChild(botonSiguiente);
}
