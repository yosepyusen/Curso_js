import hamburgerMenu from "./menu_hamburguesa.js";//podemos escribir solo "hambu" y dar tab y se nos autocompleta este codigo
import { digitalClock,alarm } from "./reloj.js"; //como no hay ningun funcion por default uso la destructuracion de obj.
import { shortcuts,moveBall } from "./teclado.js";//importamos la funcion shortcuts
import countdown from "./cuenta_regresiva.js"; //cuando importas por default no es necesario poner los {}
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_reponsive.js";

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{ //cuando carga el documento, ya que DOMContentLoad:es para que cargue la pagina es mejor usar esto
    hamburgerMenu(".panel-btn",".panel",".menu a",".hamburger-inner",".hamburger-box");//caudo ya eta cargado la pagina entonces ejecutamos el evento hamburgerMenu, seleccionamos las dos clase del html que es:".panel-btn",".panel"
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj"); //como es id se pone delante un #, y se selecciona las tres id del button
    alarm("assets/alarma-gallo.mp3","#activar-alarma","#desactivar-alarma");

    //clase cuenta regresiva, clase 86
    //link de emogis:https://emojipedia.org/nerd-face
    countdown("countdown","Mayo 23,2024 03:23:19","Feliz Cummpleaño Amigo 🤓");//no van utilizar #, esto pondriamos cuando usariamos querySelector, pero internamente usaremos getElementById
    //Mayo 23,2023 03:23:19, formato:mes-dia-año y  03:23:19, es la hora de nacimiento por decirlo asi, cualquier formato fecha js, sirve
    //el año de la fecha que pasamos debe de ser mayor a la fecha actual para poder decir faltan tantos dias, meses...

    //clase 87
    scrollTopButton(".scroll-top-btn");//es una clase por eso se agrega el punto despues scroll-top-btn
    
    //---- inicio clase 89 ---------------
    //para youtube
    responsiveMedia("youtube","(min-width:1024px)","Contenido Móvil","Contenido escritorio");// ya no:#youtube, ponemos: youtube, porque vamos usar getElementById
    //para jquery: (min-width:1024px), es minima anchura
    
    //para gmaps
    responsiveMedia("gmaps","(min-width:1024px)","Contenido Móvil","Contenido escritorio");
    //---- fin clase 89 ---------------

});

//principalmente el teclado tiene 3 eventos: keyup:cuando soltamos la tecla, keydown:cuando presionamos y keypress:mientras la precionamos la tecla
//con KeyboardEvent, cada tecla tiene un codigo ejem el tabulador tiene:keyCode:32,

//-------------------- USANDO KEYDOWN, cuando pulsas una tecla, se parece el ebento keypress --------------------------------
d.addEventListener("keydown",e=>{//este evento se va ejecutar cuando precionamos una tecla
    shortcuts(e);//shortcuts recibe el evento, primero imprime:KeyboardEvent(el evento en si), despues imprime:keydown, por el segundo console es "e.type"
    moveBall(e,".ball",".stage");//le pasamos el evento, selector de la pelota y selector del escenario
});

//-------------------- USANDO KEYUP, cuando sueltas la tecla --------------------------------
// d.addEventListener("keyup",e=>{//este evento se va ejecutar cuando precionamos una tecla
//     shortcuts(e);//shortcuts recibe el evento, primero imprime:KeyboardEvent(el evento en si), despues imprime:keydown, por el segundo console es "e.type"
// });

//-------------------- USANDO KEYPRESS, cuando mantenemos presionado la tecla nos va dar varios eventos --------------------------------
// d.addEventListener("keypress",e=>{//este evento se va ejecutar cuando precionamos una tecla
//     shortcuts(e);//shortcuts recibe el evento, primero imprime:KeyboardEvent(el evento en si), despues imprime:keydown, por el segundo console es "e.type"
// });

//clase 88, lo sacamos fuera del DOMContentLoaded, porque dentro de este js que es la funcion darkTheme, vamos utilizar DOMContentLoaded 
darkTheme(".dark-theme-btn","dark-mode");//primer dato obtenemos la clase del boton con luna y 2do la clase que va activar el tema oscuro, solo necesitamos nombre y no ponemos punto
//el dark-mode, se escribio en la hoja css

//aumentando srcoll en barra de menu que yo cree, estas dos lineas sig. son de mios le comentamos 
// var objDiv = document.getElementById("contenedor");//con estoseleccionamos el id
// objDiv.scrollTop = objDiv.scrollHeight;//con esto creamos un barra de desplazamiento vertical(scrollTop) y barra de desplzamiento horizontal(scrollHeight)
