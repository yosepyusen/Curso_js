
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
            console.log(xhr); // imprime 4 veces: XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
            //esos 4 veces es porque hay 5 estados la cual el 1mero no cuenta: READY_STATE_UNINITIALIZED, READY_STATE_LOADING, READY_STATE_LOADED, READY_STATE_INTERACTIVE, READY_STATE_COMPLETE

        }); 

        //PASO N°3
        //instruccion q va abrir la peticion, pueder ser por get(accede por URL), post...
        xhr.open("GET","https://jsonplaceholder.typicode.com/users"); //primer param: es el metodo y el 2do parametro el URL, RECURSO, END POINT

        //PASO N°4
        //enviar la peticicion con send
        xhr.send();
})();