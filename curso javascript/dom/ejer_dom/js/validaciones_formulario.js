const d = document;

export default function contacFormValidation(){
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
}