//clase TEMPLATE HTML, es como modelo a seguir, en el cual estructuras el contenido HTML mendiante js, se convierte en dinamico
const $card = document.querySelector(".cards"),//seleccionamos la clase .cards
    $template  = document.getElementById("template-card").content,//usamos getElementById, por que es id a capturar, el content para acceder a su contenido
    $fragmento = document.createDocumentFragment(), //crear un fragmento para hacer una sola insercion, y no pegar cada vez que se nos agrega tarjeta al DOM, fragmento es para que almacena dinámicamente dicha informacion
    cardContend = [ //creamos una tarjeta por cada categoria, es decir creamos un array
        {//cada tarjeta es un objeto esta dentro de las llaves {}, y dentro tiene su atributo title y img 
            title:"Animals",
            img: "https://placekitten.com/640/360",
        },
        {
            title:"Meat",
            img: "https://baconmockup.com/640/360",
        },
        {
            title:"Human",
            img: "https://placebeard.it/640x360",
        },
        {
            title:"Things",
            img: "https://picsum.photos/640/360",
        },
        {
            title:"HumanOne",
            img: "https://placebeard.it/640x360",
        }
    ];//

    //por cada elemento que tiene cardContend usamos foreahc para pasar estos valores o tarjetas
    cardContend.forEach(elem=>{
        //$template, tiene toda la estructura del html para mostrar tarjeta
        $template.querySelector("img").setAttribute("src",elem.img);//con querySelector seleccionamos la etiqueta img que esta dentro de la etiqueta template, setAttribute ponemos el valor de "src" el link que saca de:elem.img
        $template.querySelector("img").setAttribute("alt",elem.title);//lo mismo hacemos sino que ponemos el valor de "alt", el titulo que saca de elem.title
        $template.querySelector("figcaption").textContent = elem.title;//buscamos la etiqueta figcaption, y en el contenido pornemos el texto que saca de:elem.title
        //dicho template es unico que tenemos en el html, entonces si usamos para la primera este template entonces para la 2da no estaria disponible o para 3ra por eso se CLONA DICHO NODO
        //clonamos para que este disponible para la 2da o 3ra
        let $clone = document.importNode($template, true); //clonar todo un nodo del documento con document.importNode y se basa para hacer el colne de $template y luego se pasa un bolean que diga true: sognifica que va copiar toda la estructura interna y si ponemos fale solo copiaria etiqueta template de apertura y cierre
        $fragmento.appendChild($clone);//con esto al fragmento agregamos el hijo $clone
    });
     
    $card.appendChild($fragmento);//al elemento card se agrega el fragmento y asi se hace una sola insercion del DOM
    //si vamo en pestaña elementos podemos ver que al dar click en etiqueta <template>, no hay un interacion con la pagina web
    //ya que estas etiquetas TEMPLATE no se RENDERIZAN en el DOM, pero las 5 figuras que agreamos con el arreglo cardContend, si aparecen dentro de la etiqueta <section>, en total aparecen en 10 img en la PAGINA WEB
