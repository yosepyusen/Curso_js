const d = document;

export default function searchFilters(input, selector){//para eso necesitamos el selector:input de busqueda, selector:sobre que selector va hacer la busquda del texto
    d.addEventListener("keyup",e=>{//cuando levanta la tecla 
        if(e.target.matches(input)){ //si el objeto que origino el evento, su selector coincide con lo qie viene en la variable input, es decir coincide con clase: .filtro-tarjeta
            //las 2 sig. lineas de codigo son comentados a modo de aprendizaje
            //console.log(e.key);//key nos da la tecla que pulsaste, va aparecer cuando es una letra o #, caso que es tabulador aparecera vacio
            //console.log(e.target.value);//imprime que cada vez que se escribe o se agrega palabras se va autocompletando en consola
            
            if(e.key === "Escape"){//cuando el usuario precion escp. dentro del input de busqueda
                e.target.value = ""; //el valor del input limpiamos 
            }

            // d.querySelectorAll(selector):busques en todo los elementos que coinciden con este selector: clase .card
            //foreach:por cada selector va tener que buscar el texto de clase .card
            d.querySelectorAll(selector).forEach(element =>
                element.textContent.toLowerCase().includes(e.target.value)//todo el contenido textual(tipo texto) dentro de clase: .card, le convertimos a minusculas
                //en la linea anterior devuelve verdadero entonces, es decir coincide el valor 
                    ? element.classList.remove("filter") //hace cuando es verdadero, quitar la visibilidad del elemento que esta en css con .filter, al card
                    : element.classList.add("filter") ); //hace en caso contrario
                //includes:buleano que nos dice si el texto que lo ingrese al metodo include, va evaluar si existen(en textcontent) en cada uno de las tarjetas y el valor es: e.target.value
                //element.textContent.toLowerCase().includes(e.target.value); 
            
        }
    });
}