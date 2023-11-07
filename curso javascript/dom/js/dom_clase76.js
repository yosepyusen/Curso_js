//delegacion de eventos optimiza mucho al nivel de recuros de meoria, y es usado mas en pticiones asincronas... caso ajax o fetch
//usando este foreach no es lo mas optimo a nivel de memoria cuando son varios elementos como 1000, usar el addEventListener

//en estos dos lineas de codigos siguientes ya no es necesario, por eso lo comentamos
//const $divsEventos = document.querySelectorAll(".eventos-flujo div"),//seleccionamos la clase:.eventos-flujo, del html y dentro de ello todo los divs que hay
//$linkEventos = document.querySelector(".eventos-flujo a");//seleccionamos la clase:.eventos-flujo, del html y dentro de ello la etiqueta a

function flujoEventos(e){
    console.log(`Hola te saluda "${this}", el click lo origino "${e.target.className}"`);//${this.className(sale undefined)}, antes en clase 75 se guardaban en una variable y si tenia className, en este caso el document el documento no tiene un atributo className
    //${this}, si dejamos asi sale [object Window], todo lo que cuelga de widow no es necesario ponerle window
    //e.stopPropagation();//ya no es necesario usar stopPropagation, ya no se hace propagacion porque el evento ha sido asignado al elemento padre, que e este caso es el document
}

document.addEventListener("click", (e)=>{//con esto seleccionamos un solo evento o una sola asignacion al evento click y mejoramos rendimiento de memoria y recursos y con condicional capturamos el evento
    console.log("Click en", e.target);//con esto el evento click esta asignado al document, ya que imprime a la etiqueta donde das click, ejem: Click en <h3>​Flujo de eventos​</h3>​
    
    if(e.target.matches(".eventos-flujo div")){//e.target:es decir el obj. que origino el evento, busca con matches el selector valido que es div
        flujoEventos(event);//ejecutamos la funcion flujoEventos y le pasamos el evento "e"
    }

    //target:button, elemento u obj. que origino el evento
    if(e.target.matches(".eventos-flujo a")){//e.target:es decir el obj. que origino el evento, busca con matches el selector valido que es la etiqueta "a"
        alert("Hola soy tu amigo y docente..Digital Jonathan mircha");
        e.preventDefault();//cancelar la accion que tenga por defecto el elemento en este caso es la etiqueta a, es decir que al dar click no nos lleva al enlace sino cancela
        //e.stopPropagation();//ya no es necesario poner stopPropagation
    }
});
