const d= document;

export default function scrollSpy(){
    const $seccions = d.querySelectorAll("section[data-scroll-spy]"); //querySelectorAll,con ello le decimos que traeme todas las etiquetas seccion que tengan el atributo el data-scroll-spy
    
    const cb = (entries)=>{//creamos el callback con nombre cb y recibe este callback, entradas:entries, que estan vizualizando al view port
        
        // entries: son estradas q recibe cd que viene de IntersectionObserver
        //console.log("entries", entries);//con esto imprime:(15) [IntersectionObserverEntry... , imprime cuando pasas a otra seccion:entries [IntersectionObserverEntry], IntersectionObserverEntry(este tiene sus propiedades, la cual nos interesa el "target:section#seccion9.section)"
        //tambien nos interesa "isIntersecting:true", con esto dice que ya esta interactuando en la seccion
        //"isVisible:false", es cuando el panel de navegacion esta en otra seccion, es decir es falso o que ya habia interactuado en dicha seccion
    
        entries.forEach(entrada=>{//por cada entrada que tengas
            //la sig. linea de cod. comentamos a modo aprendizaje
            //console.log("Entrada",entrada);//con esto imprimimos 15 veces: Entrada IntersectionObserverEntry {time: 193.79999999701977, ...}
            
            const id = entrada.target.getAttribute("id"); //dentro de entrada, acceda a target y obtengas:getAttribute, el atributo id
            
            //la sig. linea de cod. comentamos a modo aprendizaje
            //console.log(id);//imprime: seccion1 ... seccion15
            
            if(entrada.isIntersecting){ //si de entrada en su propiedad isIntersecting, entonces...
                //cuando isIntersecting tenga true, es porque se esta visualizando dicha seccion, caso false es porque ya esta en otra seccion
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).//busco el 1mer elemento valido de css que corresponda con este selector que sea enlace "a" y tenga su atributo[data-srcroll-spy]: a[data-srcroll-spy] y que aparte valide que en su atributo href tenga el #id(que es el numero de seccion)
                //en la anterior estamos casando la seccion con el enlace correspondiente
                classList.add("active"); //ademas que sele agrega la clase active a la seccion
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove("active");//caso contrario al if quitamos la clase active
            }
        })
    }
    
    const observer = new IntersectionObserver(cb,{ //parametro que recibe es 1ro:callback(funcion q recibe un evento, un add event listener), adicional recibe una serie de opciones
        
        //el primer opcion es
        //root, hace referencia root principal, es el documento html
        
        //segundo opion es
        //rootMargin: "-250px"//oberver tiene una propiedad de rootMargin: "0px(margin top) 0px(margin rigth) 0px(margin buttom) 0px(margin left)", es necesario poner px, no se puede poner rem
        //esos -250px le estamos dando margenes a los 4 lados
        //rootMargin, es para que cuando al estar en medio de dos secciones el panel de navegacion no se me pinten ambos secciones en el menu de navegacion
        //esos -250px, es hasta que no pasa por mas de 250px la seccion de filtro de busqueda, no se va iluminar esa seccion  
    
        //3cer opcion es:
        //threshold:0.5 //threshold:es limite con un valor que va de cero a uno, 
        //tbm podemos expresar como un arreglo, significa q podemos pasar varios parametros como: 
        threshold:[0.5 , 0.75] //actives es IntersectionObserver cuando el elemento este entre un 50% y 75% de su contenido , se puede manejar max y minimos
        //cuando pongo cero en cuanto el elemento se visualice ejecuta la IntersectionObserver
        //0.5: es cuando tiene el 50% de su contenido visible en view port
        //mientras si ponemos entre dos secciones y ninguno llega a un 50% entonces se mantiene despintado la barra de menus
    });
    //el observer: necesita asignarse a un elemento, para que dicho observer pueda observar dicha IntersectionObserver, en este caso me interesa seguir observando a las "secciones", que voy scroleando
    //la sig. linea de cod. comentamos a modo aprendizaje
    //console.log("observe",observer);//imprime:observe IntersectionObserver {root: null, rootMargin: '0px 0px 0px 0px', thresholds: Array(1), delay: 0, trackVisibility: false, …}, con sus respectivos propiedades

    $seccions.forEach(elem=>observer.observe(elem));//foreach por cada seccion que esta dentro de $seccions, le decimos observer(tiene el IntersectionObserver) y ejecutamos el metodo observer(donde recibe el obj. que es: el)
}