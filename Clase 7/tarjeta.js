export const crearTarjeta = (titulo, texto) => {
    const seccion = document.createElement('sección');
    seccion.classList.add('Seccion');
    const title = document.createElement('h2');
    title.innerHTML = titulo;
    seccion.appendChild(title);
    const p = document.createElement('p');
    p.innerHTML = texto;
    seccion.appendChild(p);

    return seccion;
}
