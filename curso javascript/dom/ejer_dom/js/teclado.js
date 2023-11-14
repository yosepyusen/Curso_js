const d= document;

export function shortcuts(e){ //este funcion funciona con el evento:keydown
    console.log(e);//imprima el evento
    console.log(e.type);//para ver el tipo de evento 
    console.log(e.key);//key nos da la tecla que pulsaste, va aparecer cuando es una letra o #, caso que es tabulador aparecera vacio
    console.log(e.keyCode);//nos da # del codigo de la tecla que pulsaste
    console.log(`ctrl: ${e.ctrlKey}`);//imprime:si false porque no presionamos ctrl, para teclas especiales como ctrl o alt
    console.log(`alt: ${e.altKey}`);//imprime:si false porque no presionamos alt, para teclas especiales como ctrl o alt
    console.log(`shift: ${e.shiftKey}`);//imprime:si false porque no presionamos shiftKey, para teclas especiales como ctrl o alt

    if(e.key === "a" && e.altKey){//e.key:(nos da la letra pulsada), le igualamos a la letra "a" y ademas cuando presiono alt(e.altKey) que haga lo siguiente
        alert("Has lanzado una alerta con el teclado");
    }
    
    if(e.key === "c" && e.altKey){//e.key:(nos da la letra pulsada), le igualamos a la letra "c" y ademas cuando presiono alt(e.altKey) que haga lo siguiente
        confirm("Has lanzado una confirmación con el teclado");
    }

    // el: (alt + p), no ejecuta el promt, hay cruce de acceso rapidos ya que, Alt + P: Abre el panel de vista previa como una ventana de video flotante
    if(e.key === "q" && e.altKey){//e.key:(nos da la letra pulsada), le igualamos a la letra "q" y ademas cuando presiono alt(e.altKey) que haga lo siguiente
        prompt("Has lanzado un aviso con el teclado");
    }
}