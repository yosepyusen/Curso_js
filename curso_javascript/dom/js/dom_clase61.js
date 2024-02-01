console.log("******************** Elementos del documento ********************");
console.log(window.document); //con esto mostramos todo el codigo html, el dom completo
console.log(document);//tbm se puede imprimir solo document y ya no window
console.log(document.head);//imprime: todo lo que hay dentro cabeza:head de doc html 
console.log(document.body);//imprime: todo lo que hay dentro del body del html
console.log(document.documentElement);//imprime: el cuerpo dentro de html
console.log(document.doctype);//imprime:<!DOCTYPE html> , esto es desde a partir hmtl5
console.log(document.characterSet);//imprime:UTF-8
console.log(document.title);//imprime:Document , el titulo
console.log(document.links);//imprime:HTMLCollection [], coleccion de html, estos nodos de elementos de dom no son arreglos y por tal no comparte todo los metodos de arreglos, de esto es que trae los links
//para HTMLCollection [], sea un arreglo primero tengo que guardar dentro de un arreglo, 
//HTMLCollection [],, tiene: [[Prototype]]: HTMLCollection, se parece a un arreglo pero no es
console.log(document.images);//imprime:HTMLCollection [], los imagenes en formato de links
console.log(document.forms);//imprime:HTMLCollection [], los formularios que existen
console.log(document.styleSheets);//para acceder a coleccion que representa las hojas  de estilo enlazadas del documento
console.log(document.scripts);//para acceder a script de programacion, imprime: HTMLCollection [script], y hay dos script en html que llama aeste file js
//aprecen dos script porque inyecto una etiqueta script:<!-- Code injected by live-server -->, esto es por el servidor del tiempo real, por eso muestra 2 script

setTimeout(()=>{
    console.log(document.getSelection().toString());//imprime: vacio en esa linea de cod. cuando no selecionas nada de pagina web, es un metodo:getSelection(), y para poder mostrar a cadena de texto,hay que convertirlo y decimos:toString()
},3000)//despues de 3000 milisegundos se va ejecutar al momento de seleccionar algo de la pagina web

//escribir en el documento
document.write("<h2>Hola mundo desde el DOM</h2>");//esto metodo escritura js soportan html, y se escribe en parte ultima del html que llama a este js
//en la pestaña elements: despues de <script src="js/dom_clase61.js">, imprime:h2>Hola mundo desde el DOM</h2>, como si fuera estar escrito dentro de file html
 