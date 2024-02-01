// window.alert("Alerta");
// window.confirm("Confirmacion");//con esto validamos a true(aceptar) o false(cancelar)
//window.prompt("Aviso");//es un mensaje o aviso de texto, que tiene boton a true(aceptar) o false(cancelar), y adicional agrega un input(para poder escribir algo)

//todo lo que cuelga de window no es necesario poner window punto alert, confirm,promt, sino directamente el alert, confirm,promt...
//alert("jon");

const $btnAbrir = document.getElementById("abrir-ventana"),//seleccionamos el id="abrir-ventana" y para los dos botones sig. del html 
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnPrint = document.getElementById("imprimir-ventana");

let ventana;//variable ventana sin valor

$btnAbrir.addEventListener("click",e=>{
    ventana=window.open("https://jonmircha.com");//para abrir una ventana es window open y almacenamos en variable ventana
    //open("https://jonmircha.com");//pero tabien podemos poner solo open
});

$btnCerrar.addEventListener("click",(e)=>{
    //window.close();//Los scripts pueden cerrar solo las ventanas que abrieron.
    ventana.close();//para cerrar solo las ventanas que abrieron por el metodo open, en este caso cierra la ventana abierto con metodo open: https://jonmircha.com
});

$btnPrint.addEventListener("click",e=>{
    window.print();//para imprimir y esto se puede convinar con midia de css u hoja de estilos para dar mejor forma al momento de imprimir 
});
