//recorriendo el DOM

//METODO PARA ELEMENTOS PARA DOM y hay 12 nodos en Node.nodeType

const $cards = document.querySelector(".cards"); //seleccionamos la clase: class="cards"
console.log($cards);//imprime todo lo que hay dentro de la etiqueta: <section class="cards">...</section>

//para hacer referencia a sus hijos
console.log($cards.children);//devuelve una coleccion html:HTMLCollection(5) [figure.card, figure.card, figure.card, figure.card, figure.card]

//acceder a un hijo en particular
console.log($cards.children[2]);//usamos [], notacion de arreglos para acceder <figure class="card"> que envuelve a etiqueta: <figcaption>Humano</figcaption>


