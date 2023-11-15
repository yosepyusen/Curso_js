
const d= document,
    w = window; 

export default function scrollTopButton(btn){//recibe un selector de boton:btn
    const $scrollBtn = d.querySelector(btn);//recibimos la clase css(.scroll-top-btn), y guardamos en una variable $scrollBtn
    
    //necesitamos el evento de window para detectar a que distancia quiero mostrar o ocultar el mismo boton
    w.addEventListener("scroll",e=>{
        console.log(w.pageYOffset,d.documentElement.scrollTop);//imprime:1375 1375
    });
    //delegar click del boton, asigandole al document, el eveto click
    d.addEventListener("click",e=>{})
}