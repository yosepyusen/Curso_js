 //para js, una etiqueta html es un elemento y nodo: ejem, comentarios de html, etiquetas, textos como tal estos spn nodos
 //hay 12 nodo en : https://developer.mozilla.org/es/docs/Web/API/Node/nodeType, ejemplo: DOCUMENT_FRAGMENT_NODE, es un nodo
 //nos interesa estos dos nodos de tipo elemento y texto: ELEMENT_NODE, TEXT_NODE
 //tipo texto, es que tiene tipo parrafo y elemento:es una etiqueta de html en particular

//metodo de traer elementos
console.log(document.getElementsByTagName("li"));//getElementsByTagName(), devuelve una coleccion de nodos y nos dice que traeme todo los elementos que por nombre etiqueta tengan ejem. todas las "li"
// console.log(document.getElementsByTagName("li"));//imprime:HTMLCollection(6) [li, li, li, li, li, li] , al llamar este js desde html , imprime 6 li porque en html hay 6 li, HTMLCollection: es una coleccion html

//otro metodo de traer elementos, por medio de getElementsByClassName(), o sea por nombre de clase
console.log(document.getElementsByClassName("card"));//imprime:HTMLCollection(4) [figure.card, figure.card, figure.card, figure.card], ejemplo <figure class="card">, figure tiene una clase llamda card
console.log(document.getElementsByName("nombre"));//imprime: NodeList [input], ya que <input name="nombre">, dentro del input tiene name="nombre"
console.log(document.getElementById("menu"));//imprime:<nav id="menu"></nav>, es una etiqueta que busca id="menu", que esta dentro de etiqueta nav 
//getElementById, es en singular porque son identificadores, selectores, es decir son únicos, como id

//getElementsByTagName(), getElementsByClassName(), getElementsByName() , estos tres han sido reemplazado por dos metodos, el 1ro querySelector y querySelectorAll

//buscando todo id de html
console.log(document.querySelector("#menu"));//imprime:<nav id="menu"></nav> ,si es id que va recibir se pone #
//querySelector, espera que va recibir un id o name dentro de corchetes, es decir va recibir un selector valido de css 
//querySelector(), recibe un parametro, un selector valido de css, es decir un id, clase, etiqueta html que este de cierto clase o cierto id
//pero ya no seria necesario getElementById(), ya que usaria querySelector(), esto es falso porque a nivel de rendimiento el metodo querySelector, es mas lento que el metodo getElementById, ya que querySelector analiza el texto que...
//mandas dentro de su parentesis de querySelector, para saber si es ID, es una clase y si es una etiqueta html

//buscando el primer enlaces de html
console.log(document.querySelector("a"));//imprime: <a href="#">Sección 1</a>, querySelector trae el primer selector del tipo que has especificado que ha encontrado en doc. html

//buscando todo enlaces de html
console.log(document.querySelectorAll("a"));//imprime: NodeList(6) [a, a, a, a, a, a.link-dom], todo los etiquetas con a  de html que encuentra en total son 6, NodeList(6), es una lista y no arreglo
console.log(document.querySelectorAll("a").length);//imprime: 6 , porque es el tamaño 
document.querySelectorAll("a").forEach(el =>console.log(el));//imprime:las 5 secciones de a y el link de DOM , traeme todo los enlaces con querySelectorAll de etiquetas a, .forEach(el =>console.log(el)) :por cada enlace imprime el cod. html de ese enlace en consola

//traendo la clase: card
console.warn("traendo clase:card");
console.log(document.querySelector(".card"));//imprime: <figure class="card">, es la primera estiqueta con clase .card
console.log(document.querySelectorAll(".card"));//imprime: NodeList(4) [figure.card, figure.card, figure.card, figure.card], trae todas las car y imprime en consola que son 4 etiquetas figure que tienen clase.card
//para acceder a la tercera tarjeta , ya que 1mer posicion cero
console.log(document.querySelectorAll(".card")[2]);//imprime: <figure class="card">, de la tercera posicion de figure: Humano

//traer solo un li dentro de menu
console.log(document.querySelector("#menu li"));//imprime: <li><a href="#">Sección 1</a></li>
//traer todo los li dentro de menu
console.log(document.querySelectorAll("#menu li"));//imprime: NodeList(5) [li, li, li, li, li], que me traiga solamente las li que estan dentro de menu y son 5 y un li esta fuera de menu en total son 6 lis