//como este wp_api.js no tiene funcion se le puede asignar un nombre cualquiera, puede ser appi, api, ....
import api from "../helpers/wp_api.js"; // este api es necesario para poner las peticiones en ajax

import { ajax } from "../helpers/ajax.js"; //
import { PostCard } from "./PostsCard.js";//PostCard se llama dentro f. ajax

export function Roouter(){

    const d = document,
        w = window,
        $posts = d.getElementById("posts");

        //destruturacion, donde el obj. location trae la propiedad de hash de la url y le ponemos hash
        let { hash } = location;//sacamos la propiedad hash

        console.log(hash);//imprime #/ , #/search si damos clik en home y Búsqueda y a la vez se renderiza la peticion
   
        //para el contenido previamente no se quede ahi, muy buena practica es
        $posts.innerHTML = null; // igualamos a null su contenido html con es 

        //sencillo q fue estruturar un router para nuestro app, por cada vista q tengan van agregar un if y else
        if(!hash || hash === "#/"){ //cuando no existe el hash o es = #/, quiere decir que estamos en el home o inicio
            
            $posts.innerHTML = `<h2>Sección del Home</h2>`;            
            
        }else if(hash.includes("#/search")){
            // hash === "#/search?query=valor", query:variable de consulta, este = al usuario que busca, no me combiene comparar de este modo
            //es mejor cuando el cuando incluya #/search y despues de cualquier otra cosa derivado de la busqueda
            // includes: lo q hace es que dentro de una cadena de texto busca lo q le pases y si encuentra valida a true 
            $posts.innerHTML = `<h2>Sección del Buscador</h2>`; 
         
        }else if(hash === "#/contacto"){
            
            $posts.innerHTML = `<h2>Sección de Contacto</h2>`; 
            
        }else{
            
            $posts.innerHTML = `<h2>Aqui cargará el content del post previamente seleccionado</h2>`; 
        }

    // ajax({
    //     url:api.POSTS,
    //     cbSucces: (posts)=>{ //el posts es como json
            
    //         console.log(posts);
            
    //         let html = ""; //para ir almacenando el contenido html que viene de PostCard.js

    //         //el PostCard se va agregando hasta q termine de agregar todo los posts o publicaciones para despues hacer unsa sola insercion dom
    //         posts.forEach(post => html+= PostCard(post));//por cada element del posts vamos almacenando los q viene en la funcion de PostCard()

    //         d.querySelector(".loader").style.display = "none";//ocultamos el loader
    //         d.getElementById("posts").innerHTML = html;//"posts" id de etiqueta seccion creada en Posts.js 
    //     }
    // });

}