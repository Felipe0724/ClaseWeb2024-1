export const crearDiv = (contenido) => {
    const div = document.createElement('div');
    div.innerHTML = contenido;
    return div;
};
