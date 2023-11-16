
const d= document,//mapea todo el documento html de esta file
    w = window; //mapea todo los variables del console

export default function scrollTopButton(btn){//recibe un selector de boton:btn
    const $scrollBtn = d.querySelector(btn);//recibimos la clase css(.scroll-top-btn), y guardamos en una variable $scrollBtn
    
    //necesitamos el evento de window para detectar a que distancia quiero mostrar o ocultar el mismo boton
    w.addEventListener("scroll",e=>{ //se va ejecutar esto cuando movemos el scroll, va mostrar #s mayores cuanto mas nos alejamos del margen top, y cuanto mas nos acercamos mostrando numeros menores hasta a llegar al top cero
        //pageYOffset, es de la barra vertical
        //scrollLeft, pageXOffset, para la barra horizontal
        //sig. linea de cod. descomentamos para entender mejor
        //console.log(w.pageYOffset,d.documentElement.scrollTop);//imprime:1375 1375, ambos imprimen igual y dan valores en pixeles
        
        let scrollTop = w.pageXOffset || d.documentElement.scrollTop; //algunos navegadores no soportan:pageXOffset, pero sino soporta utilizo: d.documentElement.scrollTop
        if(scrollTop > 600){//cuando el valor de scrollTop que esta en pixeles es mayor a 600px
            $scrollBtn.classList.remove("hidden"); //para desactivar la clase hidden de ocultar, cuando esta a mas de 600px   
        }else{ 
            $scrollBtn.classList.add("hidden"); //para activar la clase hidden de ocultar si esta menos a 600px
        }
    });
    //delegar click del boton, asigandole al document, el eveto click
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){//si el objeto que origino el evento, su selector coincide con el valor que biene btn 
            w.scrollTo({//scrollTo:recibe una serie de obj. u opciones, ejem(comportamiento, top,)
                behavior: "smooth", //parecido al css: (scroll-behavior: smooth; efecto de transision cuando se mueve la barra de desplazamiento vertical)
                top:0, //para que regrese la barra de desplazamiento vertical
                //left:0 //podemos poner pero no es necesario
            }); 
        }
    });
}