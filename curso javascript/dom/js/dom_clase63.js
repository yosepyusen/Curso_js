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
console.log(document.documentElement.lang);//imprime: en, pero era es
