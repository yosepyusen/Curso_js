import { Title } from "./Title.js";
import { Menu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";

export function Header(){

    const $header = document.createElement("header");
    $header.classList.add("header");

    $header.appendChild(Title());//dentro de la etiqueta header agregams nodo de Title(): q dentro de este esta el titulo creado dinamicamente
    $header.appendChild(Menu());// agregamos f. Menu() de Menu.js
    $header.appendChild(SearchForm());// misma logica q anterior

    return $header; //retorna la etiqueta header creada
}