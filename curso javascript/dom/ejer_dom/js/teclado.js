const d= document;

export function shortcuts(e){
    console.log(e);//imprima el evento
    console.log(e.type);//para ver el tipo de evento 
    console.log(e.key);//key nos da la tecla que pulsaste, va aparecer cuando es una letra o #, caso que es tabulador aparecera vacio
    console.log(e.keyCode);//nos da # del codigo de la tecla que pulsaste
}