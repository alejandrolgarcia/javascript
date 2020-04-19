// Clases en Javascript
// Definicion de una clase

class Persona {

    // Propiedades de una clase

    // Propiedades estáticas
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un método estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // Constructor de la clase
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    // set y get
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    // Metodos de una clase
    quienSoy() {
        console.log(`Soy ${this.nombre}, y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`Soy ${this.nombre} y mi frase es ${this.codigo}`);
    }

}

const personaComun = new Persona();
const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'IronMan', 'Yo soy Ironman');

console.log(personaComun);
console.log(spiderman);
console.log(ironman);

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
spiderman.quienSoy();
console.log(Persona.conteo);
console.log(Persona.mensaje);

console.log(Persona);