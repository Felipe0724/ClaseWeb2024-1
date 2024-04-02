export const crearDiv = (texto) => {
//crear un div en el html
const menuPrincipal = document.createElement('div');
//Asigna la clase del div
menuPrincipal.classList.add("Principal");
//colocar un parrafo
let p = document.createElement('p');
p.innerHTML = "Esto es un parrafo tripe hpta";
menuPrincipal.appendChild(p);

return menuPrincipal;
};

//o puede ponerlo debajo con lo siguiente: export default crearDiv;
//Este exporta por defecto, cualquiera que se seleccione