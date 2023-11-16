
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
        console.log(e.matches);
    }

    //una vez captado la media query de css, digitamos en la sig. linea
    breakpoint.addListener(resposive); //addListener, que recibe una funcion que va estar evaluando la media query

}

