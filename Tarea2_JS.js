//Funcion
function restar(numberOne, numberTwo){
    return numberOne-numberTwo;
}

console.log(restar(5, 8));
console.log("\n");
    
//Funcion anonima
const sumarDosNumeros = function(number1, number2){
    return number1+number2;
}
    
console.log(sumarDosNumeros(5, 8));
console.log("\n");
    
//Funcion flecha
const multiplicarDosNumeros = (n1, n2) =>{
    return n1 * n2;
}
    
console.log(multiplicarDosNumeros(2, 2));
console.log("\n");
    
//Funcion flecha sin variables de entrada
const multiDos = () =>{
    return 1*0;
}
//Devuelve 0
    
//Funcion flecha solo con una variable de entrada
const multitres = n1 => {
    return n1*10;
}
//Devuelve el n1 multiplicado 10
    
//Funcion flecha sin return
const multiCuatro =(n1, n2) => n1*n2;
//devuelve n1 multiplicado n2
    
//Funcion flecha con dos variables y con otra funcion(operacion) que puede llamar a otra funcion(callback function)
const operacionesMatematicas =(number1, number2, operacion) =>{
    return operacion(number1, number2);
}
    
console.log(operacionesMatematicas(2,5,multiCuatro));
//Devuelve la operacion creada en otra funcion con los datos ingresados
    
// Arreglos
    
let userData =['Juan', 1234,'@gmail.com'];
    
const userDataTwo =[{name:'Juan', pass: 1234, mail:'gmail.com'}];
    
/*
length. longitud(cantidad de datos)
    
index. posicion en el arreglo
    
push. ingresar un dato (al final del arreglo)
    
pop. sacar el ultimo dato
*/
    
userData.pop();
//Devuelve @gmail.com
userData.push();
//ingresa el dato
userDataTwo[0].name;
    
//Tarea 2

//Arreglo
let nombres=['Andres', 'Ana', 'Camilo'];

//Funcion 1
const eliminarNombre= nombre => nombres.pop();

//Funcion 2
const añadirDosNombres= (nombre1, nombre2) => nombres.push(nombre1, nombre2);

//Funcion con callback
const añadirYSacarUnDato= (nombre1, nombre2, eliminar, añadir) =>{
    return (eliminar(console.log(nombre1)), añadir(console.log(nombre2)));
}

console.log(añadirYSacarUnDato('Ana', 'Juan', eliminarNombre, añadirDosNombres));

