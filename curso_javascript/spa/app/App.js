//App.js : es como clase desde la primera palbra en mayuscula en caso de React, caso si articho se llama: FormularioLogin.js
//App.js es un componente

//para las pc es mas faciles procesar una funcion q clase por eso usa react
//ponemos api es nombre q damos, hace referencia a los end points q vamos usar es decir peticiones 
import api from "./helpers/wp_api.js"; //en vanilla js si es poner extension .js pero en react y otros no es necesario

//entre {} es para destructuracion ya q no se exporto por defecto
import {ajax} from "./helpers/ajax.js";

export function App(){

    document.getElementById("root").innerHTML = `<h1>Bienvenido a spa con vailla js</h1>`;
    
    console.log(api); //imprime rutas de api {NAME: 'lucylara', DOMAIN: 'https://lucylara.com', SITE: 'https://lucylara.com/wp-json', API_WP: 'https://lucylara.com/wp-json/wp/v2', POSTS: 'https://lucylara.com/wp-json/wp/v2/posts?_embed', …}

    ajax({ //ajax creado en ajax.js, tiene dos param. tiene que ser EXACTAMENTE IGUAl que es: url y cbSuccess
        url: api.POST, //dentro de api hay variable POST creada
        cbSucces:(posts)=>{//en ajax.js nos pasan json => cbSuccess(json), json que es la data en este caso es posts
            
            console.log(posts);// imprime: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}], porque en url le pasamo el url de post
            
        }
    });
}
