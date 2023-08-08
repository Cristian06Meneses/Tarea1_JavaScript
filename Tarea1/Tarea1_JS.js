let num1 = 5;
let num2 = 5;
let resta = true;
let i = 1;
const t = 6;
let m = 0;

console.log("La suma es: " + (num1 + num2));

switch (resta) {
    case true:
        console.log("La resta es: " + (num1 - num2));
        break;
    default:
        console.log("No hay resta por hacer D:");
}

if ((num1 + num2) === 10 && (num1 - num2) === 0){
    console.log("\nLa multiplicacion es: " + (num1 * num2));
}
else {
    console.log("D:");
}

console.log("\nLa tabla del "+ num1 + " es: ");

do {
    console.log(num1 + " x " + i + " = " + (num1 * i));
    i++;
} while (i <= 10);

console.log("\n");

for (let u = 0; u <= num2; u++){
    console.log(num2 + " - "+ u + " = " + (num2 - u));
}

console.log("\n");

while (m < 10){
    console.log(m);

    if(m === t){
        break;
    }

    m++;
}