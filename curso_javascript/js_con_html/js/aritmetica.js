/*export function sumar(a,b) { //se puede exportar defrente o con: export const aritmetica 
    return a+b;
}
export function restar(a,b) {
    return a-b;
}*/

export function multiplicar(a,b) {
    return a*b; //return, para quevuelve la operacion
}

 function sumar(a,b) {
    return a+b;
}
 function restar(a,b) {
    return a-b;
}

export const aritmetica = { //se crea un obj. y llama a las dos funciones sumar y restar
    //sumar: sumar , esto es cuando el valor y la propieda se llaman igual se deja solo sumar
    sumar,
    restar
};