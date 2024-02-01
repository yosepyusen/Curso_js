const d = document;

export default function resposiveTester(form){ //recibe el id del formulario en form
    const $form = d.getElementById(form);
    let tester; //en esta variable vamos a guardar el window.open, de la ventana que vamos abrir

    d.addEventListener("submit",e=>{//asociamos el evento submit que viene del html, le asocio al document y despues
        //1ra forma: e.target.matches($form), vamos a evaluar quie haya desencanedao el evento submit sea el formulario 
        if(e.target === $form){ //2da forma: es comparar e.target(el obj. origino el event) con $form
            //para evitar q se recargue la pagina y que se cancele el accion del formulario por defecto que es enviar la informacion por el metodo original en el URL
            //cuando un formulario no tiene nada en el atributo accion o simplemente no hay nada, el formualrio se procesa la pagina en la que se encuentra
            e.preventDefault();//con esto eviatmos todo comentando en las dos lineas anteriores
            //alert("form. enviado");//comentamos esta lina, ya que pusimos a modo de ejemplo si pasa dentro del if
            
            tester = window.open($form.direccion.value, "tester",`innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`); //abriendo ventana y guardamos en tester
            //1mer parametro: $form.direccion.value , con esto accedemos el id del formulario y asu input con nombre:direccion, y el valor(value)
            //2do parametro: es el target, pero ponemos tester
            //3cer parametro ponemos una serie de caracteristicas, aqui usamos 2 propiedades que me van permitir controlar el alto y ancho, el tamaño que quiero que salga la ventana
            //$form.ancho.value, dentro del formulario hay input con nombre ancho y obtenemos el valor, lo mismo para: $form.alto.value
        }

    });

    d.addEventListener("click", (e)=>{//creamos un nuevo evento click 
        if(e.target === $form.cerrar){ //si el obj. que origino el click es $form.cerrar(dentro del formulario hay un input de tipo cerrar)
            tester.close(); //algunos paginas como https://jonmircha.com/, cierran y paginas como youtube o twiter no cierrar 
        }
    });

}