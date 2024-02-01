//----- CLASE 80 -----------------
const d = document;

export function digitalClock(clock,btnPlay,btnStop){

    let clockTemp; //creamos una variable para que almacena el setInterval
    d.querySelector(btnStop).disabled = true; 

    d.addEventListener("click",e=>{
        
        if(e.target.matches(btnPlay)){//cuando el obj. origina el evento y coincide con el evento btnPlay
            clockTemp = setInterval(() => { //que se ejecuta cada segundo(1000) o se actualice la hora por eso utilizamos setInterval
                let clockHour = new Date().toLocaleTimeString();//con esto vemos la hora y guardamos en clockHour
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;//seleccionamos #reloj, y en su contenido innerHTML decimos que interpole el valor de clockHour cada segundo
            }, 1000);//
            e.target.disabled=true;//desabilitamos el boton una vez dado clic en id="#reloj"
            d.querySelector(btnStop).disabled = false;//habilitamos el boton de detener reloj cuando dea click en btnPlay
        }
        if(e.target.matches(btnStop)){//cuando el obj. origina el evento y coincide con el evento btnStop
            clearInterval(clockTemp)//cuando presiono el boton stop, entonces limpio el setInterval
            d.querySelector(clock).innerHTML = null;//seleccionamos #reloj, y en su contenido innerHTML que sea null, para que desaparezca el null
            e.target.disabled=true;//desabilitamos el boton de stop

            setTimeout(function(){//con esto recargamos la pagina para
                location.reload();
            },1000);
        }
    });
    
}

export function alarm(sound,btnPlay,btnStop){
    let alarmaTemp; 
    const $alarm = d.createElement("audio");//con createElement creamos una etiqueta de tipo audio
    $alarm.src = sound; //en su atributo src pegale lo que venga en la variable sound lo que guarde la ruta del sonido
    d.querySelector(btnStop).disabled=true;//desabilitamos el boton de detener alarma

    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){//si el obj. del evento coincide con lo que traemos en el boton play
            alarmaTemp = setTimeout(() => {
                $alarm.play();//con esto le decimos que da play
            }, 2000);//2000:2segundos

            e.target.disabled = true ; //el obj que origino el evento, desabilitamos el boton de activar alarma
            d.querySelector(btnStop).disabled = false;//habilitamos el boton de detener alarma cuando dea click en btnPlay
        }
        if(e.target.matches(btnStop)){//si el obj. del evento coincide con lo que traemos en el boton play
            clearTimeout(alarmaTemp);//limpiamos la variable que contiene el setTimeout
            $alarm.pause();//para acceder al sonido tenemos que acceder a un metodo que nos da ip de audo de js, que se llama pause
            $alarm.currentTime=0;//si quiero resetar y regresar al inicio, currentTime igual a cero le decimos que regrese a cero o sea al origen
            d.querySelector(btnPlay).disabled=false;//habilitamos el boton alarma, cuando preciona en detener alarma

            setTimeout(function(){//con esto recargamos la pagina para
                location.reload();
            },200);
        }
    });
}
