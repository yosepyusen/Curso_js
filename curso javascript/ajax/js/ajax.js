
//creamos una funcion anonima auto ejecutable
(()=>{ //encapsulamos o clausurar

    //peticion de ajax son 4 pasos
    //PASO N°1
    const xhr = new XMLHttpRequest(), //xhr, va ser un nuevo objeto de XMLHttpRequest
        $xhr = document.getElementById("xhr"), //obtenemos el id de la etiqueta ol
        $fragment = document.createDocumentFragment();

        //console.log(xhr); //imprime: XMLHttpRequest con sus propiedades, entre ellos los mas importantes: onreadystatechange
        //readyState:0 , inicializado | response:respuesta q va devolver el servidor | responseText: rpta en formato texto | responseXML:rpta en formato xml
        //status; cod. de rpta del servidor, puede ser 200 , 400... | withCredentials: api publica cuando dice false

        //primera forma de asignar
        //xhr.onreadystatechange = asignar una funcion ; 

        //PASO N°2
        //segundo forma 
        xhr.addEventListener("readystatechange", e => {  //readystatechange, se lanza cuando detecta cualquier cambio, cuando hay error, abortado, completado,...
            
            //console.log(xhr); // imprime 4 veces: XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
            //esos 4 veces es porque hay 5 estados la cual el 1mero no cuenta: READY_STATE_UNINITIALIZED, READY_STATE_LOADING, READY_STATE_LOADED, READY_STATE_INTERACTIVE, READY_STATE_COMPLETE
            
            if(xhr.readyState !== 4) return; //cuando el readyState del xhr sea diferente de 4
                
                //console.log(xhr);//ahora solo imprime un XMLHttpRequest y en pestaña network debe de salir 200, que es un cod. de ok , 404 es de not found
                //ademas es un json responseText:"[\n  {\n.. , del XMLHttpRequest 
                /*
                Respuestas informativas (100 - 199)
                Respuestas satisfactorias ( 200 - 299) , este mas nos interesa
                Mensajes de redireccionamiento ( 300 - 399)
                Respuestas de error del cliente ( 400 - 499)
                Respuestas de error del servidor ( 500 - 599)
                */
            if(xhr.status >= 200 && xhr.status < 300) { ; //cuando el xhr.status es mayor a 200 y menor a 300
                
                //console.log("exito"); //saldra cuando la url este bien
                //console.log(xhr.responseText); //imprime todo los datos en formato json del url
                //$xhr.innerHTML = xhr.responseText; //con esto pondriamos todo los datos en la pagina en formato json
                let json = JSON.parse(xhr.responseText); //JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.
                console.log(json); // lo interpreta como array de 10 elementos

                json.forEach(e => { //por cada elemento:"e" del json
                    const $li = document.createElement("li");
                    $li.innerHTML = ` ${e.name} -- ${e.email} -- ${e.phone}`; //al contenido del del etiqueta "li", ponemos el nombre, email, phone
                    $fragment.appendChild($li);//a ese variable le agregamos li que se a creado con appendChild
                });

                $xhr.appendChild($fragment);//dentro de la etiqueta ol insertamos el fragmento, una sola insercio del DOM
                
            }else{
                console.log("error");//cuando el url esta mal
                //si fuera en servidor, la propiedad statusText del(XMLHttpRequest) no vendria vacio sino dice como "not found"
                let message = xhr.statusText || "Ocurrió un error"; //si el statusText viene vacio Ó ponemos el mensaje Ocurrio un error
                $xhr.innerHTML = `Error ${xhr.status}: ${message}`; //imprimimos el status q en este caso es 404 o not found
            }

            console.log("mensaje ejecutar si o si independiente de q tiene exito o no el XHR");
        }); 

        //PASO N°3
        //instruccion q va abrir la peticion, pueder ser por get(accede por URL), post...
        
        //PETICION EXTERNA O INTERNA SE PUEDE HACER
        //xhr.open("GET","https://jsonplaceholder.typicode.com/users"); //primer param: es el metodo y el 2do parametro el URL, RECURSO, END POINT
        xhr.open("GET","./assets/users.json");

        //PASO N°4
        //enviar la peticicion con send
        xhr.send();
})();