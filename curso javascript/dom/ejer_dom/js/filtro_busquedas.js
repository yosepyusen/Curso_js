const d = document;

export default function searchFilters(input, selector){//para eso necesitamos el selector:input de busqueda, selector:sobre que selector va hacer la busquda del texto
    d.addEventListener("keyup",e=>{//cuando levanta la tecla 
        if(e.target.matches(input)){ //si el objeto que origino el evento, su selector coincide con lo qie viene en la variable input
            console.log(e.key);//key nos da la tecla que pulsaste, va aparecer cuando es una letra o #, caso que es tabulador aparecera vacio
            
        }
    });
}