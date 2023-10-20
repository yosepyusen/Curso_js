//recorriendo el DOM

//METODO PARA ELEMENTOS PARA DOM y hay 12 nodos en Node.nodeType

const $cards = document.querySelector(".cards"); //seleccionamos la clase: class="cards"
console.log($cards);//imprime todo lo que hay dentro de la etiqueta: <section class="cards">...</section>

//para hacer referencia a sus hijos, elementos, 
console.log($cards.children);//devuelve una coleccion html:HTMLCollection(5) [figure.card, figure.card, figure.card, figure.card, figure.card]
console.log("accediendo a childNodes");
console.log($cards.childNodes);//imprime:NodeList(11) [text, figure.card, text, figure.card, text, figure.card, text, figure.card, text, figure.card, text], es un nodo de 11 listas, y hace referencia a nodos hijos

console.log("acceder a un hijo en particular");
console.log($cards.children[2]);//usamos [], notacion de arreglos para acceder <figure class="card"> que envuelve a etiqueta: <figcaption>Humano</figcaption>

//parentElement, retorna el elemento padre, parentNode(nodo padre): retorna el padre, en este caso trabajamos con elementos, ya que una etiqueta es un elemento en html en el DOM
console.log($cards.parentElement);//imprime:<body>...</body>
//console.log($cards.parentNode);//imprime:<body>...</body>

//accedemos al primer hijo nodo
console.log("primer nodo");
console.log($cards.firstChild);//es como el primer nodo(ver dom_clase67.html, en linea 83),imprime:#text, nos dice que es un nodo de tipo texto, dentro #text hay una propiedad: textContent:"\n        ", que significa esos saltos de linea de html indicada en linea 69 del html

//accedemos al elemento del primer hijo nodo
console.log("primer elemento del nodo");
console.log($cards.firstElementChild);//imprime: <figure class="card">, que es la primer tarjeta "Animal"

//accedemos al ultimo hijo nodo
console.log("ultimo nodo");
console.log($cards.lastChild);//imprime: #text, es como un espaciado y salto de linea que hay para llegar de: etiqueta </figure> a la etiqueta </section>   

//accedemos al elemento del ultimo hijo nodo
console.log("ultimo elemento del nodo");
console.log($cards.lastElementChild);//imprime: <figure class="card">, que es la ultima tarjeta "HumanoUno"
 
//<section class="cards">...</section>, esto es la seccion card, su hermano anterior es la etiqueta: <a class="link-dom" ...>DOM</a> y su hermano posterior la etiqueta <script src="js/dom_clase67.js"></script>

//para el anterior hermano usamos
console.log("para el anterior hermano");
console.log($cards.previousSibling);//imprime:#text, porque es el espacio de la intentacion entre el enlace(etiqueta <a>) y la etiqueta <seccion> 
//para el anterior elemento hermano usamos
console.log($cards.previousElementSibling);//imprime:<a class="link-dom">DOM</a>, porque es el anterior hijo elemento

//para el siguiente hermano usamos
console.log("para el siguiente hermano");
console.log($cards.nextSibling);//imprime: #text, es el espacio de intentacion, el salto de linea entre el cierre del </section> y la etiqueta <script> 
//para el siguiente elemento hermano usamos
console.log($cards.nextElementSibling);//imprime:<script src="js/dom_clase67.js"></script>

//metodo closest, con esto buscamos el ancestro(padre mas cercano, es decir hacia afuera, del tipo de selector que le demos)
console.log($cards.closest("div"));//imprime: null, porque mas arriba no hay div en el html, el ancestro directo es la etiqueta body y la etiqueta html
console.log($cards.closest("body"));//imprime:,<body>...</body>, el body mas sercano da 

//si me fuera a una tarjetas hijas
console.log("usando closest");
console.log($cards.children[3].closest("section"));//imprime:<section class="cards">...</section> , $cards.children[3]: tomando como referencia el tercer hijo(el tercer hijo es una etiqueta <figure>), closest("secction"): con esto le decimos cual es la etiqueta seccion ancestro mas sercana


