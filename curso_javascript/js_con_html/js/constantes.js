export const PI= Math.PI //export siempre se escribe para manda llamar sino da error cuando llamas
//sino quieres exportar entonces no pones import
export let usuario = "Jon";
export let pass ="qwerty";
//---------podemos exportar con constantes-------
//export default pass;

//funcion expresada, siempre se llama despues dehaber echo la funcion
const hello =() => console.log("Esto es una funcion expresada");

//funbcion definida
export default function saludar(){ // cuando se mande llamar esta funcion se export automaticamente y no necesita un console.log()
    //solo una vez se hace el default, y solo se puede poner default para funcion y clase de forma defrente despues de export  
    console.log("Hola function + ES6")
}

export  class Saludar{
    constructor(){
        console.log("Hola clase Saludo +ES6");
    }
}