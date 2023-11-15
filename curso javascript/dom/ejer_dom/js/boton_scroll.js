
const d= document,
    w = window; 

export default function scrollTopButton(btn){//recibe un selector de boton:btn
    const $scrollBtn = d.querySelector(btn);//recibimos la clase css(.scroll-top-btn), y guardamos en una variable $scrollBtn
    
    //necesitamos el evento de window para detectar a que distancia quiero mostrar o ocultar el mismo boton
    w.addEventListener("scroll",e=>{ //se va ejecutar esto cuando movemos el scroll, va mostrar #s mayores cuanto mas nos alejamos del margen top, y cuanto mas nos acercamos mostrando numeros menores hasta a llegar al top cero
        console.log(w.pageYOffset,d.documentElement.scrollTop);//imprime:1375 1375, ambos imprimen igual
        //pageYOffset, es de la barra vertical
        //scrollLeft, pageXOffset, para la barra horizontal
    });
    //delegar click del boton, asigandole al document, el eveto click
    d.addEventListener("click",e=>{})
}