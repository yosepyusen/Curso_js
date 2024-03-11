
export function Menu(){

    const $menu = document.createElement("nav"); //como es menu se pone detro de etiqueta nav
        $menu.classList.add("menu");//agregamos clase menu para dar estilos
        $menu.innerHTML = `
            <a href="#/">Home</a>
            <span>-</span>
            <a href="#/search">Búsqueda</a>
            <span>-</span>
            <a href="#/contacto">Contacto</a>
            <span>-</span>
            <a href="https://aprendejavascript.org/" target="_blank" rel="noopener">Aprende JS</a>
        `;
    //`<h2>Menú</h2>`
    return $menu;

}