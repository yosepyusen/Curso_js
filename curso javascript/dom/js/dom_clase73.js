//seguido el mismo tema de clase 72 

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

//funcion saludar que recibe como parametro el "nombre" de la persona que vamos a saludar
function saludar(nombre="Desconocido@"){
    alert(`Hola ${nombre}-${event}`);//pero en la ventana de alerta no imprime "Hola Desconocido@" sino "Hola [object MouseEvent]-[object MouseEvent]", con esto podemos decir que...
    //cualquier funcion sea manejador de eventos solo recibe el parametro que sea el evento en si
}
function saludar1(nombre="Desconocido@"){
    alert(`Hola ${nombre}`);
    console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple"),//selecionamos el id con nombre "evento-multiple", con ayuda getElementById
$eventoMultiple1 = document.getElementById("evento-multiple1"),
$eventoMultiple2 = document.getElementById("evento-multiple2")

//usamos el evemto multiple
//primer evento
$eventoMultiple.addEventListener("click",holaMundo);//recibe dos parametro primero es el tipo:click, 2do parametro es el listener:holaMundo(es una funcion previamente declarada), ya no es onclick sino click y asi para los demas con addEventListener

//segundo evento
$eventoMultiple.addEventListener("click",(e)=>{ //evento que paso con el valor de e, en modo abreviado 
    alert("Hola Mundo Manejador de eventos multiple");
    console.log(e);//con esto imprime:PointerEvent 
    //trabajamos dos tipos de eventos mas improtantes: type(es el tipo) y target(es el objeto que origina )
    console.log(e.type);//con esto imprime: click, q es el tipo
    console.log(e.target);//con esto imprime:<button id="evento-multiple">Evento con manejador multiple</button>
    //sino queremos pasar el evento su parametro simplificado ponemos "event"
    console.log(event);//con esto imprime:PointerEvent  
});//al dar click en el boton Evento con manejador multiple, nos llama primero a holaMundo, despues el alert de: Hola Mundo Manejador de eventos multiple,

//tercer evento
$eventoMultiple.addEventListener("click",saludar);//imprime:Hola [object MouseEvent]-[object MouseEvent]

//para ejecutar la funcion saludar con sus respectivos parametros, hacemos de dos formas
//--------incio primera forma ------------------------
$eventoMultiple1.addEventListener("click",function(){
    saludar1();//imprime: Hola Desconocido@-[object PointerEvent]
})
//--------fin primera forma ------------------------

//--------inicio 2da forma ------------------------
$eventoMultiple2.addEventListener("click",()=>{
    saludar1();
    saludar1("Jon");
});//imprime:Hola Desconocido@-[object PointerEvent], despues Hola Jon y en consola dos veces PointerEvent, si o si tengo que poner los parentesis en saludar
//--------fin 2da forma ------------------------

const $eventoRemover = document.getElementById("evento-remover"), //selecionamos el id="evento-remover", con getElementById
    removerDobleClick = (e)=>{
        alert(`Removiendo el evento de tipo "${e.type}"`);
        console.log(e);
        //para remover un evento esta tiene que estar guardada en una funcion expresada o declarada
        //nos pide el removeEventListener, primero el evento que queremos remover que es dblclick y la funcion manejadora asociada al evento que es arrow function 
        $eventoRemover.removeEventListener("dblclick",removerDobleClick);//ahora trabjamos con doble click
        $eventoRemover.disabled = true;//con esto desabilitamos el boton
    }

//el "e" hace referencia al evento
$eventoRemover.addEventListener("dblclick",removerDobleClick);//ahora añadimos un evento de tipo dobleclick=dblclick, y añadimos la funcion removerDobleClick lo que...
//imprime al dar doble click: Removiendo el evento de tipo "dblclick", despues en consola imprime:MouseEvent y despues al dar doble click en ese mismo pagina web no se ejecuta ya que se removio el evento y por ultimo se desabilita el boton
