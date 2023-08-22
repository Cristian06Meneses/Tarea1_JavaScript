class Animal{
    constructor(especie,color,sonido,habitat){
        this.especie = especie;
        this.color = color;
        this.sonido = sonido;
        this.habitat = habitat;
    }

    moverse(tipoMovimiento){
        console.log(`Mi movimiento es: ${tipoMovimiento}`);
    }

    determinarEspecie(){
        return this.especie;
    }

    sonidoCaracteristico(){
        return this.sonido; 
    }

    dondeSeEncuentra(){
        return this.habitat;
    }
}

class Perro extends Animal{
    constructor(raza, color, sonido){
        /*this.raza = raza;
        this.color = color;
        this.sonido = sonido;*/
        super(raza,color,sonido,'Casa');//Inicializa el constructor padre
    }

    ladrar() {
        return this.sonido;
    }

    sentarse() {
        console.log('Me he sentado');
    }
}

const Labrador = new Perro('Labrador','Blanco','Woof');
Labrador.sentarse();
console.log(Labrador.ladrar());//Devuelve 'Woof'

console.log(Labrador.sonidoCaracteristico());//Devuelve 'Woof' desde animal

class Musica {
    constructor(info){
        this.fechaLanzamiento = info.fechaLanzamiento;
        this.artista = info.artista;
        this.genero = info.genero;
        this.titulo = info.titulo;
    }

    reproducir(){
        console.log(`Se esta reproduciendo ${this.titulo} de artista ${this.artista}`);
    }

    pausar(){
        return `Se ha pausado ${this.titulo} de artista ${this.artista}`;
    }
}

const informacion = {
    fechaLanzamiento: 1989,
    artista: 'Madona',
    genero: 'pop',
    titulo: 'Like a virgin',
}

const Pop = new Musica(informacion);
Pop.reproducir();

const PopUno = new Musica(
    {
        fechaLanzamiento: 1989,
        artista: 'Queen',
        genero: 'Rock',
        titulo: 'Another on bites the dust',
    }
);