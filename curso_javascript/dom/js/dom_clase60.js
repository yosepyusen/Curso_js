 //ESTE SCRIP  se puede guardar dentro de FILE js
 console.log(window);//dentro de widow esta...
 //navigator, languages, platform,location
 //dentro de Navigator encontramos userAgent:userAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64 
 //history, cuelga el historial, indexedDB:pequeña base de datos en el navegador
 //location: nos va controlar toda las partes que forma la URL, dentro de location estan host:localhos, port, protocolo, pathname...
 //localStorage:almacenamiento local, document tbm cuelga de js
 console.log(document);//mapea todo el documento html de esta file
 
 //usando speach PARA HACER HABLAR PC
 let texto="Hola, soy tu amigo friendly Jhosep";
 //hablar = (texto)=>, es arrow function
 const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
 //speechSynthesism tiene un metodo que se llama speak:habkar()
 //speak(new SpeechSynthesisUtterance(texto)), como parametro recibe un tipo de dato SpeechSynthesisUtterance
 //SpeechSynthesisUtterance(texto), es lo que recibe ese texto 
 hablar(texto); // como es una funcion tenemos que llamar y con esto hacer hablar un texto con pc 
  
 //speach sintesis hay n cantidades, para controlar la bateria de los dispositivos mobiles, ubicacion, manejo de stream, soquet
 //WEB API, es un mar y salen cada nuevas carateristicas y se van implementando en el navegador  
