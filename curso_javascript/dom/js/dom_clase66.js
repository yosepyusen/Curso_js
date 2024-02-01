//insertamos una breve definicion lo que es DOM
//getElementById, es en singular porque son identificadores, selectores, es decir son únicos, como id

const $whatIsDOM =document.getElementById("que-es"); //captamos el id de: <p id="que-es"> con getElementById
const $whatIsDOM1 = document.getElementById("que-es1"); //captamos el id de: <p id="que-es1"> con getElementById
const $whatIsDOM2 = document.getElementById("que-es2"); //captamos el id de: <p id="que-es1"> con getElementById
//dentro de text explicamos que es DOM a grandes rasgos
let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
        Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`
//para reemplazar variable text por elemento de html "que-es", 

//la sig. forma es para internet explorer que se hizo y no es estandar, tenemos dos propiedades: textContent, innerText, ambos sirven para añadir contenido textual a un elemento
//innerText: creada para internet explorer y funciona en cualquier navegador y no es estandar, textContent: es la propiedad estandar
$whatIsDOM.innerText=text;//con esto reemplazamos el parrafo "loremipsum" por valor de text, estos cambio puede ver en pagina web y la pestaña Elements
// <p id="que-es">...</p>, dentro de este parrafo reemplaza por el valor de la variable text y ademas añade <br>, porque el template stirng esta mapeando estas tabulaciones que tengo, ademas...
//dentro del template stirng las etiquetas como <p>,<mark> no lo conocen como etiqueta html

$whatIsDOM1.tent = text;//con imprime pero ya es mas acomodado y no hay <br> y tbm no interpreta las etiquetas html,reemplazamos de forma estandar
//pero uso de tent podemos usar para recibir solo texto y evitar inyeccion

//para que dentro de text del template stirng se renderice como html usamos:
$whatIsDOM1.innerHTML=text;

//hay chats como el de yotube que bloquea etiqueta html que contiene link que se encuentre en internet de una img: ejem: <img src="https://placekitten.com/640/360" alt="Animal">, esto se debe porque ese chat esta validadp para solo incresen texto y bloquear entradas de etiquetas html
//pero hay chats que si soporta codigo html

//vemos que dentro de etiqueta <p> hay 3 etiquetas <p>, como se muestra en la img, es como un error del sintaxis html. Cambio de etiqueta p, debe ser un div o seccion.., por eso usa outerHTML, cambio de innerHTML
$whatIsDOM2.outerHTML=text;//outerHTML ,hace es reemplazar este elemento:$whatIsDOM2, por el contenido dentro del template stirng de la variable text 

//para devolver un codigo html en una solo elemento, ejemplo en uso en REACT
/*
<>...</> , para react esto esta en un solo elemento, dentro del los tres puntos podemos agregar varias etiquetas html, LLAMDO AUDER HTML
*/