

const d = document;

function contacForm(){
    const $form = d.querySelector(".contact_form"), //obtenemos el formulario con la clase: .contact_form html
        $inputs = d.querySelectorAll(".contact_form [required]"); //traeme todo los elementos dentro del formulario que contengan el atributo required

    // comentamos la sig. linea a modo de aprendizaje
    //console.log($inputs); //imprime:NodeList(4) [input, input, input, textarea]

    $inputs.forEach(input=>{//por cada input 
        const $span = d.createElement("span"); //creamos una etiqueta span
        $span.id = input.name; //creamos atributo id de span y el valor de input del html de su propiedad name le asignamos
        //ejemplo:en 1mer input en su propiedad name="name", el name se va agregar al id del span
        
        //despues agregamos una lista de clases, previamente creada en el css: .contact-form-error"
        $span.classList.add("contact-form-error","none"); //ademas de ello aplique el estilo .none tbm creada en css

        //el mensaje de error se va obtener del title ejem: <input ... title="Nombre sólo acepta letras y espacios en blanco">
        $span.textContent = input.title; // a este span ponle en su propiedad textcontend lo ve venga en el atributo title del input:input.title
        input.insertAdjacentElement("afterend",$span); //inserta el espan de manera adjacente en el hrno siguiente:afterend
    });

    //las validaciones se puede hacer en el momento que pulse el boton submit o al momento que el usuario va escribiendo
    d.addEventListener("keyup", (e)=>{//keyup:al momento que levante la tecla o suelta
    
        if(e.target.matches(".contact_form [required]")){  //se ejecuta el evento cuando el e.target.matches coincidad un elemento que esta dentro del formulario con el atributo required
            let $input = e.target, //elementos que originan el evento 
            
            pattern = $input.pattern || $input.dataset.pattern;//cada input tiene su propio patron, bien valida $input.pattern(para inputs) o $input.dataset.pattern(para textarea)
            //input.pattern:del input traete el atributo patern
            //$input.dataset.patern, lista completa de data-atribute de atributos del input esta en dataset y luego el nombre del atributo patern
            
            //el input de ASUNTO A TRATAR Y EL TEXTAREA, no tienen patern y comentamos porque se uso a modo de aprendizaje
            //console.log($input, pattern);// con esto imprime la etiqueta: input con todo sus atributos ejem: <input type="text" ... required>
            
            //tenemos 2 formas de validar
            
            if(pattern && $input.value !==""){  //primer caso: cuado tienen atributo patern y cuando el valor del input sea diferente de nada(para el text area y los demas inputs)
                //console.log("El input tiene patrón");//a modo de aprendizaje
                
                let regex = new RegExp(pattern); //creamos un regulacion expresion, para validaciones donde interno de pattern tiene un regExp para validar 
                
                return !regex.exec($input.value)  //si la expresion en regex, no valida lo que viene de valor del input 
                //con e.target.value($input.value): sacamos lo que escribe en la pag web dentro del input
                //exec es metodo para ejecutar y mostrar todo atributos del regex:expresion regular    
                
                ? d.getElementById($input.name).classList.add("is-active") //parte verdadera, $input.name:con esto capturamos el id del span q s creo dinamicamente
                : d.getElementById($input.name).classList.remove("is-active")//parte falsa, aca removemos la clase
            }

            if(!pattern){ //2do caso cuando no tienen patron o atributo patern
                // console.log("El input NO tiene patrón");
                return $input.value == "" //cuando escribe dentro del input, mas q todo es para el asunto que no vaya en blanco
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }
        }
        }); 

    d.addEventListener("submit", (e)=>{ //cuando dea click en btn submit realice el sig. evento
        //comentamos el prevent default para que funciona el encio al correo
        e.preventDefault();//con esto prevenimos la accion(procesar datos) predeterminada del formulario:submit
        alert("Enviando formulario");

        const $loader = d.querySelector(".contact-form-loader"), //seleccionamos las dos calases que hay en html: .contact-form-response y contact-form-loader
            $response = d.querySelector(".contact-form-response");
        
        // al dar click en submit y aceptar la alerta, despues hacemos...
        $loader.classList.remove("none");//quitamos la clase none que oculta al $loader

        //hacemos la peticion por FETCH, donde pasamos la URL, y le pasamos nuestro obj. con method post, etc.
        //la siguiente forma es sacado de URL:https://formsubmit.co/documentation
        fetch("https://formsubmit.co/ajax/yaguirreobregon@gmail.com",{ 
            method: "POST",
            
            //Los objetos FormData le permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest. Están destinados principalmente para el envío de los datos del formulario
            body: new FormData(e.target) //formdata: es obj. que parsea los valores de cada elemento del formulario, el input y el texto que escribimos
            //e.target:el evento que origina el formulario, internamente este FormData parsea los elementos q traiga el formulario, y ademas todo los input tiene q esta establecido su name:nombre
            
        })
        //si la rpta es res.ok, entonces convierte en formato json la respuesta; caso contrario rechaza la promesa con: Promise.reject(res), para que la respuesta se vaya como error al metodo catch
        .then(res => res.ok ? res.json(): Promise.reject(res))//primer then recibe la rpta.
        .then(json => {

            //descomentamos para mas detalles
            console.log(json); //imprime: {success: 'true', message: 'The form was submitted successfully.'}...

            $loader.classList.add("none");//con esto ocultamos la carga(loader)
            //y mostramos el mensaje de respuesta q los datos han sido enviados, removiendo la clase none que lo oculta 
            
            $response.classList.remove("none"); //este etiqueta $response no aparece porque aparece el de la linea siguiente
            $response.innerHTML = `<p> ${json.message}</p>`;

            //ademas despues receteamos el formulario con reset
            $form.reset();

        })
        .catch(err => {
            console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
            
            $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        })
        .finally(()=>{ //finally ejecuta idependientemente de si la rpta fue exitosa o no 
            
            setTimeout(()=> {
                
                $response.classList.add("none"); //para q oculpe la etiqueta
                $response.innerHTML = ""; //tambien para q limpie la etiqueta con clase ".contact-form-response"

            }, 3000); //luego de 3seg. va desaparecer el mensaje de respuesta

        })
        /* 
        //despues de haber pasao 3 seg. despues de dar submit, simulamos q recibimos la respuesta en settimeout
        setTimeout(() => {
            $loader.classList.add("none");//con esto ocultamos la carga(loader)
            //y mostramos el mensaje de respuesta q los datos han sido enviados, removiendo la clase none que lo oculta 
            $response.classList.remove("none");
            //ademas despues receteamos el formulario con reset
            $form.reset();

            //dentro de ese mismo settimeout
            setTimeout(() => $response.classList.add("none"), 3000); //luego de 3seg. va desaparecer el mensaje de respuesta
        }, 3000);*/

    });
}

d.addEventListener("DOMContentLoaded",e=>{
    //ejecutamos la funcion contacFormValidation
    contacForm();
});

