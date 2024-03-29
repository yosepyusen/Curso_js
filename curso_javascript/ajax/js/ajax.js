//clase 107
//******************************************** usando: XMLHttpRequest --- inicio ****************************/
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
                //console.log(json); // lo interpreta como array de 10 elementos

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

            //console.log("mensaje ejecutar si o si independiente de q tiene exito o no el XHR");
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
//******************************************** XMLHttpRequest --- fin ****************************/

//clase 108
//******************************************** Fetch API --- fin ****************************/
(()=>{
    const $fetch = document.getElementById("fetch"), //obtenemos el id de la etiqueta ol con id fetch
        $fragment = document.createDocumentFragment();//para hacer una sola insercion en el dom
    
    fetch("./assets/users.json") //puede usarse el url:https://jsonplaceholder.typicode.com/users o file: ./assets/users.json
    /******  PRIMERA FORMA Y PRIMER THEN *******
    .then( rpta =>{ //fetch(mecanismo q trabaja con promesas:then y catch), ponemos un 2do parametro como opcion(metodo,cabecera...)
        //catch espera recibir la respuesta
        //console.log(rpta);//imprime:Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}, ok es cuando no hay error y sale a true
        
        //la rpta lo convertimos en un formato valido con: rpta.json();      
        //return rpta.text(); //retorna en formato texto el json
        
        //validamos cuando haya error vaya directo al catch
        return rpta.ok ? rpta.json(): Promise.reject(rpta); //el body de Response es ReadableStream, para convertir rpta(ReadableStream) a json(ponemos .json()), si deseamos convertir a texto si recibimos cod. html con .text(), o blob, para q no son texto 
        //como la respuesta en este caso espero recibir un dato json ejecuto metodo .json() de la URL
        //si la respuesta en su parametro ok es verdad a true, entonces pasate al sig. then y convierte la rpta en json,
        //caso contrario rechaza la peticion: Promise.reject()

    })//este primer then se puede ejecutar en una sola liea de cod.*/
    /*******  SEGUNDA FORMA Y PRIMER THEN *********/
    .then((rpta)=> rpta.ok ? rpta.json(): Promise.reject(rpta))

    //SEGUNDO THEN 
    .then( json =>{
        //console.log(json); //imprime un array con 10 datos ya que convertimos con: return rpta.json();
        //$fetch.innerHTML = json; //cuando queremos pegar dentro de la etiqueta html, la info convertido en texto:return rpta.text()
        
        json.forEach(e => { //por cada elemento:"e" del json
            const $li = document.createElement("li");
            $li.innerHTML = ` ${e.name} -- ${e.email} -- ${e.phone}`; //al contenido del del etiqueta "li", ponemos el nombre, email, phone
            $fragment.appendChild($li);//a ese variable le agregamos li que se a creado con appendChild
        });

        $fetch.appendChild($fragment);//dentro de la etiqueta ol insertamos el fragmento, una sola insercio del DOM
        
    })
    .catch(err=>{
        //catch espera recibir el error
        //console.log("Estamos en el catch",err);//imprime: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/user', redirected: false, status: 404, ok: false, …}, y el ok es falso porque hay error(404)
        
        let message = err.statusText || "Ocurrió un error";// statusText es una propiedad dentro de err, que tiene como valor:"Not Found", pero en caso que esta vacio va imprimir: "Ocurrió un error"
        $fetch.innerHTML = `Error ${err.status}: ${message}`;//imprime: Error 404: Ocurrió un error
    })
    .finally(()=>{
        //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch");
    }
         ); 
   
})();

//clase 109
//USANDO API DE FETCH CON ASYNC
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){ //funcion declarada
        
        try{

            //antes q ejecute la sig. linea de cod. espere
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),//res va hacer peticion a ese api de fetch, tbm se puede usar fet("./assets/users.json")
                json = await res.json(); //json estaria esperando la rpta(res), json es para que convierta a json, y await para q ejecute la sig. linea de cod. una vez terminado este linea de cod. o termina de convertir los datos

                //comentamos...
                //console.log("respuesta y json")
                //console.log(res,json);//imprime, res:Response y json: array de 10 datos, caso q es erro un array vacio
                
                //1ra forma
                //para manipular el error; res.ok viene en true(no hay error), con ! negamos o sea que es diferente a true,  false(hay err)
                //if(!res.ok) throw new Error("Ocurrió un erorr al solicitar los Datos");//throw: para volver a lanzar una excepción después de cogerla 
                
                //2da forma
                //throw es como un return q envia flujo de la programacion al catch, el Error(), solo recibe msjes y no objeto
                if(!res.ok) throw { status: res.status, statusText: res.statusText} //vas a tener propiedad status con valor de status de la variable "res"...
                

                json.forEach(e => { //por cada elemento:"e" del json
                    const $li = document.createElement("li");
                    $li.innerHTML = ` ${e.name} -- ${e.email} -- ${e.phone}`; //al contenido del del etiqueta "li", ponemos el nombre, email, phone
                    $fragment.appendChild($li);//a ese variable le agregamos li que se a creado con appendChild
                });
        
                $fetchAsync.appendChild($fragment);//dentro de la etiqueta ol insertamos el fragmento, una sola insercio del DOM

        }catch (err){

            //comentamos ....
            //console.log(err);
            let message = err.statusText || "Ocurrió un error";//imptime: {status: 404, statusText: ''} y el statusText es una propiedad de err 
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;//imprime: Error 404: Ocurrió un error, dentro del html por el innerHTML

        }finally{
            //comentamos ....
            //console.log("Esto se ejecutará independientemente del resultado del try--catch-async");
        }   
    }

    getData();//ejecutamos la funcion

})();

//clase 110
//USANDO AXIOS
//este axios funciona  con mandar llamar la libreria axios en el html con el script
(()=>{

    const $axios = document.getElementById("axios"), //obtenemos el id(axios) de la etiqueta ol 
    $fragment = document.createDocumentFragment();

    // en la variable se llama axios
    axios.get("https://jsonplaceholder.typicode.com/users") //se puede usar : ./assets/users.json
    .then(res=>{

        //comentamos ....
        //console.log(res); //imprime: {data: Array(10), status: 200, statusText: '', headers: le, config: {…}, …} . donde el metodo q envies es get, ademas la data(array de 10 datos) estan parseados
        //usa request: XMLHttpRequest, tbm manda statusText, status...
        
        let json = res.data; // q guarde todo los datos que estan dentro de la propiedad "data", y esta data a su vez esta contenido en res

        json.forEach(e => { //por cada elemento:"e" del json
            const $li = document.createElement("li");
            $li.innerHTML = ` ${e.name} -- ${e.email} -- ${e.phone}`; //al contenido del del etiqueta "li", ponemos el nombre, email, phone
            $fragment.appendChild($li);//a ese variable le agregamos li que se a creado con appendChild
        });

        $axios.appendChild($fragment);//dentro de la etiqueta ol insertamos el fragmento, una sola insercio del DOM

    })
    .catch((err)=>{

        //comentamos ....
        //console.log("Estamos en el catch",err.response);//dentro de err hay una propiedad reponse
        
        let message = err.response.statusText || "Ocurrió un error";//el err: es el objeto y statusText es una propiedad dentro de response y asu vez este esta dentro de err 
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;//imprime: Error 404: Ocurrió un error, dentro de axios del html por el innerHTML

    })
    .finally(()=>{

        //comentamos ....
        //console.log("Esto se ejecutará independientemente del resultado del axios");

    });

})();

//clase 110
//USANDO AXIOS CON FUNCIONES ASYNC
(()=>{

    const $axiosAsync = document.getElementById("axios-async"), //obtenemos el id(axios) de la etiqueta ol 
    $fragment = document.createDocumentFragment();

    async function getData(){

        try{

            //url: tambien se puede usar, en axios.get(""./assets/users.json"")
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),//res va hacer peticion a ese api con axios y get
            json = await res.data; //espera a q axios nos devuelva el objeto parseado de la data, q es un atributo de res

            //comentamos...
            //console.log(res,json);

            json.forEach(e => { //por cada elemento:"e" del json
                const $li = document.createElement("li");
                $li.innerHTML = ` ${e.name} -- ${e.email} -- ${e.phone}`; //al contenido del del etiqueta "li", ponemos el nombre, email, phone
                $fragment.appendChild($li);//a ese variable le agregamos li que se a creado con appendChild
            });

            $axiosAsync.appendChild($fragment);//dentro de la etiqueta ol insertamos el fragmento, una sola insercio del DOM

        }catch (err){

            //comentamos ....
            //console.log("Estamos en el catch",err.response);//dentro de err hay una propiedad reponse
            
            let message = err.response.statusText || "Ocurrió un error";//el err: es el objeto y statusText es una propiedad dentro de response y asu vez este esta dentro de err, 
            //si "err.response.statusText", viene vacio, entonces pone: "Ocurrió un error" 
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;//imprime: Error 404: Ocurrió un error, dentro de axios del html por el innerHTML

        }finally{
            console.log("Esto se ejecutará independientemente del resultado del axios-async");
        }
    }

    getData();//ejecutamos la funcion asinc declarada

})();