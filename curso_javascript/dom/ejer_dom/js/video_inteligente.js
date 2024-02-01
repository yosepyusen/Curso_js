
const d= document,
    w = window;

export default function smartVideo(){
    const $video = d.querySelectorAll("video[data-smart-video]"); //seleccionamos todo etiqueta div q tiene:data-smart-video, creamos una variable de tipo dom por eso $

    const cb = (entrada) =>{
        //la siguiente linea de cod, para q imprime necesitamos el oberver asignarle a un elemento, ejem:$video.forEach(elem=>observer.observe(elem));
        //console.log("entries", entrada); //imprime:(2) [IntersectionObserverEntry, IntersectionObserverEntry]

        entrada.forEach(entry => { //por cada entrada ejecuta lo sig.

            //la sig. linea de cod. es para ver que atributos tiene el entry
            //console.log("Entry", entry);//imprime dos veces el obj. Entry pero solo pongo uno a modo de lectura: Entry IntersectionObserverEntry {time: 289.0999999642372, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …}

            if(entry.isIntersecting){//si ya ha cruzado la intersection
                //dentro de atributos deñ entry esta el target y dentro de ello esta el video y play es para reproduzca, funcion de js algo asi
                entry.target.play();//si ya tenemos la interseccion, simplemente accedo al metodo play para reproducir
            }else{
                //caso contrario paramos el video
                entry.target.pause();
            }

            //ponemos dentro del foreach, para poder ejecutar el visibilitychange en todo los videos 
            //LE COMENTE PORQUE CUANDO PRESIONAS ALT MAS TAB SE PONE A REPRODUCIR  
            // w.addEventListener("visibilitychange", e=> d.visibilityState === "visible"   //propiedad del document:visibilitychange
            //     ? entry.target.play() //d.visibilityState === "visible", si esto es igual entonces ejecuta el play
            //     : entry.target.pause()//caso contrario, q pausa el video
            // );
        });
    }
    const observer =  new IntersectionObserver(cb, { threshold:0.5}); //cuando el elemento se vean a 50%, ahi haga la observacion y lo reproduzca

    $video.forEach(elem=>observer.observe(elem)); //por cada elemento ejecuta la funcion observer y el metodo observer, en este caso el elemento a observar es la lista de nodos de los videos


    //falta completar
    //const video = d.querySelector("video");
    // d.addEventListener("keydown", e=>{
    //     //if(e.key === e.TabKey && e.altKey  ){
    //     if(e.keyCode === 18 && 9 ){
    //         // console.log("hola");
    //         // console.log($video);
    //         //entry.target.pause();
    //     }
    //     //console.log(e.keyCode)
    //     if(e.key === "k" && e.altKey){
    //        //entry.target.pause();
    //     }
    // });

}