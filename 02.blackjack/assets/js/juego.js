// Patron Modulo en Javascript

const miModulo = (() => {
    'use strict';

    let baraja = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias del HTML

    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosSmall = document.querySelectorAll('small');

    // Función que inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        baraja = crearBaraja();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosSmall.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    // Función para generar una nueva baraja, luego la ordena aleatoriamente utilizando _.shuffle
    // (_.shuffle se obtiene de la libreria de terceros underscore, https://underscorejs.org/ )
    const crearBaraja = () => {

        baraja = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                baraja.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                baraja.push(esp + tipo);
            }
        }

        return _.shuffle(baraja);

    }

    // Función para pedir una carta de la baraja
    // Si el arreglo ya no tiene elementos se dispara el throw

    const pedirCarta = () => {

        if (baraja.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return baraja.pop();

    }

    // Función retorna el valor de la carta. 
    // Se evalua con la funcion isNaN si es o no un número. 
    // Al multiplicar el valor por 1 se convierte un string a numero. 
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10 :
            valor * 1;

    }

    // Turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = (carta, turno) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosSmall[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];

    }

    const crearCarta = (carta, turno) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }

    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana!');
            } else if (puntosMinimos > 21) {
                alert('Computadora Gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador gana');
            } else {
                alert('Computadora gana');
            }

        }, 100);

    }

    // turno de la computadora
    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();

    }

    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();

        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        // determinar si el jugador perdio, punteo es > 21
        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('21, genial');
            btnPedir.disabled = true;
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
        }

    });

    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);

    });

    // btnNuevo.addEventListener('click', () => {
    //     inicializarJuego();
    // });

    return {
        nuevoJuego: inicializarJuego
    };

})();