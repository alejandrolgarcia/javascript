// Singleton: Instancia unica de la clase

class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '') {

        // Evaluar si ya existe una instancia
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia1 es: ${ instancia2.nombre }`);