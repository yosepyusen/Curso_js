 //para js, una etiqueta html es un elemento y nodo: ejem, comentarios de html, etiquetas, textos como tal estos spn nodos
 //hay 12 nodo en : https://developer.mozilla.org/es/docs/Web/API/Node/nodeType, ejemplo: DOCUMENT_FRAGMENT_NODE, es un nodo
 //nos interesa estos dos nodos de tipo elemento y texto: ELEMENT_NODE, TEXT_NODE
 //tipo texto, es que tiene tipo parrafo y elemento:es una etiqueta de html en particular

//metodo de traer elementos
console.log(document.getElementsByTagName("li"));//getElementsByTagName(), devuelve una coleccion de nodos y nos dice que traeme todo los elementos que por nombre etiqueta tengan ejem. todas las "li"
// console.log(document.getElementsByTagName("li"));//imprime:HTMLCollection(5) [li, li, li, li, li] , al llamar este js desde html , imprime 5 li porque en html hay 5 li, HTMLCollection: es una coleccion html

//otro metodo de traer elementos, por medio de getElementsByClassName(), o sea por nombre de clase
console.log(document.getElementsByClassName("card"));//imprime:HTMLCollection(4) [figure.card, figure.card, figure.card, figure.card], ejemplo <figure class="card">, figure tiene una clase llamda card
//