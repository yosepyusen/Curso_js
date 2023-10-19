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
console.log($card.classList.contains("rotate-45"));//imprime: false