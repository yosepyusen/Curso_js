//algunas paginas web, no tienen un mismo enlace ejem: 
// para contenido pc es: https://www.huffpost.com/ y para mobile es:https://www.huffpost.com/, pero otras paginas cuando es para mobile cambian de url, estos w son reemplazados por m, ejem: https://m.huffpost.com/

//El objeto navigator se emplea habitualmente para detectar el tipo y/o versión del navegador en las aplicaciones cuyo código difiere para cada navegador.
//Navigator.userAgent devuelve la cadena del agente de usuario para el navegador actual.

const d = document,
    n = navigator,
    ua = n.userAgent
export default function userDeviceInfo(id){//id donde captura toda la informacion que se va extraer del user-agent
    console.log(ua);//imprime: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
}