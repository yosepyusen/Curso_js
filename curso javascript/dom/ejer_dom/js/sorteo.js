const d = document;

export default function draw(btn, selector){ //btn:que active el ganador, selector:que vamos analizar el cod. html y de ahi obtenemos el ganador
    const getWinner = (selector)=>{ //creamos una funcion expresada, dentro de ella pasamos el selector css
        const $jugadores = d.querySelectorAll(selector),//traemos todo los elementos que coinciden con variable selector
        //ponemos $ despues jugadores porque es id
        random = Math.floor(Math.random()*$jugadores.length), //math.random:da # de 0 entre 1 y multiplicamos por tamaño de juagdores
        //math.flor, usamos para redondear a # inferior, ya que hay 9 posiciones y empieza desde cero
        winner = $jugadores[random];//winner, es un lis item, elementos que tiene la clase player, para extraer el contenido usamos textContent

        //sig- linea de cod, descometamos a modo de aprendizaje o entender mas
        //console.log($jugadores, random,winner); //imprime 1ro(NodeList(10)), 2do(numero), 3cero(la etiqueta <li> que esta en ese posicion)

        return `El ganador es: ${winner.textContent}`
    }

    d.addEventListener("click",e=>{ //agregamos el evento click
        if(e.target.matches(btn)){ //si el click fue originado por el boton que viene en la variable boton, entonces ejecutas lo sig. 
            let result = getWinner(selector); //guardamos la ejecucion de getWinner en result
            alert(result);//el resultado de ejecucion getWinner mandamos en alerta y consola
            console.log(result);
        }
    });
}

//**************** inicio creacion de sorteo en youtube: copeamos todo el codigo y pegamos en consola ************/
const getWinnerComment = (selector)=>{ //creamos una funcion expresada, dentro de ella pasamos el selector css
    const $jugadores = document.querySelectorAll(selector),//traemos todo los elementos que coinciden con variable selector
    //ponemos $ despues jugadores porque es id
    random = Math.floor(Math.random()*$jugadores.length), //math.random:da # de 0 entre 1 y multiplicamos por tamaño de juagdores
    //math.flor, usamos para redondear a # inferior, ya que hay 9 posiciones y empieza desde cero
    winner = $jugadores[random];//winner, es un lis item, elementos que tiene la clase player, para extraer el contenido usamos textContent

    return `El ganador es: ${winner.textContent}`
}
//**************** fin creacion de sorteo, despues escribimos, lo siguiente en consola de youtube ************/
//getWinnerComment("ytd-comment-thread-renderer #author-text yt-formatted-string");
//ytd-comment-thread-renderer: es la etiqueta de html de youtube que contiene todo el comewntario de una persona
//#author-text: es el id de la etiqueta html de youtube 
//yt-formatted-string: es la ultima etiqueta que contiene el nombre de la persona del comentario
