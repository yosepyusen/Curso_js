// api rest:https://developer.wordpress.org/rest-api/ 
// https://developer.wordpress.org/rest-api/reference/ donde estan : Referencia del punto final del desarrollador de API REST
// https://developer.wordpress.org/rest-api/reference/posts/ : dentro de posts

//tener disponibles mediante SPA el buscador que ya nos proporciona wordpres
const NAME = "css-tricks",
    DOMAIN = `https://${NAME}.com`,
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts?_embed`, //?_embed para traiga toda la info referente al posts
    POST = `${API_WP}/posts`, //aqui solo traiga info. de manera sencilla
    CATEGORIES = `${API_WP}/categories`,
    SEARCH = `${API_WP}/search?_embed&search=`; //?_embed:para toda la info completa ; &(y) search= (esto va tomar lo q el usuario introduzca en el input a buscar), SEARCH: es el endpoint de wordpres

export default{ //esto tambien se puede llamar en App.js con import y si es funcion solo el nombre de la funcion y si es variable declarada entre corchetes ver en mas en file:js_con_html 
    //NOMBRE:NOMBRE pero si el nombre del parametro de la propiedad obj. es igual al nombre de donde esta guardado la variable entonces podemos poner solo el valor en este caso NOMBRE
    //es valido de ES6
    NAME, //ya tienes el valor pero falta el nombre de propiedad obj. 
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    CATEGORIES,
    SEARCH
}