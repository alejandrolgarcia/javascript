class Persona {
    // Propiedades de una clase

    // Propiedades estáticas
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + " instancias";
    }

    static mensaje() {
        console.log("Hola a todos, soy un método estatico");
    }

    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    // Constructor de la clase
    constructor(
        nombre = "Sin nombre",
        codigo = "Sin código",
        frase = "Sin frase"
    ) {
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

class Heroe extends Persona {

    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        // Hece referencia al constructor de la clase padre
        super(nombre, codigo, frase);
        this.clan = 'Los Vengadores';
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy();
    }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
console.log(spiderman);
console.log(spiderman.quienSoy());