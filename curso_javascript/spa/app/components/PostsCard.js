
export function PostCard(props){

    let { slug, date, title, _embedded} = props; //m destructuración
    
    //date propiedad de props y este viene de json 
    let dateFormat = new Date(date).toLocaleDateString(),
        //si existe  _embedded["wp:featuredmedia"], que es propiedad de props, q me ponga sig. interrogacion(?) o caso contrario dos punto...
        urlPoster = _embedded["wp:featuredmedia"]? _embedded["wp:featuredmedia"][0].source_url: "https://loremflickr.com/200/200";

    //rendered: es una propiedad de title donde esta el titulo del posts que es pasado en props
    //slug para formar rutas
    return `
        <article class="post-card">
            <img src="${urlPoster}" al="${title.rendered}"> 
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}">Ver Publicación</a>
            </p>
        </article>
    `;

}