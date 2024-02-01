
//resize:se ejecuta cuando redimencionamos la ventana, o agrandamos o achicamos la consola el view port
window.addEventListener("resize",e=>{ //el 1mer parametro:resizee, el 2do parametro es un arrow function, dentro q estan los consoles vemos las propiedades de la ventana
    console.clear();//limpiamos la consola
    console.log("*********** EVENTO RESIZE ************"); 
    //la parte visible de la ventana, aqui es menos o mas si abrimos la consola
    console.log("es ancho view port: "+window.innerWidth);//innerWidth:hace referencia al tamaño del ancho del view port de nuestra ventana
    console.log("es alto view port: "+window.innerHeight);//innerHeight:hace referencia al tamaño de la altura del view port de nuestra ventana
    
    //la resolucion de este pc, es decir el tamaño en si, ejemplo si la ventana donde esta la pagweb, le ponemos en la mitad, por ende va cambiar el tamaño
    console.log("es ancho de la ventana: "+window.outerWidth);//tamaño(ancho) de ventana de nuestro navegador
    console.log("es alto de la ventana: "+window.outerHeight);//tamaño(alto) de ventana de nuestro navegador

    console.log(e);//imprime:Event ; "event", forma abreviada de "e"
})

//este se ejecuta cuando movemos el scroll
window.addEventListener("scroll",e=>{
    console.clear();
    console.log("*********** EVENTO SCROLL ************");
    console.log("scrollX: "+window.scrollX);//nos da en pixel el valor y dice que cuanto se aleja la barra de desplazamiento horizontal del margen izquierdo
    console.log("scrollY: "+window.scrollY);//nos da en pixel el valor y dice que cuanto se aleja la barra de desplazamiento vertical del margen top

    console.log(e);//imprime:Event ;"event", forma abreviada de "e"
});

//va ejecutar cuando la ventana de navegador haya terninado de cargarm load u onload
window.addEventListener("load",e=>{
    console.log("*********** EVENTO LOAD ************");
    console.log("screenX: "+window.screenX);//dice que cuanto se aleja la ventana del margen izquierdo de la ventana general
    console.log("screenY: "+window.screenY);//dice que cuanto se aleja la ventana del margen top de la ventana general

    console.log(e);//imprime:Event ;"event", forma abreviada de "e", dentro de este event podemos ver sus propiedades y atributos como es el typo, asi...
});

//jquery, para cargar la pagina
// $(window).load(function);//function: es la funcion a ejecutar
// $(document).ready(function);//metodo 1 que trabajaba con document y ready
// $(document).on("ready",function); //metodo 2 con manejador on
// $(window).on("load",function); //function: es la funcion a ejecutar

//DOMContentLoaded, es el primero que se ejecuta cuando carga la pagina
document.addEventListener("DOMContentLoaded",e=>{
    console.log("*********** EVENTO DOMContentLoaded ************");
    console.log("screenX: "+window.screenX);//dice que cuanto se aleja la ventana del margen izquierdo de la ventana general
    console.log("screenY: "+window.screenY);//dice que cuanto se aleja la ventana del margen top de la ventana general

    console.log(e);//imprime:Event ;"event", forma abreviada de "e", dentro de este event podemos ver sus propiedades y atributos como es el typo, asi...
});

//tanto load y DOMContentLoaded, tienen sus diferencias como:type:"load" y type:"DOMContentLoaded" respectivamente, tambien timeStamp
//mejor practica, hacerque algo se cargue en cuanto el dom este listo, es mucho mas eficiente trabajar con DOMContentLoaded, mas que todo cuando se hace peticiones asincronas
//el DOMContentLoaded es disparado cuando el document html ha sido cargado y parseado perfectamente todo desde etiqueta:<!DOCTYPE html>, hasta:</html>...
//pero DOMContentLoaded no va esperar que cargue las hojas de estilos, las imgs, subtramas, srcipts...
//en cambio evento load, se dispara hasta qeu cargado todo desde etiqueta:<!DOCTYPE html>, hasta:</html>... incluyendo los estilos,scripts... es decir todo las etiquetas

//por eso es mejor opcion elegir DOMContentLoaded

