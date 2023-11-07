// DETENER propagacion de eventos
//va haber veces donde hay ciertos elementos del dom que tiene comportamietos por default caso de boton submit

function flujoEventos(e){
    console.log(`Hola te saluda "${this.className}", el click lo origino "${e.target.className}"`);
    //this.className(es la clase del div)
    //target:button, elemento u obj. que origino el evento
    //e.target.className: es el click donde los diste, ya sea en el div 1, div 2, div 3
    e.stopPropagation();//con esto evitamos que se imprime tres o dos veces la frase si diste click en div 3 o div 2 respectivamente, funciona en modo de BURBUJA o MODO CAPTURA
}

//------------------ inicio copia de clase 74 ---------------------------------
const $divsEventos = document.querySelectorAll(".eventos-flujo div");//seleccionamos la clase:.eventos-flujo, del html y dentro de ello todo los divs que hay
//flujo de evento del mas EXTERNO HASTA el mas INTERNO, pasando objetos
$divsEventos.forEach((div)=>{
    div.addEventListener("click",flujoEventos);//metodo burbuja de mas interno a externo elemento, 
    //div.addEventListener("click",flujoEventos, true);//si ponemos TRUE, la captura seria desde el mas externo y a interno y con stopPropagation, evitamos las veces repetidas que se imprime la frase
});
//------------------ fin copia de clase 74 ---------------------------------

const $linkEventos = document.querySelector(".eventos-flujo a"); //seleccionamos la clase:.eventos-flujo, del html y dentro de ello la etiqueta a

    $linkEventos.addEventListener("click",e=>{//primer parametro es el click y segundo es el arrow function del addEventListener
        alert("Hola soy tu amigo y docente..Digital Jonathan mircha");
        e.preventDefault();//cancelar la accion que tenga por defecto el elemento en este caso es la etiqueta a, es decir que al dar click no nos lleva al enlace sino cancela
        e.stopPropagation();//con esto ya no imprime la frase de la linea 5 en consola 
    });