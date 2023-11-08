console.log("*************** Objeto URL (location) ******************");
console.log(location);//imprime:Location con sus metodos, location:es un objeto o url

//EJEMPLOS DE LA PROPIEDADES MAS IMPORTANTES 
//location.reload();//es para recarga la pagina si descomentamos se va cargar infinitas veces
console.log(location.origin);//imprime:http://127.0.0.1:5500 , nos da el origen y el puerto es 5500, puede cambiar el url si abrimos desde mismo carpeta como:file:// 
console.log(location.protocol);//imprime: http:
console.log(location.host);//imprime: 127.0.0.1:5500, es como el nombre del dominio, si el location punto host, hostname y por imprime vacio porque no hay servidor y host de por medio
console.log(location.hostname);//imprime:127.0.0.1,tambien como dominio pero sin puerto
console.log(location.port);//imprime:5500, es el puerto porque escucha live server
console.log(location.href);//imprime:http://127.0.0.1:5500/curso%20javascript/bom/bom_clase79.html, toda la URL completa y detecta el paso de parametros

//si tengo un ancla interna como: http://127.0.0.1:5500/curso%20javascript/bom/bom_clase79.html#contacto
//framework utilizan la parte de hash para hacer sus rutas amigables
console.log(location.hash);//imprime: con el ancla de #contacto, ya que has permite detectar el valor de url que esta despues de un hash

console.log(location.pathname);//imprime:/curso%20javascript/bom/bom_clase79.html , pathname es el archivo que estoy consultando

//tabien podemos pasar parametros por la url como:http://127.0.0.1:5500/curso%20javascript/bom/bom_clase79.html?nombre=jon&edad=35
console.log(location.search);//imprime:?nombre=jon&edad=35, este search almacena cuando pasas parametros por la url

console.log("********** Objeto Historial (history) **********");
console.log(history);//imprime:History {length: 4, scrollRestoration: 'auto', state: null}, el 4 length hace referencia cuantas paginas puedo acceder hacia atras o hacia adelante en la pestaña en la que me encontrado
//history, es como que guarda almacenamiento del historial de que me encuentro

console.log(history.length);//nos dice cuantas paginas hemos visitado
//history.forward(1);
//history.go(-3);
//history.back(2);