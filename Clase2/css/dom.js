import { crearDiv } from "./div.js";
import { crearBoton } from "./boton.js";
import { crearTarjeta } from "./tarjeta.js";

// Función para crear y agregar un botón al cuerpo del documento
const crearBoton = (texto) => {
    const boton = document.createElement('button');
    boton.className = 'profile__btn';
    boton.innerHTML = `<p>${texto}</p>`;
    return boton;
};

// Información de la página
const nombre = "Jessica Randall";
const ciudad = "London, United Kingdom";
const descripcion = "Front-end developer and avid reader.";


//contenido de la página
const contenido = `
<main class="profile">
    <section class="informacion">
        <img src="./assets/mujer.jpg" alt="Jessica Randall - profile photo" class="profile__avatar">
        <h1 class="profile__name"><p>Jessica Randall</p></h1>
        <p class="profile__city">London, United Kingdom</p>
        <p class="profile__description">"Front-end developer and avid reader."</p>
    </section>
    <section class="buttons">
        ${crearBoton('GitHub').outerHTML}
        ${crearBoton('Frontend Mentor').outerHTML}
        ${crearBoton('LinkedIn').outerHTML}
        ${crearBoton('Twitter').outerHTML}
        ${crearBoton('Instagram').outerHTML}
    </section>
</main>
`;

// Crear y agregar el contenido al cuerpo del documento
document.body.appendChild(crearDiv(contenido));

// Crear y agregar la sección de información y los botones al cuerpo del documento
document.body.appendChild(crearDiv(informacion + botones));

// Crear un párrafo, asignarle un ID y estilo, luego agregarlo al cuerpo del documento
const division = document.createElement('p');
division.innerHTML = "Hello";
division.id = "hola";
document.body.appendChild(division);

// Crear y agregar una tarjeta al cuerpo del documento
document.body.appendChild(crearTarjeta("Hello world cruel", "jdfhkajf"));

// Manipular el estilo del párrafo
let parrafo = document.getElementById("hola");
parrafo.style.color = "blue";

