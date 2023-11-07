//delegacion de eventos optimiza mucho al nivel de recuros de meoria
//usando este foreach no es lo mas optimo a nivel de memoria cuando son varios elementos como 1000, usar el addEventListener

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),//seleccionamos la clase:.eventos-flujo, del html y dentro de ello todo los divs que hay
$linkEventos = document.querySelector(".eventos-flujo a");//seleccionamos la clase:.eventos-flujo, del html y dentro de ello la etiqueta a

function flujoEventos(e){
    console.log(`Hola te saluda "${this.className}", el click lo origino "${e.target.className}"`);
   //e.stopPropagation();//con esto evitamos que se imprime tres o dos veces la frase si diste click en div 3 o div 2 respectivamente, funciona en modo de BURBUJA o MODO CAPTURA
}

document.addEventListener("click", (e)=>{
    console.log("Click en", e.target);//con esto el evento click esta asignado al document, ya que imprime a la etiqueta donde das click, ejem: Click en <h3>​Flujo de eventos​</h3>​
    //target:button, elemento u obj. que origino el evento
    if(e.target.matches(".eventos-flujo a")){//e.target:es decir el obj. que origino el evento, busca con matches el selector valido que es
        alert("Hola soy tu amigo y docente..Digital Jonathan mircha");
        e.preventDefault();//cancelar la accion que tenga por defecto el elemento en este caso es la etiqueta a, es decir que al dar click no nos lleva al enlace sino cancela
        //e.stopPropagation();//ya no es necesario poner stopPropagation
    }
});

// $divsEventos.forEach((div)=>{
//     div.addEventListener("click",flujoEventos);//metodo burbuja de mas interno a externo elemento, 
// });

// const $linkEventos = document.querySelector(".eventos-flujo a"); //seleccionamos la clase:.eventos-flujo, del html y dentro de ello la etiqueta a

//     $linkEventos.addEventListener("click",e=>{//primer parametro es el click y segundo es el arrow function del addEventListener
//         alert("Hola soy tu amigo y docente..Digital Jonathan mircha");
//         e.preventDefault();//cancelar la accion que tenga por defecto el elemento en este caso es la etiqueta a, es decir que al dar click no nos lleva al enlace sino cancela
//         e.stopPropagation();//con esto ya no imprime la frase de la linea 5 en consola 
//     });
