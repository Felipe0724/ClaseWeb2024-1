let PI = 3.1416;
console.log(PI);
let e = 2.71325;

let name = "Pablo";
console.log(name);

name = "Juan";
console.log(name);

let suma = PI+e;
console.log(suma);

PI === name? console.log("verdadero"):console.log("falso");


const VidasIniciales = 30;



/*Declaracion de variables sin asignar un valor*/

let playerName;

const euler = 1.0;

let empty = null;


/* Métodos */

Math.exp(3);
let nombreUsuario = "Pedro";
console.log(nombreUsuario.length);
console.log(nombreUsuario.includes("P"));


//Métodos o Funciones//

//recibe parámetros dos//

const sumaValores = (numberOne, numberTwo) =>{
    return numberOne+numberTwo
}

const imprimirNombre = () =>{
    console.log("Juan");
}

const saludar = nombreAImprimir => {
    return "Hello" + nombreAImprimir;
}

console.log(saludar(" Pedro"));


// crear 3 arrow function 
// 1. recibe cero parametros
// 2. recibe 1 parametro
// 3. recibe mas de dos parametros

//CONST 3

//LET 5


//genera un numero aleatorio 

const generarNumeroAleatorio = () => {
    return Math.random();
};

console.log(generarNumeroAleatorio()); // Salida: número aleatorio

//obtienes un dia de la semana
const obtenerDiaSemana = () => {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const fechaActual = new Date();
    const dia = fechaActual.getDay();
    return diasSemana[dia];
};

console.log(obtenerDiaSemana()); 


//genera un mensaje de bienvenida

const obtenerMensajeBienvenida = () => {
    return "¡Bienvenido! Esperamos que tengas un excelente día.";
};

console.log(obtenerMensajeBienvenida()); // Salida: Mensaje de bienvenida



/*-------------------FUNCIONES QUE RECIBE 1 PARAMETROS---------------------- */

//sirve para calcular el cuadrado de un numero
let calcularCuadrado = (numero) => {
    return numero * numero;
};

console.log(calcularCuadrado(5)); // Salida: 25


//convertir grados celcuis a farenheit
let celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

console.log(celsiusToFahrenheit(20));


//saluda
let saludos = (nombre) => {
    return `¡Hola, ${nombre}!`;
};

console.log(saludar("Juan"));

/*-------------------FUNCIONES QUE RECIBEN 2 PARAMETROS-----------------------*/


//calcular el area de un rectangulo
let calcularAreaRectangulo = (base, altura) => {
    return base * altura;
};

console.log(calcularAreaRectangulo(5, 8)); 


//calcular el area de un circulo
const calcularAreaCirculo = (radio, pi) => {
    return pi * radio * radio;
};

console.log(calcularAreaCirculo(3, Math.PI)); 


//sirve para calcular el maximo de 2 numeros 
const encontrarMaximo = (a, b) => {
    return Math.max(a, b);
};

console.log(encontrarMaximo(10, 7));