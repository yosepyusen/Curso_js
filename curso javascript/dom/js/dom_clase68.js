//creamos etiquetas html, dinamicamente 
//-----------------------------  añadiendo una tarjeta   ---------------------------
const $figure = document.createElement("figure"),//creamos una etiqueta <figure>
    $img = document.createElement("img"),//creamos una etiqueta <img>, en el html hay la etiqueta img y falta configurar el alt, source, que son obligatorios
    $figcaption = document.createElement("figcaption"), //creamos una etiqueta <figcaption>, este no tiene atributos pero si tiene un nodo de texto
    $figcaptionText = document.createTextNode("Carne"),//con esto creamos un nodo de texto con createTextNode, el nodo de texto va ser Carne, esto texto Carne va aparecer dentro del nodo de figcaption
    
    //capturamos en variable $card, el elemento padre que es el seccion
    $cards = document.querySelector(".cards");

//para incorporar al arbol del dom hacemos: se agrega desde al mas adentro hasta al mas afuera
$figcaption.appendChild($figcaptionText);//figcaption, esta mas adentro de todos y le agregamos a $figcaption el valor de un texto con $figcaptionText="Carne", este valor le pasamos con appendChild()
$img.setAttribute("src","https://baconmockup.com/300/200");//con esto le pasamos el url de la img, como el url esta dentro de la etiqueta img, se añade primero
$img.setAttribute("alt","Carne");//Configuramos el atributo 
$figure.classList.add("card");//agregamos la clase .card a la etiqueta figure

$figure.appendChild($img);//tanto la etiqueta img y figcaption estan dentro de la etiqueta figure, pasamos la etiqueta img a figure
$figure.appendChild($figcaption);//pasamos figcaption a figure
$cards.appendChild($figure);//en pestaña de Elementos del navegador, en consola adiciona una etiqueta mas que es:<figure>...</figure>, esto se agrega dentro de la etiqueta <seccion>
//maso menos asi se van creando nodos en react, viuw
//-----------------------------  fin tarjeta   ---------------------------

//-----------------------------  añadiendo otra tarjeta   ---------------------------
const $figure2 = document.createElement("figure");//creamos una etiqueta figure2

//innerHTML, que el texto dentro del template stirng renderice como html
$figure2.innerHTML=`
    <img src="https://placekitten.com/640/360" alt="Animal">
    <figcaption>Animal</figcaption>
`;

//agregamos la clase .card, figure
$figure2.classList.add("card");
//agregamos una nueva figura
$cards.appendChild($figure2); //con esto hay 7 tarjetas las dos ultimas se crearon con js
//-----------------------------  fin otra tarjeta   ---------------------------

const estaciones = ["Primavera","Verano","Otoño","Invierno"], //creamos un arreglo
    $ul = document.createElement("ul");//creamos dinamicamente una etiqueta <ul>

    //document.write, no es una buena practica de usar 
document.write("<h3>Estaciones del Año</h3>");//con esto escribe en el html: dom_clase68.html, linea 68

