const $linkDOM1 = document.querySelector(".link-dom");//otros usan con anteponiendo dolar para declarar variables de DOM ejemplo:$linkDOM,

//estiquetas html nos permiten agregar estilos en linea a nuestra etiqueta , unque no es la forma mas optima

//primera forma
console.log($linkDOM1.style);//imprime:CSSStyleDeclaration , es un objeto de tipo css declaration, que es un mapa que va agregando aqui todas las propiedades css validad
//las propiedades que estan dentro de CSSStyleDeclaration , va depender del navegador qu estas usando, caso de propiedades como: webkitUserModify...
//las propiedades qe pusimos valor son:0:"background-color" , 1:"color"

//segunda forma
console.log($linkDOM1.getAttribute("style"));// imprime:background-color: #f7df1e; color: #222; , esto aparece porque esto esta escrito en html 64 en la etiqueta a
 
//acceder a una propiedad en particular
console.log($linkDOM1.style.backgroundColor);//imprime: rgb(247, 223, 30), este es formato que usa el navegador pero nosotro pusimos en html: #f7df1e
console.log($linkDOM1.style.color);//imprime: rgb(34, 34, 34), este es formato que usa el navegador pero nosotro pusimos en html: #222

//ventana de mostrar propiedades css, o propiedades dinamicas parte de web api de navegadores y se accede...
console.log(window.getComputedStyle($linkDOM1));//imprime: CSSStyleDeclaration, vemos que cada propiedad asigna a un indice y tiene un orden alfabetica, ejem:0: 'accent-color', 0:es el index y 'accent-color':es la propiedad, tambien al abrir abre toda las propiedades disponibles
//los getComputedStyle: tienen que ver con las propiedades que esta afectando directamente el navegador 

//acceder a una propiedad en particular ejemplo
console.log(getComputedStyle($linkDOM1).getPropertyValue("color"));//imprime:rgb(34, 34, 34) , como es un metodo que cuelga de window no es necesario poner window

//establecer valores, dando estilos de manera dinamica
$linkDOM1.style.setProperty("text-decoration","none");//quitamos el subrayado de estiqueta: a, se quita el subrayado de DOM
$linkDOM1.style.setProperty("display","block");//convertimos en elemento de bloque de estiqueta: a, subraya todo el espaciado de DOM
$linkDOM1.style.width="50%"; //todo el bloque lo que era se convierte en la mitad del html, ademas $linkDOM1=document.querySelector(".link-dom");, es una variable selecionado de DOM
$linkDOM1.style.textAlign="center";//alineamos en el centro la etiqueta a de la linea 37 del html: dom_clase64.html
$linkDOM1.style.marginLeft="auto"; //para que se centre la caja
$linkDOM1.style.marginRight="auto"; //para que se centre la caja
$linkDOM1.style.padding="1rem";//Si en la web no especificamos nada, el tamaño de la fuente o font-size es de 16px. Esto quiere decir que por defecto, 1 rem equivale a 16px en todo el documento. pero en este caso se aplica al padding
$linkDOM1.style.borderRadius="0.5rem";//1rem= 16px, 0.5rem=8px

console.log($linkDOM1.getAttribute("style"));// ahora imprime:background-color: rgb(247, 223, 30); color: rgb(34, 34, 34); text-decoration: none; display: block; width: 50%; text-align: center; margin-left: auto; margin-right: auto; padding: 1rem; border-radius: 0.5rem;, es mas grande los estilos pq le agregamos
//CSSStyleDeclaration , tiene sus propiedades vacios, mientra lo añadimos va agregando los valores, hasta ahora hay 18 propiedades con sus valores

console.log(getComputedStyle($linkDOM1));//imprime:CSSStyleDeclaration , para ver algunas de sus propiedades tienen sus valores y se va llenando conforme lo añadimos los estilos dinamicamente y esta mapeando tal como interpreta tanto valores como propiedades

//variables CSS- Custom Properties CSS, dentro etiqueta script del html dom_clase64.html, ingresamos los estilos
//accediendo a las propiedades css
const $html = document.documentElement, //$html:este elemento representa la etiqueta html
$body = document.body;

//creamos una variable para cada custom propertie, y accedo a las propiedades mapeadas con getComputedStyle, de $html y para acceder a getPropertyValue al valor
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), 
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
//varDarkColor y varYellowColor, no tienen dolar por que son variables normales que almacenan un color

console.log(varDarkColor, varYellowColor); //imprime:#222 #f7df1e, con esto accedimos a las variables css

//aplicar estilos con ayuda de variables
$body.style.backgroundColor = varDarkColor; //al $body(etiqueta body del html) en su elemento style aplicamos estilo backgroundColor(color del cuerpo), y asignamos varDarkColor(color oscuro=#222)
$body.style.color = varYellowColor; //al $body en su elemento  style aplicamos color(color de letra), y asignamos varYellowColor(color amarrilo=#f7df1e;)

//modificar algunas de las variables

//en la variable --dark-color, ahora se le añade valor "pink"
$html.style.setProperty("--dark-color","pink");//aparentemente no pasa nada pero aplica en: <html lang="es" style="--dark-color: pink;"> 
//ahora obtenemos el nuevo valor de --dark-color que es:"pink" 
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");//seleccionamos con getComputedStyle el elemento $html y getPropertyValue, obtenemos el valor de "--dark-color"

//pasamos el nuevo valor con setProperty de --dark-color a background-color
$body.style.setProperty("background-color",varDarkColor); //background-color, es el estilo que le dimos en el html dentro de etiqueta body en linea 41 del dicho html
//cambiamos otra vez 
$body.style.setProperty("color","purple");