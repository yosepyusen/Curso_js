import hamburgerMenu from "./menu_hamburguesa.js";//podemos escribir solo "hambu" y dar tab y se nos autocompleta este codigo

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{ //cuando carga el documento, ya que DOMContentLoad:es para que cargue la pagina es mejor usar esto
    hamburgerMenu(".panel-btn",".panel");//caudo ya eta cargado la pagina entonces ejecutamos el evento hamburgerMenu, seleccionamos las dos clase del html que es:".panel-btn",".panel"
    
});