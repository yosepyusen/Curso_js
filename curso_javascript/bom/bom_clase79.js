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

console.log(history.length);//nos dice cuantas paginas hemos visitado, este numero va aumentando segun vayas navegando en la pagina
//history.back(3);//es para retroceder tres navegaciones atras en una misma ventana del navegador
//history.forward(1);//es para ir cuantas paginas quieres ir adelante, cuando ya hayas a vuelto con history.back

//los de ir hacia atras seria valores negativos y positivos cuando vas adelante, asi usa go
//history.go(-3);//con esto le decimos tre paginas hacia atras, desde el mismo navegacion, usamos # positivo para ir en adelante del historial del mismo ventana abierto o ir atras con numeros negativos

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);//imprime: Navigator con sus metodos ya que es un objeto, y con ello se puede iteracruar con el bluetoo, clipboard(que seleccionamos),geolocation, userAgent(para ver si viene de un dispositivo o de pc)...
console.log(navigator.connection);//imprime: NetworkInformation, nos da cierta informacion de la conecion, como si es 4g, pero va depender que navegadores lo soporta, en este caso brave no aparece 
console.log(navigator.geolocation);//imprime:Geolocation{}
console.log(navigator.mediaDevices);//imprime:MediaDevices {ondevicechange: null}, para acceder a camaras y microfono
console.log(navigator.mimeTypes);//imprime:MimeTypeArray , son formatos que dependiendo de tipo de app, soportan los navegadores web(chrome,firefox...), como application/pdf...
console.log(navigator.onLine);//imprime:true, navegador tienen eventos para detectar cuando el usuario pierde la conexion o la vuelve a recuperar 
console.log(navigator.serviceWorker);//imprime:ServiceWorkerContainer..., es un api, para convertir un simple sitio web en una app instalable como aplicacion escritorio 
console.log(navigator.storage);//imprime:StorageManager..., que es el web de almacenamiento, ya sea webStorage o localStorage
console.log(navigator.usb);//imprime:USB , capacidad de detectar dispositivos usb, cuando conectan o desconectan
console.log(navigator.userAgent); //imprime:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 , nos da mucha info. sobre la plataforma, navegador que se esta conectando a nuestra aplicacion
