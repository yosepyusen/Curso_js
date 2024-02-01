//-------------------INICIO CLASE 65  ----------------------

//class con css para cuando se programe en POO
//se puede acceder por classname o se puede acceder a un objeto especial que devuelve tipo objeto del navegador DOMTOKEN LIST(dentro estan cada una de las clases que tenga elemento en cuestion) 

const $card = document.querySelector(".card"); //selecionamos solo la 1ra clase .card del html: <figure class="card">
console.log($card);//imprime:figure.card:es como una lista dentro de ella estan todas las propiedades, en otro navegador imprime:<figure class="card">...</figure>

//acceder al valor del atributo class
console.log($card.className);//imprime:card
console.log($card.classList);//imprime:DOMTokenList ['card', value: 'card'], value=valor y tiene un elemento

//classList, tenemos un serie de metodos que ayudan a evaluar si un elemento tiene un clase en particular
console.log($card.classList.contains("rotate-45"));//imprime: false, porque no la tiene pero si hay dentro de styles, contains(devuelve un volean true o false), en caso de tener dentro de corchetes la clase indicada

//agregar una clase auxiliar de css a $card=document.querySelector(".card");
$card.classList.add("rotate-45");//cambiamos implicitamente la clase ".card" por ".rotate-45", estos cambio no se modifican en html pero si en el navegador en pestaña elementos y sale: <figure class=".rotate-45">
console.log($card.classList.contains("rotate-45"));//imprime: true , ademas se roto la imagen en el NAVEGADOR

//imprimimos el valor de del atributo $card
console.log($card.className);//ahora imprime:card rotate-45
console.log($card.classList);//imprime:DOMTokenList(2) ['card', 'rotate-45', value: 'card rotate-45'], value=valor y tiene dos elementos

$card.classList.remove("rotate-45");//quita la clase y los cambios se ven en pag web del html
console.log($card.classList.contains("rotate-45"));//imprime: false, porque le quitamos

//metodo que funciona como add y remove, funciona como palanca se llama:toggle en español, funciona como interruptor, si el elemento tiene la clase se la quita, caso que no la tiene se lo agrega
$card.classList.toggle("rotate-45");//como no tiene esta clase le agrega esta clase auxiliar
console.log($card.classList.contains("rotate-45"));//imprime: true, por que en anterior linea le agregamos

//usamos otra vez toggle
$card.classList.toggle("rotate-45");//como tiene esta clase se le quita esta clase auxiliar
console.log($card.classList.contains("rotate-45"));//ahora imprime: false
//este metodo toggle, es usado como modo de cambio a oscuro a blanco con un click en paginas webs

//reemplazando con metodo replace, una clase por otra
$card.classList.toggle("rotate-45");//añadimos esta clase ya que se quito anterior con este mismo metodo
//replace(), primer parametro es a reemplazar y la segunda es parametro es la nueva clase por la cual va ser reemplazada
$card.classList.replace("rotate-45","rotate-135");//vemos estos cambios en pag web 

//agregar o quitar varias clases al mismo tiempo, y el separador es coma
//agregamo clases a $card
$card.classList.add("opacity-80","sepia");
//vamo en Elements del navegador, dentro de la etiqueta figure y ahora la clase es: class="card rotate-135 opacity-80 sepia"
//y los cambios se ve que en la pag web, que la primera img tiene color de amarillo griseaseo

//quitar varias clases al mismo tiempo, y el separador es coma
$card.classList.remove("opacity-80","sepia");

//$card.classList.toggle("opacity-80","sepia");//este no aplica porque no togle no puede agregar dos clases a la vez
$card.classList.toggle("opacity-80");//pero uno solo si aplica
$card.classList.toggle("sepia");//pero uno solo si aplica

//------------------- CLASE 65 FIN ----------------------


