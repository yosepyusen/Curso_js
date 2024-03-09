import saludar, {Saludar, PI, pass, usuario} from "./constantes.js" // se importa el funcion saludar(), clase Saludar,  cont PI y variables pass, usuario 
// "./constantes.js" , ./ es para encontrar el archivo a pesar de estar en el mismo carpeta
// "../constantes.js", para subir una carpeta mas pone un punto más

//importa de la funcion que se exportó: |multiplicar, aritmetica| del archivo aritmetica.js
//entre {} es para destructuracion ya q no se exporto por defecto
import {multiplicar, aritmetica as calc} from "./aritmetica.js" //asignamos una alias a artimetica que es calc
//primerpo se exporta y despues aqui improtamos las variables
console.log("Archivo modulo.js");

console.log("importando la function PI: "+PI);
console.log("importando variables"+pass, usuario);
console.log("importando la funcion multiplicar: "+multiplicar(5,5));
//console.log(aritmetica.restar(8,12));
//console.log(aritmetica.sumar(8,12));
console.log(calc.restar(8,12)); //aqui llamammos por el alias, o se puede hacer con las 2 lineas anteriores siempre y cuando no declaramos alias
console.log(calc.sumar(8,12));
saludar();//imprimimos la funcion clase, pero siempre se tiene que importar primero
let saludo = new Saludar(); // se instancia la clase para poder llamar en variable saludo
saludo;

//cuando tu trabajas basado en modulos
/*
//este es el orden de programacion de js 
1. IMPORTACIONES DE MODULO
2. DECLARACION DE VARIABLES
3. DECLARACION DE FUNCIONES
4. EJECUCIÓN DE CODIGO

*/
