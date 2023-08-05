let num1 = 5;
let num2 = 5;
let resta = true;

console.log("La suma es: " + (num1 + num2));

switch (resta) {
    case true:
        console.log("La resta es: " + (num1 - num2));
        break;
    default:
        console.log("No hay resta por hacer D:");
}

if ((num1 + num2) === 10 && (num1 - num2) === 0){
    console.log("La multiplicacion es: " + (num1 * num2));
}
else {
    console.log("D:");
}


