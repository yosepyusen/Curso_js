//como este wp_api.js no tiene funcion se le puede asignar un nombre cualquiera, puede ser appi, api, ....
import api from "../helpers/wp_api.js"; // este api es necesario para poner las peticiones en ajax

import { ajax } from "../helpers/ajax.js"; //
import { PostCard } from "./PostsCard.js";//PostCard se llama dentro f. ajax

export function Roouter(){

    const d = document;

    ajax({
        url:api.POSTS,
        cbSucces: (posts)=>{ //el posts es como json
            
            console.log(posts);
            
            let html = ""; //para ir almacenando el contenido html que viene de PostCard.js

            //el PostCard se va agregando hasta q termine de agregar todo los posts o publicaciones para despues hacer unsa sola insercion dom
            posts.forEach(post => html+= PostCard(post));//por cada element del posts vamos almacenando los q viene en la funcion de PostCard()

            d.querySelector(".loader").style.display = "none";//ocultamos el loader
            d.getElementById("posts").innerHTML = html;
        }
    });

}