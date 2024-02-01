//para agregar elementos dinamicos usamos appeChild. que appeChild, agrega el elemento al final del selector objetivo
//metodos no como appeChild que permite solo agrega al final pero hay metodo que nos permite reemplazar o insertar al incio, o insertar en una posicion en particular
//para eso se ase uso de DOM TRAVERSING

const $cards = document.querySelector(".cards"),//seleccionamos la clase .cards del html
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true); //clonamos toda la seccion de tarjetas, es generar una 2da seccion de tarjetas con 5 tarjetas mas
//cloneNode(true), si dentro de (), lo paso falso o lo dejo en vacio, solo estaria clonando la estrutura del nodo padre, es decir la etiqueta seccion de clase padre .cards, para que clone todo el contenido ponemos true dentro del ()

//para agregar elemento dinamico usamos a parte de apendChild
$newCard.innerHTML = `
    <img src="https://picsum.photos/640/360" alt="Fotos">
    <figcaption>Fotos</figcaption>
`;

$newCard.classList.add("card");//añdimos la clase .card, dentro de la etiqueta figure

//reemplazar una etiqueta o nodo, img de HumanoUno por otro 
//COMENTANDO replaceChild, 
//$cards.replaceChild($newCard,$cards.children[4]);//reemplazamos con replaceChild por una nueva card:$newCard a la actual posicion de la tarjeta 4 que es humanoUno: $cards.$children[4]; la clase ".cards", hace referencia que implicitamente toma la etiqueta seccion 

//appeChild nos inserta al final, pero otro metodo permite isertar antes de un nodo que tomemos como referencia
//COMENTANDO INSERBEFORE
//$cards.insertBefore($newCard, $cards.firstElementChild);//insertBefore: inserta antes, el 1mer parametro pide el nuevo nodo:$newCard, el nodo de referencia:$cards.firstElementChild
//$cards.firstElementChild: con esto le decimo que reemplce con $newCard, pero antes del primer elemento, en total abria 6 tarjetas

//metodo para eliminar una tarjeta, en este caso eliminamos el ulimo tarjeta
//COMENTANDO REMOVECHILD
//$cards.removeChild($cards.lastElementChild);//con lastElementChild eliminamos la ultima tarjeta, de categoria Gatos

//
//COMENTANDO CLONE NODE, funciona similar al IMPORT NODE
document.body.appendChild($cloneCards); //vemos dos secciones, cada seccion con sus 5 tarjetas