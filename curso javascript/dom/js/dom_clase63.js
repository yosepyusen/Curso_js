//dos maneras llamar los atributos y establecer los valores

//accedemos al atributo lang que tiene la etiqueta html: <html lang="en">
console.log(document.documentElement.lang);//imprime: en
//otra manera este metodo es mejor al llamar atributos
console.log(document.documentElement.getAttribute("lang"));//imprime: en

console.log(document.querySelector(".link-dom").href);//imprime: http://127.0.0.1:5500/curso%20javascript/dom/dom_clase63.html, por logica debe traer:dom_clase63.html, ya que esta dentro de href de: <a class="link-dom" href="dom_clase63.html">DOM</a>, pero a cambio trae el URL del live server
console.log(document.querySelector(".link-dom").getAttribute("href"));//imprime:dom_clase63.html , ahora si trae verdaderamente el valor del atributo href de estiqueta:<a class="link-dom" href="dom_clase63.html">DOM</a>

//establecer un nuevo valor a los atributos
document.documentElement.lang="en"
//imprimiendo el nuevo atributo de lang
console.log(document.documentElement.lang);//imprime: en, pero era: es, estos cambios solo se da en navegador

document.documentElement.setAttribute("lang","es-MX");//insertando datos con setAttribute("lang","es-MX");//"lang": el primer valor que recibe el nombre del atributo, y coma el nuevo valor:"es-MX"
//imprimiendo el nuevo atributo de lang
console.log(document.documentElement.lang);//imprime:es-MX , pero era: es, estos cambios solo se da en navegador

const linkDOM= document.querySelector(".link-dom"); //puede guardarse en un let, en este caso lo guardo en un const, porque mircha usa estas variables para guardar elementos del dom como constantes, es decir...
//si yo le cambio dinamicamente con js, le agrego estilos, cambio atributos, pero va ser siendo el mismo dom de la aplicacion, por eso esto: linkDOM= document.querySelector(".link-dom"); , se gurada en constantes,
//los arreglos y objetos los puedes guardar en const y se puede modificar cosas que tengan adentro, pero en caso de los arreglos y objetos const no va validar de que algo cambie dentro del objeto
//mientras que guardo variables en const y que estas variables sean valores primitivos como numeros, srting no puedo cambiar el valor de una constante,   
//en caso de los objetos y arreglos no accedemos a un valor del mismo objeto como tal sino a una referencia donde se encuentre ese valor
//aqui cuando guardamos en const, ese arreglo o objeto no cambie se mantienen arreglo o objeto

//otra forma de declarar variables de DOM, es como buena practica
const $linkDOM1 = document.querySelector(".link-dom");//otros usan con anteponiendo dolar para declarar variables de DOM ejemplo:$linkDOM, 
//caso jquery, hace referencia this de este jquery con simbolo del $

//agreamos atributos a elementos del DOM
$linkDOM1.setAttribute("target","_blank");//para que cuando dea clik en class:".link-dom" de la etiqueta a,abre una nueva ventana
$linkDOM1.setAttribute("rel","noopener");//para evitar hackeos y sea insegura es pestaña, ver mas de browser object model, para que cuando abrir una pestaña podemos controlarla
//"rel","noopener", que no hay dependencia entre la ventana que estamos abriendo y la ventana origen
$linkDOM1.setAttribute("href","https://www.youtube.com/@jonmircha");//para que cuando dea clik en class:".link-dom" de la etiqueta a, en especifico en la web escrito:DOM, lleva a un nuevo enlace con href

//validar si un atributo existe o no en elemento, usa hasAttribute(), busqueda de atributo: "rel"
console.log($linkDOM1.hasAttribute("rel",));

