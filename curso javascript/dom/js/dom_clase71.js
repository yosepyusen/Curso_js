// .insertAdjacent(inserta de manera adyacente)... 
//   .insertAdjacentElement(position, el) //esto seria como appendchil, inssertbefore, recibe dos parametros uno es posicion y el:elemento
//   .insertAdjacentHTML(position, html)//esto vendria ser como un innerHTML, recibe dos parametros uno es posicion y html:cos. html
//   .insertAdjacentText(position, text)//esto vendria a ser como un textcontent, recibe dos parametros uno es posicion y text:contenido textual

// Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)

const $cards = document.querySelector(".cards"),//seleccionamos la clase .cards del html
$newCard = document.createElement("figure");

//para agregar elemento dinamico usamos a parte de apendChild
//con innerHTML no es la mejor forma de agregar tarjetas, el optimo forma es usar fragmentos, con templates o create template
$newCard.innerHTML = ` 
    <img src="https://picsum.photos/640/360" alt="Fotos">
    <figcaption>Fotos</figcaption>
`;

$newCard.classList.add("card");//añdimos la clase .card, dentro de la etiqueta figure

//beforebegin:hermano anterior que estaria la etiqueta <a href="dom_clase63.html">DOM</a>, de html, usamos insertAdjacentElement porque van insertar un nodo html, el nodo de referencia $cards la cabecera
//COMENTANDO...
//$cards.insertAdjacentElement("beforebegin",$newCard); //con esto podemos ver que la tarjeta se inserto antes de la seccion con clase .card y despues de la etiqueta <a href="dom_clase63.html">DOM</a>
//$cards.insertAdjacentElement("afterbegin",$newCard);//inserta antes de toda las imgs de la seccion, porque afterbegin es primer hijo y en total hay 6 imgs
//$cards.insertAdjacentElement("beforeend",$newCard);//inserta en el ultimo de toda las imgs de la seccion porque beforeend, es el ultimo hijo
$cards.insertAdjacentElement("afterend",$newCard);//inserta despues de la etiqueta seccion de tarjetas, porque es hermano siguiente el afterend

//USANDO insertAdjacentHTML
let $contenCard= ` 
    <img src="https://picsum.photos/640/360" alt="Fotos">
    <figcaption></figcaption>
`;

const $newcard1 = document.createElement("figure");
$newcard1.classList.add("card");//añdimos la clase .card, dentro de la etiqueta figure

$newcard1.insertAdjacentHTML("beforeend",$contenCard);//primero tomamos refrencia clase $newcard1, y con insertAdjacentHTML porque el $contenCard es cod. html y puede ser afterbegin o beforeend, daria lo mismo porque el elemento esta vacio ; cambio afterend ó beforebegin: no aparece la img 
$newcard1.querySelector("figcaption").insertAdjacentText("afterbegin","Fotos");//como la figcaption esta vacia daria lo mismo si pongo afterbegin, beforeend, dentro de () de insertAdjacent y ponemos el texto de figcaption, tomamos referencia la $newcard1 y seleccionamos con querySelector la etiqueta figcaption
$cards.insertAdjacentElement("afterbegin",$newcard1);//inserta antes de toda las imgs de la seccion pero sin texto de la figcaption, porque afterbegin es primer hijo y en total hay 6 imgs

