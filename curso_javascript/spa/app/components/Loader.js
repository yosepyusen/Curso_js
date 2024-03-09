
export function Loader(){
    const $loader = document.createElement("img");
    //como src va cargar un .svg tiene que considerar que se va llamar de index.html por ello:app/assets/tail-spin.svg
        $loader.src = "app/assets/tail-spin.svg";//en la img ponemos el link:src donde esta el loader en .svg
        $loader.alt = "Cargando..."; //en atributo alt
        $loader.classList.add("loader"); //classList: agregamos una lista de clases con nombre loader para dar estilos

        return $loader;
}