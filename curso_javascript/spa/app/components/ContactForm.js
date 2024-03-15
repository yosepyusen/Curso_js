export function ContactForm(){

    const d = document,
        $form = d.createElement("form"),
        $style = d.getElementById("dynamic-style"); //captamos del index creada en: <style id="dynamic-style...
        
        $form.classList.add("contact_form");

        //se pone doble contrabarra(\\) y con eso le decimos q exista esta contrabarra
        //tbm le reemplazamos por doblecontrabarra a los que tiene una sola contrabarra
        $style.innerHTML =`  
        .contact_form{
            --form-ok-color:#4caf50; /* creamos dos colores con variables */
            --form-error-color:#f44336;
            margin-left: auto; /* aplicamos margenes laterales*/
            margin-right: auto;
            width: 80%;
        }
        
        .contact_form > *{ /*asterisco significa todos los elementos que son hijos directos del formulario de contacto */
            padding: 0.5rem; /*para que no estan apegados los textos internos dentro de la caja de los inputs*/
            margin: 1rem auto;
            display: block; /*en bloques y cada elemento ponemos en filas*/
            width: 100%; /*tamaño del 100*/
        }
        
        .contact_form textarea{ /*el textarea dentro del form*/
            resize: none; /* le quite la redimencion */
            font-family: arial;
        }
        
        .contact_form legend,
        .contact-form-response{ /* doy estilos a la etiqueta legend y la clase: contact-form-response(la div donde colocaremos la respuesta despues del envio)*/
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        
        .contact_form input,
        .contact_form textarea{ /* todo los elementos de input y textarea */
            font-size: 1rem;
            font-family: sans-serif;
        }
        
        /*los inputs tiene como un hoover de negrita al poner dentro de ello el click*/
        .contact_form input[type="submit"]{ /* los inputs de tipo submit dentro del formulario */
            width: 50%;
            font-weight: bold;
            cursor: pointer;
            border-radius: 1rem;
        }
        
        .contact_form *::placeholder{ /*todo los elementos del formulario(hace referencia el *), que tenga el atributo placeholder(::placeholder) */
            color: #1a1919 ;  
        }
        
        .contact_form [required]:valid{ /* todo los elementos que sean hijo y tenga atributo required y su contenido sea valido */
            border: thin solid var(--form-ok-color);/*borde delgado(thin), aplicamos color verde*/
        }
        
        .contact_form [required]:invalid{ /* lo mismo que anterior pero cuando sea invalid*/
            border: thin solid var(--form-error-color); /*color rojo*/
        }
        
        .contact-form-error{ /*vamos a tener una clase con ese nombre*/
            margin-top: -1rem; /* para que este pegado al input el mensaje de cuando valide */
            font-size: 80%; /*tamaño de letra ms pequeño*/
            font-family: sans-serif;
            background-color: var(--form-error-color);
            color: #fff;
            transition: all 800ms ease; /* transicion de de 800 milisegundos, para que aparezca y desaparezca con animacion */
        }
        
        .contact-form-error.is-active{ /* cuando se tengan que mostrar en validacion js, se va agregar una clase is-active */
            display: block;
            animation: show-message 1s 1 normal 0s ease-out both; /* e va crear una animacion show-message, q va durar 1segundo, se vaejecutar unasola vez:1,  de forma normal y no va tener retardo(0s),
            efecto de animacion ease-out y both que va conservar los estilos con los que la animacion termine */
        }
        
        .contact-form-loader{
            text-align: center;
            background: black;
        }
        
        .none{
            display: none;/* invisibilidad y quita espaciado y ya no se muestra la clase .contact-form-loader, .contact-form-response */
        }
        
        @keyframes show-message{ /* animacion "show-message" llamado anterior mente */
            0%{ /* que empiece con...*/
                visibility: hidden; /*esconde pero deja vacio el espacio*/
                opacity: 0; 
            }
            100%{ /*y q terminen... */
                visibility: visible;
                opacity: 1;
            }
        }
        `; //a su etiquta $style en su html

        // el formulario es copiado de contact-form.html
        $form.innerHTML = `
        <legend>Envíanos tus comentarios</legend>
        
        <input type="text" name="name" placeholder="Escribe tu nombre" title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required> <!-- title:ponemos un ttulo a elemento de formulario para que el texto q pongas le sacan para validaciones -->
        <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto" data-pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
        <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido" required> 
        <textarea name="comments" cols="50" rows="5" placeholder="Escribe tu comentarios" title="Tu comentario no debe exceder mas de 255 carateres" data-pattern="^.{1,255}$" required></textarea> 
        
        <input type="submit" value="Enviar">                                                              
        
        <div class="contact-form-loader none"> <!-- none una clase: con estilo css aplicar un display none, porque incialmente no deben verse estos dos secciones(contact-form-respose y contact-form-loader)-->
            <img src="app/assets/tail-spin.svg" alt="Cargando"> <!-- loader.svg es creado en html: https://github.com/SamHerbert/SVG-Loaders/tree/master/svg-loaders -->
        </div>
        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
        `;

    //copiado de validacion_form.js
        function validationsForm(){
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

        //el formulario insertado dinamicamente no existe cuando carga el dom sino, despues de unos instantes se renderiza el contenido por eso nos da: ... Cannot read properties of null (reading 'classList') ...
        //cuando sucede eso y evitar errores de interaccion en la prog. de elementos que estan cargando dinamicamente usamos setTimeout
        
        //setTimeout: ejecutar la funcion despues de q haya pasado cierto tiempo y ejecutar una sola vez
        //para darle tiempo a nuestro contenido de fomulario realmente se carge, para cuando esta lista y ya se haya ejecutado ña funcion q valida toda la prog. del form.
        //la f. de validationsForm(), lo esoy metiendo dentro del formulario
        //peticiones q ejecutamos en un setTimeout se van a una pila de espera...
        //HASTA Q NO SE HAYAN CARGADO TODA LAS INVOCACIONES QUE VIENEN DIRECTAS POSTERIORMENTE VIENEN ESTAS EJECUCIONES de validationsForm()  
        
        setTimeout(()=> validationsForm(), 100);//le damos una decima de segundos o 100 milisegundos, para ejecute despues la funcion, eso va permitir que el renderizado de mi componente(cod.html del formulario), ya se haya cargado en el dom y ya exista y la validacion van a leer en el dom esos elementos q esta validando : evento keyup

    return $form; //este le exportamos y en Roouter.js importamos

}