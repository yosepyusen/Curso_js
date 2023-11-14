import hamburgerMenu from "./menu_hamburguesa.js";//podemos escribir solo "hambu" y dar tab y se nos autocompleta este codigo
import { digitalClock,alarm } from "./reloj.js"; //como no hay ningun funcion por default uso la destructuracion de obj.
import { shortcuts } from "./teclado.js";//importamos la funcion shortcuts

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{ //cuando carga el documento, ya que DOMContentLoad:es para que cargue la pagina es mejor usar esto
    hamburgerMenu(".panel-btn",".panel",".menu a",".hamburger-inner",".hamburger-box");//caudo ya eta cargado la pagina entonces ejecutamos el evento hamburgerMenu, seleccionamos las dos clase del html que es:".panel-btn",".panel"
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj"); //como es id se pone delante un #, y se selecciona las tres id del button
    alarm("assets/alarma-gallo.mp3","#activar-alarma","#desactivar-alarma");
});

//principalmente el teclado tiene 3 eventos: kiot cuando soltamos la tecla, down:cuando presionamos y keypress:mientras la preconamos
d.addEventListener("keydown",e=>{//este evento se va ejecutar cuando precionamos una tecla
    shortcuts(e);//shortcuts recibe el evento, primero imprime:KeyboardEvent(el evento en si), despues imprime:keydown, por el segundo console es "e.type"
});
//con KeyboardEvent, cada tecla tiene un codigo ejem el tabulador tiene:keyCode:32,


