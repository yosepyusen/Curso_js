//para que dea el reloj de cuenta regresiva descomentamos la linea 23 y ver que la fecha de cumple sea mayor a la fecha actual
const d = document;
export default function countdown(id,limitDate,finalMessage){ //recibe 3 parametros, uno es el id: del selector, fecha limite(limitDate) y final mensaje(finalMessage)
    const $countdown = d.getElementById(id),//recibimos el 1mer parametro:countdown
        countdownDate = new Date(limitDate).getTime();//con esto obtenemos la fecha en milisegundos, asi es mas facil de ahcer los calculos en dias, mes, semana

    let countdownTemp =setInterval(() => {//el setInterval, se ejecuta intermitente veces
        let nowfecha = new Date().getTime(),//guardamos la fecha de ahora, per en milisegundo con getTime
            limitTime =countdownDate - nowfecha, //restamos la fecha pasada como parametro menos la fecha de ahora
            days = Math.floor(limitTime/(1000*60*60*24)), //1000:milisegundos,60:seg,60min,24hr, y con math flor redondeamos a un # entero inferior
            //la fecha que pasamos es:Mayo 23,2024 03:23:19 y estamos en 15 de nov del 2023, en aprox contando si tiene logica: falta aprox 189, con sus milisegundos
            //factor en milisegundos en un dia:(1000*60*60*24), milisegundos en una hr(1000*60*60),...

            hours = ("0"+Math.floor((limitTime % (1000*60*60*24))/(1000*60*60))).slice(-2),//limitTime % (1000*60*60*24):es el residuo es milisegundos faltantes, y dividimos milisegundos en una hr(1000*60*60)
            //la hora actual es 11:42 y para llegar a 03:23:19, maso menos aprox 15 horas faltan con sus milisegundos
            //"0", es cuando al imprimir: 01 horas, 02 horas pero no 011 horas
            //("0"+Math.floor((limitTime % (1000*60*60*24))/(1000*60*60))): todo es cadena de texto
            //slice(), para recortar cadena de texto o arreglos, si le das valor negativo empieza a recortar hacia a tras, entonces 011 horas recorta a 11 horas y si es de 01-09 horas ñe deja como esta, este slice es si deseas

            minutes = ("0"+Math.floor((limitTime % (1000*60*60))/(1000*60))).slice(-2), //(limitTime % (1000*60*60)):para q el residuo sea en milisegundos, es decir lo restante en minutos y a este residuo lo dividimos por 1000*60(milisegundos en 1 segundo) ; y milisegundos en una hr(1000*60*60)
            seconds =("0"+Math.floor((limitTime % (1000*60))/(1000))).slice(-2);//(limitTime % (1000*60)):para q el residuo sea en milisegundos, es decir lo restante en segundos y a este residuo lo dividimos por 1000 milisegundos ; y milisegundos en un minuto(1000*60)

        //$countdown.innerHTML =`<h3> Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`//en su contenido innerHTML de $countdown, va contener
        
        if(limitTime<0){//cuando el proximo cumpleaños pasado en fechas es menor que la fecha ahora
            //a modo de ejemplo cambiamos la fecha pasado en limitDate(Mayo 23,2024 03:23:19) a Nov 15,2023 13:07:00
            clearInterval(countdownTemp);//limpiamos el setInterval
            $countdown.innerHTML =`<h3> ${finalMessage} </h3>`//imprimimos el mensaje pasado en la variable finalMessage
            //al final imprime:Feliz Cummpleaño Amigo 🤓
        }
        //las 2 siguientes lineas comentamos, si queremos entender mejor descomentamos
        //console.log(countdownDate, nowfecha);//con countdownDate:imprime varias veces un valor estatico que le pasamos, el 2do valor de nowfecha:imprime la fecha actual y segun pasa el tiempo esto va aumentando
        //console.log(limitTime);//con esto le decimos cuanto tiempo resta en milisegundos
    }, 1000);//1000=1segundo
}