
const d = document,
    w = window;
 
export default function responsiveMedia(id, mq, mobileContent, desktopContent){ //1mer parametro: id, luego la media_query y 3cer: necesitamos el contenido html para vista mobile, 4to:para el contenido que se cargue en pc
    let breakpoint = w.matchMedia(mq); //en esta bariable vamos guardar la media_query 
    //matchMedia:permite implementar una consulta de medios en JavaScript

    let resposive = (e)=>{;//recibe el evento la funcion expresada
        if(e.matches){ //e.matches: es valor boleano, cuando cumpla el media query va devolver true, caso contrario devuelve falso
            //cuando la media query cumpla, significa la min altura es 1024px y si es mayor a este # va ser interfas de escritorio y si es menor a interfas de mobile
            d.getElementById(id).innerHTML = desktopContent;//con innerHTML agregamos lo que venga en la variable desktopContent
            
        }else{//caso contrario si el false, es decir si es a una anchura menor a 1024px
            d.getElementById(id).innerHTML = mobileContent;
        }
        //en la sig. linea comentamos solo descomentamos para entender mejor
        //console.log("MQ",e.matches,breakpoint);//imprime:MQ false(si el ancho de la ventana es menor a 900px) y true(si es mayor a 1024px)
        //con breakpoint, imprime:MediaQueryList {media: '(min-width: 900px)', matches: false, onchange: null}, si es menor a 900px si es mayor a 900px dentro de MediaQueryList imprime true
    }   

    //una vez captado la media query de css, digitamos en la sig. linea
    breakpoint.addListener(resposive); //addListener, que recibe una funcion que va estar evaluando la media query
    //addListener, no se ejecuta a la carga del documento, se ejecuta cuando hay cambio en media query es decir en ancho de la pagina web
    //tbm se puede usar window.load o window resize cambio de addListener

    resposive(breakpoint);//ejecutamos directamente el resposive, al momento que cargue la pagina web, pasando el breakpoint(el media query)
    //esta funcion responsiveMedia, esta ejecutandose en index_dom.js, dentro de DOMContentLoaded
}

