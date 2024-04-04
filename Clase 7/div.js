export const crearDiv = (texto) => {
//crear un div en el html
const menuPrincipal = document.createElement('div');
//Asigna la clase del div
menuPrincipal.classList.add("Principal");
//colocar un parrafo
let p = document.createElement('p');
p.innerHTML = texto;
menuPrincipal.appendChild(p);
document.body.appendChild(menuPrincipal);

return menuPrincipal;
};

//o puede ponerlo debajo con lo siguiente: export default crearDiv;
//Este exporta por defecto, cualquiera que se seleccione