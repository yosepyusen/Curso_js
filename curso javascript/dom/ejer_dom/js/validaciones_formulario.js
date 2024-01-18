const d = document;

export default function contacFormValidation(){
    const $form = d.querySelector(".contact_form"), //obtenemos el formulario con la clase: .contact_form html
        $inputs = d.querySelectorAll(".contact_form [required]"); //traeme todo los elementos dentro del formulario que contengan el atributo required

    // comentamos la sig. linea a modo de aprendizaje
    //console.log($inputs); //imprime:NodeList(4) [input, input, input, textarea]

    $inputs.forEach(input=>{//por cada input 
        const $span = d.createElement("span"); //creamos una etiqueta span
        $span.id = input.name; //vamos asignarle como atributo id el valor que viene en nuestro input del html en su propiedad name para que sea unico
        //ejemplo:en 1mer input en su propiedad name="name", el name se va agregar al id del span
        
        //despues agregamos una lista de clases, previamente creada en el css: .contact-form-error"
        $span.classList.add("contact-form-error","none"); //ademas de ello aplique el estilo .none tbm creada en css

        //el mensaje de error se va obtener del title ejem: <input ... title="Nombre sólo acepta letras y espacios en blanco">
        $span.textContent = input.title; // a este span ponle en su propiedad textcontend lo ve venga en el atributo title del input:input.title
        input.insertAdjacentElement("afterend",$span); //inserta el espan de manera adjacente en el hrno siguiente:afterend
    });
    //las validaciones se puede hacer en el momento que pulse el boton submit o al momento que el usuario va escribiendo

    d.addEventListener("keyup", e=>{//keyup:al momento que levante la tecla o suelta
       
        if(e.target.matches(".contact-form [required]")){  //se ejecuta el evento cuando el e.target.matches coincidad un elemento que esta dentro del formulario con el atributo required
            // let $input = e.target,
            //  pattern     
        }
        }); 
}