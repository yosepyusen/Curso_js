
export function SearchForm(){

    const d = document, 
        $form = d.createElement("form"),//creamos una etiqta de tipo form
        $input = d.createElement("input");

        //como se creo un caja de busqueda, al escribir sobre el y dar enter aparece en la url adicional: ?search=hola , despues del signo de interrogacion aparece search= q es fijo y "hola": q es la palbra q ingresaste en la caja de busqueda  
        $form.classList.add("search-form"); 
        $input.name = "search";
        $input.type = "search"; 
        $input.placeholder = "Buscar...";
        $input.autocomplete = "off";//desabilitms el auto completado de btn de search
        //$input.id = "formulario"

        $form.appendChild($input);//ponemos el input dentro del formulario
    
    //location:es un objeto o url
    if(location.hash.includes("#/search")) {//si en el hash de la url se incluye la palabra #/search: es cuando hacemos una busqda
        //entoces...
        //ejem. si en la caja de busqueda escribimmos css, este palabra se va quedar gracias al sig. cod.
        $input.value = localStorage.getItem("wpSearch"); //al valor del input se le quede el valor q esta en localStorage, q tinen como llave "wpSearch"

    }

    d.addEventListener("search", e=>{
        if(!e.target.matches("input[type=search]")) return false; //cuando no sea el obj. q origino el evento q debe ser un input de tipo:type = search, entonces no hagas nada 
        
        //!e.target.value: es decir la caja de busqueda este vacio, o no tenga nada el input de tipo search
        if(!e.target.value) localStorage.removeItem("wpSearch"); //entonces cuando es input de tipo search entonces verifica que el valor del input este limpio con: !e.target.value
    });
    
    d.addEventListener("submit",e=>{ //como el btn search se creo dentro de un formulario al dar enter en ese btn activa el evento sumbit
        
        if(!e.target.matches(".search-form")) return false;//el obj, q origino el evento: e.target, no es ".search-form", entonces no hagas nada 
        
        e.preventDefault();//prevenimos la accion por defecto del form
        //el search es el name del $input y value es lo q escribe
        localStorage.setItem("wpSearch", e.target.search.value); //vas a guardar en el localStorage en una variable "wpSearch", lo q traiga el elemento search en el formulario
        
        //Location con sus metodos, location:es un objeto o url
        location.hash = `#/search?search=${e.target.search.value}` //anda al location punto hash y modifca su valor con el url
    }); 

    //`<h2>Formulario de busqueda</h2>`
    return $form; //este funcion importamos en Header.js 

}