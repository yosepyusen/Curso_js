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

//---------------------------- creandoo una lista ---------------------------
const estaciones = ["Primavera","Verano","Otoño","Invierno"], //creamos un arreglo
    $ul = document.createElement("ul");//creamos dinamicamente una etiqueta <ul>

//document.write, no es una buena practica de usar 
document.write("<h3>Estaciones del Año</h3>");//con esto escribe en el html: dom_clase68.html, linea 68

//agregamos la etiqueta ul creado al elemento padre body
document.body.appendChild($ul);


estaciones.forEach(element =>{// foreach(element => {}), con esto dice que por cada elemento: element haga lo que esta dentro de {}
    const $li = document.createElement("li"); //creamos un etiqueta <li>
    $li.textContent = element;//pasamos el valor a la etiqueta <li>, con contenido, cada vez que recorra los elementos del array estaciones, con element
    $ul.appendChild($li);//cada recorrido le pasamos el valor d hijo y se crea una etiqueta li dentro de ul en cada recorrido 
});
//---------------------------- creando una lista ---------------------------

//---------------------------- creandoo otra lista ---------------------------
const continentes = ["África","América","Asia","Oceania"], //creamos un arreglo
    $ul2 = document.createElement("ul");//creamos dinamicamente una etiqueta <ul> 

document.write("<h3>Continenetes del Mundo</h3>");
document.body.appendChild($ul2);

//usando innerHtml, no es una buena practica porque no estas creando un nodo hmtl, pero para visualizacion es valida
//para llenar contenido dinamico de varios registros a la vez, pues lo primero que tienes que incializar con valor NULO, o cadena vacia la propiedad HTML, del elemento en cuestion
$ul2.innerHTML="";//aunque no este inicializado esto o comentamos esta linea de cod., agrega normal la lista de continenetes, pero para evitar errores se deja en cero o vacio
//para poder llenar dinamicamente con foreach
continentes.forEach(elemento=>$ul2.innerHTML+=`<li>${elemento}</li>`);//por cada recorrido se va agregando cada elemento: <li>${elemento}</li>, del array continenetes, por eso $ul se inicializa en nada y se pone el + para que agrege el elemento por cada rrecorrido del foreach
//---------------------------- creandoo otra lista ---------------------------

//tecnica del fragmento es para ahorrar memoria y no se lajea o lenetea al momneto de abrir la app y sobre todo hacer una sola incersion al DOM
//USANDO FRAGMENTOS
//----------------------------------------inicio usando fragmento ----------------------
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),//creamo <ul>
  $fragment = document.createDocumentFragment();//creamos un fragmento, al ser fragmentos en DOM, no se puede usar la tecnica del innerHTML, sino de crear elementos, nodos, este ultimo es la forma mas optima  

  meses.forEach(elemento=>{
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $fragment.appendChild($li);//agregamos a ese nodo el fragmento 
  });

  document.write("<h3>Meses del año</h3>");
  $ul3.appendChild($fragment);//a el $ul3, le agregamos com hijo el fragmento
  document.body.appendChild($ul3); //con esto es una sola insercion al DOM
  //----------------------------------------fin usando fragmento ----------------------