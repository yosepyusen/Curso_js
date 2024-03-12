
export function SearchForm(){

    const $form = document.createElement("form"),//creamos una etiqta de tipo form
        $input = document.createElement("input");

        $form.classList.add("search-form");
        $input.name = "search";
        $input.type = "search";
        $input.placeholder = "Buscar...";

        $form.appendChild($input);//ponemos el input dentro del formulario
    
    //`<h2>Formulario de busqueda</h2>`
    return $form;

}