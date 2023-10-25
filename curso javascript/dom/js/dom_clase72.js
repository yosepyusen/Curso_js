//eventos  de js, link: curso javascript/dom/js/dom_clase71.js
function holaMundo(){//cuando una funcion se convierte en un manejador de eventos, es decir una funcion que se ejecuta en un evento
    alert("Hola Mundo");
    
    //accedemos al objeto especial que es el evento en si 
    //al dar click en aceptar de la ventana emergente de donde llama el evento en el html, con esto nos abre  
    console.log(event); //despues de que dimos click en aceptar, en consola imprime: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    
    //dento de PointerEvent esta las propiedades como:
    // clientX:213 , clientY:620 ; que es la  posicion
    // 2 CARACTERISTICAS IPORTANTES DE EVENTO PointerEvent 
    // bubbles:true, que es flujo de eventos
    // type:"click", tipo de evento que se desencadeno
    // target:button, elemento u obj. que origino el evento y dentro de este hay varios propiedades donde podemos encontrar; onclick: ƒ onclick(event), es el unico propiedad que se lleno dentro y las demas propiedades están en NULL 
}

//forma mas correcta de manejador de eventos
const $eventoSemantico = document.getElementById("evento-semantico");//selecionamos el id con nombre "evento-semantico", con ayuda getElementById

//ejecutamos el manejador semantico
$eventoSemantico.onclick = holaMundo //el evento solo es click por eso onclick y le igualamos a la funcion holaMundo sin parentesis
//si holaMundo ponemos con (), da todo el evento pero en consola imprime undefined, porque el obj. event no es definido