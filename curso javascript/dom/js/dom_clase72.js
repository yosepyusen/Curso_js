//eventos  de js, link: curso javascript/dom/js/dom_clase71.js
function holaMundo(){//cuando una funcion se convierte en un manejador de eventos, es decir una funcion que se ejecuta en un evento
    alert("Hola Mundo");
    
    //accedemos al objeto especial que es el evento en si 
    //al dar click en aceptar de la ventana emergente de donde llama el evento en el html, con esto nos abre  
    console.log(event); //despues de que dimos click en aceptar, en consola imprime: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    //event palabra reservada de js

    //dento de PointerEvent esta las propiedades como:
    // clientX:213 , clientY:620 ; que es la  posicion
    // 2 CARACTERISTICAS IPORTANTES DE EVENTO PointerEvent 
    // bubbles:true, que es flujo de eventos
    // type:"click", tipo de evento que se desencadeno
    // target:button, elemento u obj. que origino el evento y dentro de este hay varios propiedades donde podemos encontrar; onclick: ƒ onclick(event), es el unico propiedad que se lleno dentro y las demas propiedades están en NULL 
}

//forma mas correcta de manejador de eventos
const $eventoSemantico = document.getElementById("evento-semantico");//selecionamos el id con nombre "evento-semantico", con ayuda getElementById

//ejecutamos el manejador semantico: 1ra forma
$eventoSemantico.onclick = holaMundo //el evento solo es click por eso onclick y le igualamos a la funcion holaMundo sin parentesis y imprime PointerEvent dentro de ello se encuentra; target: button#evento-semantico 
//si holaMundo ponemos con (), da todo el evento pero en consola imprime undefined, porque el obj. event no es definido
//js esta basado en prototipos, el onclick es como agregar un metodo al prototipo del modelo del evento de $eventoSemantico
//va haber donde a un mismo elemento html tengamos que asignarle diferentes manejadores de eventos, es decir diferentes funciones que hagan diferentes cosas esa es la desventajas los eventos semanticos solo hacen un sola funcion

//ejecutamos el manejador semantico: 2ra forma, con una funcion anonima o arrow function o funcion anonima
//por eso el evento semantico solo hace un solo evento a la vez y no puede recibir parametros y el unico parametro que recibe, es el evento en si, que lo podemos obtener con "event"
$eventoSemantico.onclick = function (e){ //con esta linea de codigo decimos que no ejecuta la funcion holaMundo de la linea decod. 21 , porque aqui en esta linea le igualamos a una funcion anonima y porque solo tiene ejecutar un solo evento a la vez
    alert("Gola mundo Manejador de eventos Semanticos");
    //la palabra event se simplifica por e: function (e)
    console.log(e);//esa e representa el evento
    console.log(event);//invocar el evento como tal sin haberle pasado parametro como tal 
};//al terminar de aceptar el evento nos imprime dos veces PointerEvent , ya que en la funcion dentro hay dos consoles


//varias funciones a un mismo elemento html, para eso usa manejadores semanticos multiples
const $eventoMultiple = document.getElementById("evento-multiple");//selecionamos el id con nombre "evento-multiple", con ayuda getElementById

//addEventListener, recibe varios parametros pero solo hay e
$eventoMultiple.addEventListener()//