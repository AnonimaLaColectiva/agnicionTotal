let section = document.querySelector('seccion');
let container = document.querySelector('container');

let optionButtons = document.querySelector('option-buttons')
let participanteUno = document.getElementById('participante1')
let participanteDos = document.getElementById('participante2');
let audio1 = new Audio()
let audio2 = new Audio()
let audio3 = new Audio()
let audio4 = new Audio()
let audio5 = new Audio()
let audio6 = new Audio()
let audio7 = new Audio()
let audio8 = new Audio()
let audio9 = new Audio()
let audio10 = new Audio()


const historia1 = function() {
    alert('Has recibido un nuevo correo \n ¿Deseas leerlo?')
    let base1 = document.getElementById('base');
    let indicaciones = document.getElementById('text')
    base1.removeChild(indicaciones)
    let correo = document.createElement('p')
    correo.setAttribute('id', 'correo')
    correo.innerText = 'Hola, \n me comunico contigo porque he encontrado tus datos en el bolso de una mujer. \n Andaba perdida por la zona, tenía la tez pálida, el cabello rapado y repetía tu nombre. Encontré, también, tu número de teléfono, no he podido localizarte porque la operadora dice que el número es inexistente. Ella me ha pedido que te entregue esta carta. Estaré en Calle Bellavista 370, Miraflores 15074.\n Te espero.'
    base1.appendChild(correo)
let contenedor = document.getElementById('contenedor');
let borrarParticipanteUno = document.getElementById('option-buttons').removeChild(participanteUno) 
let borrarParticipanteDos = document.getElementById('option-buttons').removeChild(participanteDos);
let botonTerminarJuego = document.createElement('button')
botonTerminarJuego.setAttribute('id', 'salir')
    botonTerminarJuego.innerText = 'Salir'
let optionButtons = document.getElementById('option-buttons').appendChild(botonTerminarJuego)
document.getElementById('salir').addEventListener('click', salir, true)
let modEstiloSalir = document.getElementById('salir').style.color = 'white'
let botonSiguiente = document.createElement('button')
botonSiguiente.setAttribute('id', 'siguiente')
botonSiguiente.innerText = 'Audio inmersivo'
optionButtons = document.getElementById('option-buttons').appendChild(botonSiguiente)
document.getElementById('siguiente').addEventListener('click', siguiente, true)
let modEstiloSiguiente = document.getElementById('siguiente').style.color = 'white'

let btnGrid = document.getElementById('option-buttons')
btnGrid.style.border = '1px'
btnGrid.style.padding = '10px'

let nota = document.createElement('p')
nota.setAttribute('id', 'nota')
nota.innerText = 'Asegurate que el otro participante esté listo para escuchar el audio. Apretar simultaneamente.'
contenedor.appendChild(nota)


}


participanteUno.addEventListener('click', historia1, true);

//creating a 'next' button event and adding a div 
const siguiente = function() {
   let nota =  document.getElementById('nota')
   
const base = document.getElementById('base');
let correo = document.getElementById('correo')
base.removeChild(correo)
let reproduciendo = document.createElement('h4')
reproduciendo.setAttribute('id', 'reproduciendo')
reproduciendo.innerText = `REPRODUCIENDO...`;
base.appendChild(reproduciendo)
let audioA = document.createElement('div')
audioA.setAttribute('id', 'audioA')
base.appendChild(audioA)
audio1.setAttribute('id', 'audio1')
audio1.src = 'audios/p1/ESTEBAN 1 AUDIO 1.mp3'
audioA.appendChild(audio1)
audio1.play()
let contenedor = document.getElementById('contenedor');
contenedor.removeChild(nota)
let borrarBotonSalirYSiguiente = document.getElementById('option-buttons')
// let botonTerminarJuego = document.getElementById('salir')
let botonSiguiente = document.getElementById('siguiente')
// borrarBotonSalirYSiguiente.removeChild(botonTerminarJuego)
borrarBotonSalirYSiguiente.removeChild(botonSiguiente)
let botonesSiYNo = function() {
    let reproduciendo = document.getElementById('reproduciendo')
    reproduciendo.innerText = 'Selecciona una opción...'
    let botonSi = document.createElement('button')
    botonSi.setAttribute('id','si')
    botonSi.innerText = 'Sí'
    botonSi.style.color = 'whithe'
    botonSi.addEventListener('click', golpeada)
    let botonNo = document.createElement('button')
    botonNo.setAttribute('id', 'no')
    botonNo.innerText = 'No'
    botonNo.style.color = 'white'
    botonNo.addEventListener('click', noGolpeada)
    let optionButtons = document.getElementById('option-buttons')
    optionButtons.appendChild(botonSi)
    optionButtons.appendChild(botonNo)
}
audio1.addEventListener('ended', botonesSiYNo)

let golpeada = function() {
    let base = document.getElementById('base')
    let eliminarIndicacion = document.getElementById('reproduciendo')
    base.removeChild(eliminarIndicacion)
    let reproduciendo = document.createElement('h4')
    reproduciendo.setAttribute('id', 'nuevo-reproduciendo')
    reproduciendo.innerText = 'REPRODUCIENDO...'
    base.appendChild(reproduciendo)
    let contenedor = document.getElementById('contenedor');
        let optionButtons = document.getElementById('option-buttons')
        let botonSi = document.getElementById('si')
        let botonNo = document.getElementById('no')
        optionButtons.removeChild(botonSi)
        optionButtons.removeChild(botonNo)
    let audioA = document.getElementById('audioA')
    audio2.src = 'audios/p1/ESTEBAN 1 AUDIO 2.mp3'
    audioA.appendChild(audio2)
    audio2.play()
    let continuandoConLaHistoria = function() {
        base.removeChild(reproduciendo)
        let pregunta = document.createElement('p')
        pregunta.innerText = '¿Deseas continuar con la experiencia?'
        base.appendChild(pregunta)
        let optionButtons = document.getElementById('option-buttons')
        let botonTerminarJuego = document.createElement('button')
        botonTerminarJuego.setAttribute('id', 'salir')
        botonTerminarJuego.innerText = 'Salir'
        botonTerminarJuego.style.color = 'white'              
        optionButtons.appendChild(botonTerminarJuego)
        const salir = function() {
            let optionButtons = document.getElementById('option-buttons')
            let base1 = document.getElementById('base')
            base1.innerHTML = '<p>Saliste de la experiencia :(  </p>'
            let botonTerminarJuego = document.getElementById('salir')
            optionButtons.removeChild(botonTerminarJuego) 
            let nuevoSiguiente = document.getElementById('siguiente1')
            optionButtons.removeChild(nuevoSiguiente)
            }
        botonTerminarJuego.addEventListener('click', salir)
        let nuevoSiguiente = document.createElement('button')
        nuevoSiguiente.setAttribute('id', 'siguiente1')
        nuevoSiguiente.innerText = 'Siguiente'
        nuevoSiguiente.style.color = 'white'
        optionButtons.appendChild(nuevoSiguiente)
        //el nuevo boton siguiente que lleva al audio 4 
        let siguiente1 = function() {
            base.removeChild(pregunta)
            let reproduciendo = document.createElement('h4')
            reproduciendo.innerText = 'REPRODUCIENDO...'
            base.appendChild(reproduciendo)
            let audioA = document.getElementById('audioA')
        audio4.src = 'audios/p1/ESTEBAN 1 AUDIO 4.mp3'
        audioA.appendChild(audio4)
        audio4.play()
        let final = function() {
            base.removeChild(reproduciendo)
            let optionButtons = document.getElementById('option-buttons')
            // optionButtons.removeChild(botonTerminarJuego)
            optionButtons.removeChild(nuevoSiguiente)
            base.innerText = 'La función ha llegado a su fin.'

        }
        audio4.addEventListener('ended', final)
        }
        
        nuevoSiguiente.addEventListener('click', siguiente1)
      
        
             
        
    }
    audio2.addEventListener('ended', continuandoConLaHistoria)
    
}
//el boton que lleva al audio 5 (final) en caso no haya sido golpeada
let noGolpeada = function() {
    //borrando botones si y no 
    let base = document.getElementById('base')
    let eliminarIndicacion = document.getElementById('reproduciendo')
    base.removeChild(eliminarIndicacion)
    let reproduciendo = document.createElement('h4')
    reproduciendo.setAttribute('id', 'nuevo-reproduciendo')
    reproduciendo.innerText = 'REPRODUCIENDO...'
    base.appendChild(reproduciendo)
        let contenedor = document.getElementById('contenedor');
        let optionButtons = document.getElementById('option-buttons')
        let botonSi = document.getElementById('si')
        let botonNo = document.getElementById('no')
        optionButtons.removeChild(botonSi)
        optionButtons.removeChild(botonNo)
    let audioA = document.getElementById('audioA')
    audio3.src = 'audios/p1/ESTEBAN 1 AUDIO 3.mp3'
    audioA.appendChild(audio3)
    audio3.play()
    
    let continuandoConLaHistoria = function() {
        base.removeChild(reproduciendo)
        let pregunta = document.createElement('p')
        pregunta.innerText = '¿Deseas continuar?'
        base.appendChild(pregunta)
        let optionButtons = document.getElementById('option-buttons')
        let botonTerminarJuego = document.createElement('button')
        botonTerminarJuego.setAttribute('id', 'salir')
        botonTerminarJuego.innerText = 'Salir'
        botonTerminarJuego.style.color = 'white'              
        optionButtons.appendChild(botonTerminarJuego)
        const salir = function() {
            let optionButtons = document.getElementById('option-buttons')
            let base1 = document.getElementById('base')
            base1.innerHTML = '<p>Saliste de la experiencia :(  </p>'
            let botonTerminarJuego = document.getElementById('salir')
            optionButtons.removeChild(botonTerminarJuego) 
            let botonSiguiente = document.getElementById('siguiente2')
            optionButtons.removeChild(botonSiguiente)
        }
        
        botonTerminarJuego.addEventListener('click', salir)
        let nuevoSiguiente = document.createElement('button')
        nuevoSiguiente.setAttribute('id', 'siguiente2')
        nuevoSiguiente.innerText = 'Siguiente'
        nuevoSiguiente.style.color = 'white'
        optionButtons.appendChild(nuevoSiguiente)
        let siguiente2 = function() {
        base.removeChild(pregunta)
        let reproduciendo = document.createElement('h4')
        reproduciendo.setAttribute('id', 'ultimo-rep')
        reproduciendo.innerText = 'REPRODUCIENDO...'
        base.appendChild(reproduciendo)
        let audioA = document.getElementById('audioA')
        audio5.src = 'audios/p1/ESTEBAN 1 AUDIO 4.mp3'
        audioA.appendChild(audio5)
        audio5.play()
        let final = function() {
            base.removeChild(reproduciendo)
            let optionButtons = document.getElementById('option-buttons')
            // optionButtons.removeChild(botonTerminarJuego)
            optionButtons.removeChild(nuevoSiguiente)
            base.innerText = 'La función ha llegado a su fin.'

        }
        audio5.addEventListener('ended', final)
        }
        nuevoSiguiente.addEventListener('click', siguiente2)
     }
    audio3.addEventListener('ended', continuandoConLaHistoria)

}



}

const salir = function() {
    let optionButtons = document.getElementById('option-buttons')
    let base1 = document.getElementById('base')
    base1.innerHTML = '<p>Saliste de la experiencia :(  </p>'
    let botonTerminarJuego = document.getElementById('salir')
    optionButtons.removeChild(botonTerminarJuego) 
    let botonSiguiente = document.getElementById('siguiente')
    optionButtons.removeChild(botonSiguiente)
}

const historia2 = function() {
    let base2 = document.getElementById('base');
    let indicaciones = document.getElementById('text');
    base2.removeChild(indicaciones)
    let premisa = document.createElement('p');
    premisa.setAttribute('id', 'premisa');
    premisa.innerText = 'Imaginarás a una mujer: \n Rapada, \n Nerviosa, \n Una mujer que repite tu nombre constantemente. \n Alguien te ha hablado de ella. \n Por el momento, te cuesta recordar quién es.'
    base2.appendChild(premisa)
    let optionButtons = document.getElementById('option-buttons')
    optionButtons.removeChild(participanteUno)
    optionButtons.removeChild(participanteDos)
    let botonTerminarJuego = document.createElement('button')
    botonTerminarJuego.setAttribute('id', 'salir')
    botonTerminarJuego.innerText = 'Salir'
    optionButtons.appendChild(botonTerminarJuego)
    botonTerminarJuego.addEventListener('click', salir, true)
    botonTerminarJuego.style.color = 'white'
    let botonSiguiente = document.createElement('button')
    botonSiguiente.setAttribute('id', 'siguiente')
    botonSiguiente.innerText = 'Audio inmersivo'
    optionButtons.appendChild(botonSiguiente)
    botonSiguiente.style.color = 'white'
    let btnGrid = document.getElementById('option-buttons')
btnGrid.style.border = '1px'
btnGrid.style.padding = '10px'

let nota = document.createElement('p')
nota.setAttribute('id', 'nota')
nota.innerText = 'Asegurate que el otro participante esté listo para escuchar el audio. Apretar simultaneamente.'
contenedor.appendChild(nota)
    botonSiguiente.addEventListener('click', siguienteParticipante2, true)
}


participanteDos.addEventListener('click', historia2)
//a next button even and adding a div to it 
const siguienteParticipante2 = function() {
    let nota =  document.getElementById('nota')

    let base2 = document.getElementById('base');
    let premisa = document.getElementById('premisa')
    base2.removeChild(premisa)
    let reproduciendoParticipante2 = document.createElement('h4');
    reproduciendoParticipante2.setAttribute('id', 'rep-2');
    reproduciendoParticipante2.innerText = 'REPRODUCIENDO...'
    base2.appendChild(reproduciendoParticipante2)
    let audioB = document.createElement('div')
    audioB.setAttribute('id', 'audioB')
    base2.appendChild(audioB)
    audio6.src = 'audios/p2/ESTEBAN PRIMA AUDIO 1.mp3'
    audioB.appendChild(audio6)
    audio6.play()
    let contenedor2 = document.getElementById('contenedor');
    contenedor2.removeChild(nota)
    let borrarBotonSalirYSiguiente = document.getElementById('option-buttons')
    let botonTerminarJuego2 = document.getElementById('salir')
    let botonSiguiente = document.getElementById('siguiente')
    //borrarBotonSalirYSiguiente.removeChild(botonTerminarJuego2)
    borrarBotonSalirYSiguiente.removeChild(botonSiguiente)
    //creando botones si y no
    let botonesSiYNo2 = function() {
        borrarBotonSalirYSiguiente.removeChild(botonTerminarJuego2)
        let reproduciendoParticipante2 = document.getElementById('rep-2')
        reproduciendoParticipante2.innerText = 'Selecciona una opción...'
        let botonSi = document.createElement('button')
        botonSi.setAttribute('id','si')
        botonSi.innerText = 'Sí'
        botonSi.style.color = 'white'
        botonSi.addEventListener('click', golpeada2)
        let botonNo = document.createElement('button')
        botonNo.setAttribute('id', 'no')
        botonNo.innerText = 'No'
        botonNo.style.color = 'white'
        botonNo.addEventListener('click', noGolpeada2)
        let optionButtons = document.getElementById('option-buttons')
        optionButtons.appendChild(botonSi)
        optionButtons.appendChild(botonNo)
    }
    audio6.addEventListener('ended', botonesSiYNo2) 
    //evento golpeada almacena audio 7 y 9
    //creando funcion para el evento golpeada 
    let golpeada2 = function() {
        let base2 = document.getElementById('base')
        let eliminarIndicacion2 = document.getElementById('rep-2')
        base2.removeChild(eliminarIndicacion2)
        let reproduciendoParticipante2 = document.createElement('h4')
        reproduciendoParticipante2.setAttribute('id', 'nuevo-rep2')
        reproduciendoParticipante2.innerHTML = 'REPRODUCIENDO...'
        base2.appendChild(reproduciendoParticipante2)
        //eliminando botones si y no 
        let contenedor2 = document.getElementById('contenedor')
        let optionButtons = document.getElementById('option-buttons')
        let botonSi = document.getElementById('si')
        let botonNo = document.getElementById('no')
        optionButtons.removeChild(botonSi)
        optionButtons.removeChild(botonNo)
        //agregando audio 7 
        let audioB = document.getElementById('audioB')
        audio7.src = 'audios/p2/ESTEBAN PRIMA AUDIO 2.mp3'
        audioB.appendChild(audio7)
        audio7.play()
        //continuando con la historia agrega el audio 9 
        let continuandoConLaHistoria2 = function() {
            base2.removeChild(reproduciendoParticipante2)
            let pregunta2 = document.createElement('p')
            pregunta2.innerText = '¿Deseas continuar?'
            base2.appendChild(pregunta2)
            let optionButtons = document.getElementById('option-buttons')
            //agregando botones de salir y siguiente
            //let botonTerminarJuego2 = document.createElement('button')
            //botonTerminarJuego2.setAttribute('id', 'salir')
            //botonTerminarJuego2.innerText = 'Salir'
            //botonTerminarJuego2.style.color = 'white'
            //optionButtons.appendChild(botonTerminarJuego2)
            const salir2 = function() {
                let optionButtons = document.getElementById('option-buttons')
                let base2 = document.getElementById('base')
                base2.innerHTML = '<p>Saliste de la experiencia :(</p>'
                let botonTerminarJuego2 = document.getElementById('salir')
                optionButtons.replaceChild(botonTerminarJuego2)
                let nuevoSiguiente = document.getElementById('siguienteB')
                optionButtons.removeChild(nuevoSiguiente)
            }
            botonTerminarJuego2.addEventListener('click', salir2)
            //boton siguiente que lleva al audio 9 
            let nuevoSiguiente = document.createElement('button')
            nuevoSiguiente.setAttribute('id', 'siguienteB')
            nuevoSiguiente.innerText = 'Siguiente'
            nuevoSiguiente.style.color = 'white'
            optionButtons.appendChild(nuevoSiguiente)
            let siguienteB = function() {
                base2.removeChild(pregunta2)
                let reproduciendo = document.createElement('h4')
                reproduciendo.innerText = 'REPRODUCIENDO...'
                base2.appendChild(reproduciendo)
                let audioB = document.getElementById('audioB')
                audio9.src = 'audios/p2/ESTEBAN PRIMA AUDIO 4.mp3'
                audioB.appendChild(audio9)
                audio9.play()
                let final2 = function() {
                    base2.removeChild(reproduciendo)
                    let optionButtons = document.getElementById('option-buttons')
                    // optionButtons.removeChild(botonTerminarJuego2)
                    optionButtons.removeChild(nuevoSiguiente)
                    base2.innerText = 'La función ha llegado a su fin'
                }
                audio9.addEventListener('ended', final2)
            }
            nuevoSiguiente.addEventListener('click', siguienteB)
        }
        audio7.addEventListener('ended', continuandoConLaHistoria2)

    }
    let noGolpeada2 = function() {
        //borrando botones si y no 
        let base2 = document.getElementById('base')
        let eliminarIndicacion2 = document.getElementById('rep-2')
        base2.removeChild(eliminarIndicacion2)
        let reproduciendoParticipante2 = document.createElement('h4')
        reproduciendoParticipante2.innerText = 'REPRODUCIENDO...'
        base2.appendChild(reproduciendoParticipante2)
        let contenedor = document.getElementById('contenedor')
        let optionButtons = document.getElementById('option-buttons')
        let botonSi = document.getElementById('si')
        let botonNo = document.getElementById('no')
        optionButtons.removeChild(botonSi)
        optionButtons.removeChild(botonNo)
        let audioB = document.getElementById('audioB')
        //audio 8 y 10 
        audio8.src = 'audios/p2/ESTEBAN PRIMA AUDIO 3.mp3'
        audioB.appendChild(audio8)
        audio8.play()
        let continuandoConLaHistoria2 = function() {
            base2.removeChild(reproduciendoParticipante2)
            let pregunta2 = document.createElement('p')
            pregunta2.innerText = '¿Deseas continuar?'
            base2.appendChild(pregunta2)
            let optionButtons = document.getElementById('option-buttons')
            //let botonTerminarJuego2 = document.createElement('button')
            //botonTerminarJuego2.innerText = 'Salir'
            //botonTerminarJuego2.style.color = 'white'
            //optionButtons.appendChild(botonTerminarJuego2)
            const salir3 = function() {
                let optionButtons = document.getElementById('option-buttons')
                let base2 = document.getElementById('base')
                base2.innerHTML = '<p>Saliste de la experiencia :(</p>'
                let botonTerminarJuego2 = document.getElementById('salir')
                // optionButtons.removeChild(botonTerminarJuego2)
                let botonSiguiente = document.getElementById('siguienteB2')
                optionButtons.removeChild(botonSiguiente)
            }
            botonTerminarJuego2.addEventListener('click', salir3)
            let nuevoSiguiente = document.createElement('button')
            nuevoSiguiente.setAttribute('id', 'siguienteB2')
            nuevoSiguiente.innerText = 'Siguiente'
            nuevoSiguiente.style.color = 'white'
            optionButtons.appendChild(nuevoSiguiente)
            let siguienteB2 = function() {
                base2.removeChild(pregunta2)
                let reproduciendo = document.createElement('h4')
                reproduciendo.setAttribute('id', 'nuevo-rep3')
                reproduciendo.innerText = 'REPRODUCIENDO...'
                base2.appendChild(reproduciendo)
                let audioB = document.getElementById('audioB')
                audio10.src = 'audios/p2/ESTEBAN PRIMA AUDIO 4.mp3'
                audioB.appendChild(audio10)
                audio10.play()
                let final2 = function() {
                    base2.removeChild(reproduciendo)
                    let optionButtons = document.getElementById('option-buttons')
                    // optionButtons.removeChild(botonTerminarJuego2)
                    optionButtons.removeChild(nuevoSiguiente)
                    base2.innerText = 'La función ha llegado a su fin.'
                }
                audio10.addEventListener('ended', final2)
            }
            nuevoSiguiente.addEventListener('click', siguienteB2)
        }
        audio8.addEventListener('ended', continuandoConLaHistoria2)
    }
}

const ultimoSalir = function () {
    let optionButtons = document.getElementById('option-buttons')
    let base2 = document.getElementById('base')
    base2.innerHTML = '<p>Salite de la experiencia :(</p>'
    let botonTerminarJuego2 = document.getElementById('salir')
    optionButtons.removeChild(botonTerminarJuego2)
    let botonSiguiente = document.getElementById('siguiente')
    optionButtons.removeChild(botonSiguiente)
}
