
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

        $form.appendChild($input);//ponemos el input dentro del formulario
    
    d.addEventListener("submit",e=>{ //como el btn search se creo dentro de un formulario al dar enter en ese btn activa el evento sumbit
        
        if(!e.target.matches(".search-form")) return false;//el obj, q origino el evento: e.target, no es ".search-form", entonces no hagas nada 
        
        e.preventDefault();//prevenimos la accion por defecto del form
        //el search es el name del $input y value es lo q escribe
        localStorage.setItem("wpSearch", e.target.search.value); //vas a guardar en el localStorage en una variable "wpSearch", lo q traiga el elemento search en el formulario
        
        //Location con sus metodos, location:es un objeto o url
        location.hash = `#/search?search=${e.target.search.value}` //anda al location punto hash y modifca su valor con el url
    }); 

    //`<h2>Formulario de busqueda</h2>`
    return $form;

}