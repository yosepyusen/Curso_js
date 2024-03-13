
//el dato que se obtiene Roouter.js q es post = props
export function Post(props){

    let { title, date, content } = props;
    let dateFormat = new Date(date).toLocaleString(); //el date q es del api se tranforma a fecha entendible 

    return `
    <secction class="post-page">
        <aside>
            <h2>${title.rendered}</h2>
            <time datetime="${date}">${dateFormat}</time>
        </aside>
        <hr>
        <article>${content.rendered}</article>
    </secction>
    `;

}