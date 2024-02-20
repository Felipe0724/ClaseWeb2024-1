let PI = 3.1416;
let HolaMundo = "Hola Mundo";
console.log(PI,HolaMundo);

let name = "Felipe";
console.log(name);

let e = 3.1425;
console.log(e);

let suma = PI+HolaMundo;
console.log(suma);

PI === name? console.log("Verdadero"):console.log("Falso");

e===PI? console.log("Verdadero"):console.log("Falso");

const vidasIniciales = 30;

let verificaciones = 4;
if(verificaciones != 4){
    console.log("Es diferente a la verificación");
}else{
    console.log("La verificación es correcta");
}

/*Creación de variables sin asignación inicial de valores*/

let playerName;

/*Los const deben tener valor asignado de inicio*/
const euler = 1.0;

let empty = null;

//Métodos
Math.exp(3);

let nombreUsuario = "Facundo";
console.log(nombreUsuario.length)
console.log(nombreUsuario.includes("a"))

//Métodos o funciones

const sumaValores = (numberOne, numberTwo) =>{
    return numberOne+numberTwo;
}

const imprimirNombre = () =>{
    console.log("Felipe");
}

const Saluda = nombreAImprimir  => {
    return "Hello "+ nombreAImprimir;
}

console.log(Saluda("Felipe"));

/* Crear 3 arrow function

1° Recibe cero parámetros.
2° Recibe 1 parámetro.
3° Más de dos parámetros.*/
