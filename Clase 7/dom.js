import { crearDiv } from "./div.js";
import { crearTarjeta } from "./tarjeta.js";

const contenido = `
<nav> 
    <ul>
        <li>Inicio</li>
        <li>Quienes somos</li>
        <li>Puntos de contacto</li>

    </ul>
    
    
</nav>    

`;


//DOM
//createElement()

//colocar en el HTML
document.body.appendChild(crearDiv("Hola Mundo"));
document.body.appendChild(crearTarjeta("Hola mundo cruel", "jdfhkajf"));
const division = document.createElement('p');
division.innerHTML = "Hello";
division.id = "hola";
document.body.appendChild(division);

//Manipulas el CSS
let parrafo = document.getElementById("hola");
parrafo.style.color = "blue";

//TAREA