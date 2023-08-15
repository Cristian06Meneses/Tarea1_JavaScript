/*ForEach */

const numeros = [1, 5, 10, 30, 50];
let replica = 0;

numeros.forEach((item)=>{
    replica+=item;
})

console.log(replica);

/*Map */

const doble = numeros.map((valor)=> valor*2);
/*El .map toma cada valor del arreglo para luego modificarlo */

console.log(doble);

/*Arreglo con objetos */

const estudiantes = [
    {nombre:'Pedro', apellido:'Perez'},
    {nombre:'Pablo', apellido:'Moncada'},
    {nombre:'Andres', apellido:'Montoya'}
];

const nombreCompleto = estudiantes.map((student) =>{
    return `${student.nombre} ${student.apellido}`;
    //return student.nombre + ' ' + student.apellido;
});

console.log(nombreCompleto);

/*Filter */

const numerosFiltrados = numeros.filter((numero) => numero < 30);

console.log(numerosFiltrados);

const estudiantesFiltrados = estudiantes.filter((students) => students.apellido === 'Perez');

console.log(estudiantesFiltrados);

/*Every */

const frutas = ['Banano','Papaya','Mango','Fresa'];

const cumple = frutas.every((word) => word.length > 3);
//devuelve true

console.log(cumple);

const objetoFrutas = [
    {nombre:'Banano', buena:true},
    {nombre:'Papaya', buena:false},
    {nombre:'Mango', buena:true},
    {nombre:'Fresa', buena:true},
];

const prueba = objetoFrutas.every((test) => test.buena === true);

console.log(prueba);

/*Objetos */

const auto = {
    color:'Azul',
    year:1982,
    cantPuertas:4,
    marca:'Mazda',
    revisiones:{
        fecha:'10-enero-2020',
        fechaSalida:'20-enero-2020',
        estadoSalida:'Bueno',
        entregadoPor:'Juan Perez'
    },
    tieneSeguro: true,
    registradoTransito:true
}

let autos = [];
autos.push(auto);

console.log(autos);

/*Tarea 3*/

const personas = [
    {nombres: {nombre: 'Andres', apellido: 'Perez'}, edades: {edad: 20, adulto: true}},
    {nombres: {nombre: 'Camilo', apellido: 'Cano'}, edades: {edad: 15, adulto: false}},
    {nombres: {nombre: 'Ana', apellido: 'Morales'}, edades: {edad: 40, adulto: true}}
]

const nombresJuntos = personas.map((name) => {
    return `${name.nombres.nombre} ${name.nombres.apellido}`;
});
//Me junta el nombre y el apellido

console.log(nombresJuntos);

const soloAdultos = personas.filter((mayor) => mayor.edades.edad > 18);
//Me muestra si hay mayores de edad

console.log(soloAdultos);

const hayMenores = personas.every((menor) => menor.edades.adulto === true);
//Me muestra false si hay menores de edad

console.log(hayMenores);