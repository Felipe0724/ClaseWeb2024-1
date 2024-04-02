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
const menuPrincipal = document.createElement('div');
//Asigna la clase del div
menuPrincipal.classList.add("Principal");
//colocar un parrafo
let p = document.createElement('p');
p.innerHTML = "Esto es un parrafo tripe hpta";
menuPrincipal.appendChild(p);
//colocar en el HTML
document.body.appendChild(menuPrincipal);