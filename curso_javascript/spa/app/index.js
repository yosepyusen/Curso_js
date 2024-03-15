//App.js se escribio asi pq es un componente 
//en cambio index.js es file normal

import api from "./helpers/wp_api.js";
import {App} from "./App.js";

//si ejecuto aqui App, ahi si necesitaria parentesis App()
document.addEventListener("DOMContentLoaded", App);//pero como estoy ejecutando en manejador de eventos solo ponemos App, si ponemos parentesis significaria invocacion inmediata

//en consola escribimos:location.hash imprime: '#/search', siempre y cuando el link es: http://127.0.0.1:5501/curso_javascript/spa/index.html#/search
//en consola escribimos:location.hash imprime:'#/', con link: http://127.0.0.1:5501/curso_javascript/spa/index.html#/
//hash es lo q viene despues de # 

//cuando la ventana detecte cambio de la parte q represente el hash en la url lo va hacer, renderiza la aplicacion 
window.addEventListener("hashchange", e=>{
    //cada vez que hay cambios en el hash inicializa pagina de wp_api.js en 1
    api.page = 1;
    //console.log(api.page);//imprime: 1

    //tambien ejecuta f. App()
    App();
});