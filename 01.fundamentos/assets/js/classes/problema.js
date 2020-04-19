const luis = {
    nombre: 'Luis',
    edad: 30,
    imprimir() {
        console.log(`Nombre ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const alejandro = {
    nombre: 'Alejandro',
    edad: 15,
    imprimir() {
        console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
    }
}

// luis.imprimir();
// Esto se debe crear con la palabra new

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
    }

}

const lui = new Persona('Luis', 25);
const ale = new Persona('Alejandro', 30);

luis.imprimir();
ale.imprimir();