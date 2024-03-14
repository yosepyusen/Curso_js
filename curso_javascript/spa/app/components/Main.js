
export function Main(){

    const $main = document.createElement("main");
    $main.id = "main";

    //location.hash.includes("#/search"): cuando esta en seccion de search o Búsqueda, que no aplique estilos de tarjetas que esta en la clase: "grid-fluid"
    //location.hash: es la parte de la url y incluye la parte: #/search(ya sea cualquiera de las busquedas), ademas negamos
    // !location.hash.includes("#/search"): mientras que la url no contenta: #/search, entonces agrega la clase "grid-fluid"    
    if(!location.hash.includes("#/search")) { 
        $main.classList.add("grid-fluid");   
    }
    //tambien puede quedar en una linea de cod. : if(!location.hash.includes("#/search")) $main.classList.add("grid-fluid"); 

    return $main;

}