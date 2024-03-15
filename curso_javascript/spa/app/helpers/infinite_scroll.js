import api from "./wp_api.js"; //le importamos con nombre de api pero este nombre puede cambiar
import { ajax } from "./ajax.js";
import { SearchCard } from "../components/searchCard.js";
import { PostCard } from "../components/PostsCard.js";

export async function InfiniteScroll(){ //ajax es async entonces tbm necesitamos poner a esta funcion async y poder hacer la peticion

    const d = document,
        w = window;

    //obtenemos en query la palbra o termino buscado que esta guardo en localStorage con setItem con llave wpSearch
    let query = localStorage.getItem("wpSearch"),

        apiURl, //este va depender de si estamos en busqueda o seccion home
        //componentes se usa inicial letra mayuscula
        Component; //dependiendo de la ruta q estemos va carga el PostCard o SearchCard
        //HOC(como se llama en React): componetes de orden superior, funcionalidad de poder utilizar dentro de un componente q funciona como empaquetador dependiendo de necesidades de iteraccion de  nuestra app

    w.addEventListener("scroll",async e=>{

        //destructurar
        let { scrollTop, clientHeight, scrollHeight} = d.documentElement,
        //scrollTop: cuanto me alejado del margen-top con la barra del desplazamiento vertical
        //clientHeight: altura del view port de mi navegador o sea la altura de la vanetana visible del pc, por eso es fijo
        //scrollHeight: nos esta dando el total que tengo de distancia del srcoll, por eso es fijo

        //destructuramos
            { hash } = w.location; 

        //si imprime la sig. linea de cod.
        //console.log(scrollTop,clientHeight,scrollHeight, hash);

        //ver en wp-api-rest1.html al final es casi similar el codigo
        if(scrollTop+clientHeight >= scrollHeight){//esto es cuando el scroll llega al final de la doc html 

            //api.page viene de wp_api.js
            //cuando el condicional anterior cumple aumentamos la pagina en 1, entonces estaria enen la pagina 2, y asi susesivamente..
            api.page ++;

            //ahi esta el HOC:High Order Component de react
            if(!hash || hash === "#/"){ //cuando no hay nada en el hash o el hash es igual a "#/", eso significa q estamos en la seccion Home
                apiURl = `${api.POSTS}&page=${api.page}`;//valor de la url seria del home donde estan los post y adicional le agregamos el , &page=${api.page} , para q pase a la pagina 2 y agrege mas contenido de post pq el scroll top llego al final de pagina web
                Component = PostCard;// se puede mandar a llamar asi sin parentesis
                
            }else if(hash.includes("#/search")){ //hash incluye #/search, entonces...

                apiURl = `${api.SEARCH}${query}&page=${api.page}`; //la ul seria de SEARCH, ademas le pasamos el termino buscado q se obtubo en query y tambien ponemos: &page=${api.page} , para q aumente las busquedas cuanto baja todo el scroll
                Component = SearchCard;
            
            }else{ //solo implementamos el scroll infinito cuando esta bien en la seccion de home o de Busqueda, mientras tanto en otras secciones solo retorna false
                return false;
            }

            //cuando llego el scroll al final empieza a cargar el loader 
            d.querySelector(".loader").style.display = "block";

            //despues de ello ejecutamos ajax para hacer peticion y aync para usar await
            //para q pueda haceptar el await tambien poner en:  w.addEventListener("scroll", async e...
            await ajax({ 
                url: apiURl,
                cbSucces:(posts)=>{ //este post va ser de busqueda o del home
                    console.log(posts);//imprime array de 10

                    let html = "";

                    //recuerda que Component dependiendo de la url va ser SearchCard de SearchCard.js o PostCard de PostsCard.js
                    posts.forEach(post => html += Component(post)); //por cada "posts" que hay; vaya agregando en "html", lo q viene en la funcion Component y dentro de ello le pasamos el parametro post
                    
                    //para poder agregar este post del scroll al final usamos beforeEnd con insertAdjacentHTML
                    d.getElementById("main").insertAdjacentHTML("beforeend", html); //obtenemos la etiquta main con id="main"

                    //cuando haya terminado de hacer la peticion o insertar los post deshabilita el loader
                    d.querySelector(".loader").style.display = "none";
                    
                }
            });//este ajax imprime dos o tres arrays cuando pasas de de home a Búsqueda o al reves pero siempre y cuando el scroll este al final
        }

    });
}