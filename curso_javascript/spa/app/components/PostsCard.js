
export function PostCard(props){

    let { slug, date, title, _embedded, id} = props; //m destructuración
    
    //date propiedad de props y este viene de json 
    let dateFormat = new Date(date).toLocaleDateString(),
        //si existe  _embedded["wp:featuredmedia"], que es propiedad de props, q me ponga sig. interrogacion(?) o caso contrario dos punto...
        urlPoster = _embedded["wp:featuredmedia"]? _embedded["wp:featuredmedia"][0].source_url: "https://loremflickr.com/200/200";

    document.addEventListener("click", e=>{ //va ejecutarse cuando dea click

        //e.target: obj. q origina el evento  es igual a class=".post-card" y a su vez sea etiqueta a retorna false
        if(!e.target.matches(".post-card a")) return false;

        //el setItem es para agregar un item en localStorage, e.target: enlace, dataset:para acceder al data atribute, nombre data-atribute q es id 
        localStorage.setItem("wpPostId", e.target.dataset.id);

    });

    //rendered: es una propiedad de title donde esta el titulo del posts que es pasado en props
    //slug para formar rutas, agregamos al id
    //usamos un data attribute para poner el id dentro de data-id y guardarlo en local storage
    return `
        <article class="post-card">
            <img src="${urlPoster}" al="${title.rendered}"> 
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
            </p>
        </article>
    `;

}