
export function SearchCard(props){

    //hacemos la destruturacion
    let {title, id, _embedded} = props;

    let slug = _embedded.self[0].slug; //en Roouter.js se hace la peticion ajax:url:`${api.SEARCH}${query}`, donde SEARCH es url de busqueda con _embedded
    //dentro de _embedded hay array self  q esta en posicion cero [0], y a su vez accedemos a la propiedad slug

    //imprimimos el "title" sacado del url de la api y el "slug" 
    //el id, _embedded, title, de obtiene de props
    //se usa data-atribute con valor id pasado q sacamos de props
    //el valor dado aqui en data-id se obtiene en PostCard.js con: e.target.dataset.id
    return `
    <article class="post-card">
        <h2>${title}</h2>
        <p>
            <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
        </p>
    </article>
    `;

}