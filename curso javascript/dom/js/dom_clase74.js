//una vez que el evento se origina, tiene una propagacion a lo largo del dom, por efecto se da del elemento mas interno al mas externo(document), esa fase de burbuja

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),//.eventos-flujo div: con esto le decimos que traemos todo los divs que estan dentro de la class evento-flujo
    $divsEventos1 = document.querySelectorAll(".eventos-flujo1 div"),//cree otro yo! a modo ejemplo
    $divsEventos2 = document.querySelectorAll(".eventos-flujo2 div");//cree otro yo! a modo ejemplo

//creamos un 
function flujoEventos(e){
    console.log(`Hola te saluda "${this.className}", el click lo origino "${e.target.className}"`);
    //this.className(es la clase del div)
    //target:button, elemento u obj. que origino el evento
    //e.target.className: es el click donde los diste, ya sea en el div 1, div 2, div 3
}

console.log($divsEventos);//imprime:NodeList(3) [div.uno, div.dos, div.tres]

//flujo de evento del mas INTERNO HASTA MAS EXTERNO: fase de burbuja
$divsEventos.forEach((div)=>{
    //por cada div, agregamos un evento con tipo click y le agregamos la funcion antes creada flujoEventos
    //la funcion addEventListener tiene un 3cer parametro que es opcional, que es un bolean y false se pone cuando el valor es por defecto
    //div.addEventListener("click",flujoEventos);//imprime igual sino ponemos false
    div.addEventListener("click",flujoEventos,false);//solo se agrega este evento si damos click en los numeros dentro del div 
});//al FINAL AL DAR CLICK en el div 1, imprime: frase de linea 7(una vez), si damos en div que contiene 2 imprime: frase(dos veces), y en el div 3 imprime:frase(3 veces)

//dando estilos al 2do seccion con js
// -------------------- estilos con js inicio --------------------------
const $seccion2 = document.querySelector(".eventos-flujo1 div");
$seccion2.style.setProperty("text-align","center");
$seccion2.style.setProperty("font-size","2rem");
// -------------------- estilos con js fin --------------------------

//flujo de evento del mas EXTERNO HASTA el mas INTERNO: fase de CAPTURA (), ESTA fase captura poca memoria
$divsEventos1.forEach((div)=>{
    div.addEventListener("click",flujoEventos, true);
}); //al FINAL AL DAR CLICK en el div 1, imprime: frase de linea 7(una vez), si damos en div que contiene 2 imprime: frase(dos veces), y en el div 3 imprime:frase(3 veces)
//para ver diferencias ver en oneNote de esta clase 74

//flujo de evento del mas EXTERNO HASTA el mas INTERNO, pasando objetos
$divsEventos2.forEach((div)=>{
    div.addEventListener("click",flujoEventos,{
        capture:false, //capture:hace referencia a fase de captura y con false activamos fase burbuja y si ponemos true activamos la fase captura
        once:true, //con esto le decimos que ejecuta una sola vez el evento
    });
});//al final al dar click en este 2do seccion solo se va ejecutar una vez el evento y despues ya se no se va ejecutar el evento...
//al dar click en div 1 si va ejecutar, al dar en div 2 y div 3 tambien va dar, solo esos tres veces va ejecutar...