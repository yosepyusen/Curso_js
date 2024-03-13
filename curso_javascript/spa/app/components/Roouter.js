//como este wp_api.js no tiene funcion se le puede asignar un nombre cualquiera, puede ser appi, api, ....
import api from "../helpers/wp_api.js"; // este api es necesario para poner las peticiones en ajax

import { ajax } from "../helpers/ajax.js"; //
import { PostCard } from "./PostsCard.js";//PostCard se llama dentro f. ajax
import { Post } from "./Post.js";

export async function Roouter(){

    const d = document,
        w = window,
        $main = d.getElementById("main"); // el id=main, es de Main.js, se puede obtener mediante getElementById por la f. Main() ha sido agregado al nodo div con id="root", en App.js

        //destruturacion, donde el obj. location trae la propiedad de hash de la url y le ponemos hash
        let { hash } = location;//sacamos la propiedad hash

        //console.log(hash);//imprime #/ , #/search si damos clik en home y Búsqueda y a la vez se renderiza la peticion
   
        //para el contenido previamente no se quede ahi, muy buena practica es
        $main.innerHTML = null; // igualamos a null su contenido html con esto el contenido cargue

        //al dar click en link de home, busqueda, contacto, este se va creando el header por el dinamismo pero cuando ya cargamos diferentes secciones no va haber carga de header
        
        //sencillo q fue estruturar un router para nuestro app, por cada vista q tengan van agregar un if y else
        if(!hash || hash === "#/"){ //cuando no existe el hash o es = #/, quiere decir que estamos en el home o inicio
            
        await ajax({ //hasta q termine d ejecutar este ajax va ocultarse el loader, puesto en la linea 56
            url:api.POSTS,
            cbSucces: (posts)=>{ //el posts es como json
                
                //console.log(posts); //imprime un array de 10, pero puede q imprime 5, ...
                
                let html = ""; //para ir almacenando el contenido html que viene de PostCard.js

                //el PostCard se va agregando hasta q termine de agregar todo los posts o publicaciones para despues hacer unsa sola insercion dom
                posts.forEach(post => html+= PostCard(post));//por cada element del posts vamos almacenando los q viene en la funcion de PostCard()

                $main.innerHTML = html;//"main" id de etiqueta creada en Main.js 
            }
        });    
        //console.log(api.POST); //imprime:https://lucylara.com/wp-json/wp/v2/posts        
            
        }else if(hash.includes("#/search")){
            // hash === "#/search?query=valor", query:variable de consulta, este = al usuario que busca, no me combiene comparar de este modo
            //es mejor cuando el cuando incluya #/search y despues de cualquier otra cosa derivado de la busqueda
            // includes: lo q hace es que dentro de una cadena de texto busca lo q le pases y si encuentra valida a true 
            
         
        }else if(hash === "#/contacto"){
            
            $main.innerHTML = `<h2>Sección de Contacto</h2>`; 
            
        }else{ //aqui no programamos para secion:"Aprende JS" que esta en la barra de nav creada en Menu.js, es por que es un enlace externo puesto y el hash no se imprime al dar click en este enlace
            
            //$main.innerHTML = `<h2>Aqui cargará el content del post previamente seleccionado</h2>`; 

            //se obtiene id de localStorage con getItem; el setItem se ha agregado en PostsCard.js
            //console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`); //imprime de acuerdo a la tarjeta q damos "Ver Publicación" ejem: https://lucylara.com/wp-json/wp/v2/posts/2177 , 

            await ajax({ //hasta q termine d ejecutar este ajax va ocultarse el loader, puesto en la linea 56
                url:`${api.POST}/${localStorage.getItem("wpPostId")}`,
                cbSucces: (post)=>{ //el posts es como json
                    
                    //console.log(post); //imprime info de unsa sola posts al q damos click esto puede variar: {id: 2177, date: '2021-05-10T07:00:41', date_gmt: '2021-05-10T12:00:41', guid: {…}, modified: '2021-05-09T15:36:13', …}
                    
                    $main.innerHTML = Post(post); // en content html del main pon la funcion Post(), de Post.js y le pasamos como dato lo que hay en post

                }
            });        

        }

        d.querySelector(".loader").style.display = "none";//ocultamos el loader
}