//----- CLASE 80 -----------------
const d = document;

export function digitalClock(clock,btnPlay,btnStop){

    let clockTemp; //creamos una variable para que almacena el setInterval

    d.addEventListener("click",e=>{
        
        if(e.target.matches(btnPlay)){//cuando el obj. origina el evento y coincide con el evento btnPlay
            clockTemp = setInterval(() => { //que se ejecuta cada segundo(1000) o se actualice la hora por eso utilizamos setInterval
                let clockHour = new Date().toLocaleTimeString();//con esto vemos la hora y guardamos en clockHour
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;//seleccionamos #reloj, y en su contenido innerHTML decimos que interpole el valor de clockHour cada segundo
            }, 1000);//
            e.target.disabled=true;//desabilitamos el boton una vez dado clic en id="#reloj"
        }
        if(e.target.matches(btnStop)){//cuando el obj. origina el evento y coincide con el evento btnStop
            clearInterval(clockTemp)//cuando presiono el boton stop, entonces limpio el setInterval
            d.querySelector(clock).innerHTML = null;//seleccionamos #reloj, y en su contenido innerHTML que sea null, para que desaparezca el null
            e.target.disabled=true;//desabilitamos el boton de stop
        }
    });
}

export function alarm(){}
