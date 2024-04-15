// boton.js
export const crearBoton = (texto) => {
    const boton = document.createElement('button');
    boton.className = 'profile__btn';
    boton.innerHTML = `<p>${texto}</p>`;
    return boton;
};
