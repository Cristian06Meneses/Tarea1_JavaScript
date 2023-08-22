class Vehiculos{
    constructor(marca, capacidad, tipo){
        this.marca = marca;
        this.capacidad = capacidad;
        this.tipo = tipo;
    }

    marcaVehiculo(){
        return this.marca;
    }

    tipoVehiculo(){
        return this.tipo;
    }
}

let marcha = 'N';

class Carro extends Vehiculos{
    constructor(marca, capacidad, tipo, color){
        super(marca, capacidad, tipo)
    }

    observarCarro(){
        console.log('!!!Es un ' + this.marca + '¡¡¡')
    }

    encenderCarro(){
        console.log("Carro Encendido");
    }

    subirMarcha(){
        if(marcha === 'R'){
            marcha = 'N';
        }

        if(marcha === 'N'){
            marcha = 1;
        }

        if(marcha >= 1)
        {
            if(marcha >= 6){
                console.log('Tampoco es que tengamos un superdeportivo.');
            }
            else{
                marcha++;
            }
        }

        console.log('Marcha: '+ marcha);        
    }

    bajarMarcha(){
        if(marcha === 'R'){
            console.log('¿Quieres retroceder en el tiempo?')
        }

        if(marcha === 'N'){
            marcha = 'R'
        }

        if(marcha === 1){
            marcha = 'N';
        }

        console.log('Marcha: '+ marcha);        
    }
}

const informacion = {
    marca: 'Chevrolet',
    capacidad: 5,
    tipo: 'Carro',
    color: 'Gris',
}

const autoUno = new Carro(informacion.marca, informacion.capacidad, informacion.tipo, informacion.color);

autoUno.observarCarro();

autoUno.encenderCarro();

console.log(autoUno.tipo);

const concecionario = new Vehiculos('Royal Enfield', 2, 'Moto');

console.log(concecionario.marcaVehiculo());

console.log('El tipo de vehiculo es: ' + concecionario.tipoVehiculo());