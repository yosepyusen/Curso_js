const d= document;

//creamos variables X e Y, que nos van permitir controlar el movimiento
let x=0,y=0;

export function shortcuts(e){ //este funcion funciona con el evento:keydown
    // console.log(e);//imprima el evento
    // console.log(e.type);//para ver el tipo de evento 
    // console.log(e.key);//key nos da la tecla que pulsaste, va aparecer cuando es una letra o #, caso que es tabulador aparecera vacio
    // console.log(e.keyCode);//nos da # del codigo de la tecla que pulsaste
    // console.log(`ctrl: ${e.ctrlKey}`);//imprime:si false porque no presionamos ctrl, para teclas especiales como ctrl o alt
    // console.log(`alt: ${e.altKey}`);//imprime:si false porque no presionamos alt, para teclas especiales como ctrl o alt
    // console.log(`shift: ${e.shiftKey}`);//imprime:si false porque no presionamos shiftKey, para teclas especiales como ctrl o alt

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

export function moveBall(e,ball,stage){//recibe 3 parametros: e:evento, ball:selector de la pelota y selector de escenario:stage
    const $ball =  d.querySelector(ball), //guardamos la clase ".ball", en variable $ball
        $stage = d.querySelector(stage);//guardamos la clase ".stage", en la variable $stage

        //limitar el movimiento de la pelota
    let limitsBall = $ball.getBoundingClientRect(),//getBoundingClientRect, nos da un obj. con la anchura, altura, posicion en x, posicion en y, tambien que tan alejado esta de los margenes top,right,buttom,left
        limitsStage = $stage.getBoundingClientRect();

    //estas 3 lineas siguientes lo comentamos, si queremos entender lo descomentamos
    // console.log(e.keyCode);//nos da # del codigo de la tecla que pulsaste
    // console.log(e.key);//key nos da la tecla que pulsaste
    // console.log(limitsBall,limitsStage);//immprime dos obj. de tipo DOMRect(de ArrowDown, o de ArrowLeft), ya que uno es de limitsBall, limitsStage, con sus propiedades:bottom, height, left, right, top, width, x, y, las propiedades que se mueven son: bottom,top,left y right

    //e.preventDefault()//si ejecutamos el prevent,lo que se va hacer es apagar todo los comportamientos por defecto que tenga mi teclado, por eso no es recomendable poner aqui y evitar cancelar todo los comportamientos por defecto q tuvieran las teclas de la pc

    switch (e.keyCode) { //evaluamos segun el numero de cada letra que pulseamos
        case 38: //cuando vale arriba, es decir la tecla de flecha arriba
            //move("up");
            if(limitsBall.top > limitsStage.top) {
                e.preventDefault();//entonces prevenimos el comportamiento solo cuando presionamos las flechas y cuando estan dentro de este condicional
                y--;
            }
            //y--; //cuando pulse flecha arriba disminuimos el "Y" , es al revez al plano cartesiano
            break;
        
        case 40: //cuando vale abajo, es decir la tecla de flecha abajo
            //move("down");
            if(limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            //y++;//cuando pulse flecha abajo aumentamos en uno el "Y" 
            break;
    
        case 37: //cuando vale izquierda, es decir la tecla de flecha izquierda
            //move("left");//pasamos el valor de left
            if(limitsBall.left > limitsStage.left) {//si el limite de la pelota en left(limitsBall.left), es mayor al limite del escenario(limitsStage.left), en el mismo margen, solamente cuando eso ocurra, disminuya el valor de x
                e.preventDefault();
                x--; 
            }//si vemos en consola el valor inicial de limitsBall de su left es de 347 y en cambio el valor inicial de limitsStage de su left es 32, por eso la condicion de (limitsBall.left > limitsStage.left)
            //x--;//cuando pulse flecha izquierda disminuimos el "x" 
            break;
            
            case 39: //cuando vale derecha, es decir la tecla de flecha derecha
            //move("right");
            if(limitsBall.right < limitsStage.right) {//si el limite de la pelota(limitsBall.right), es menor al limite del escenario(limitsStage.right), en el mismo margen, solamente cuando eso ocurra, aumenta el valor de x
                e.preventDefault();
                x++; 
            }//si vemos en consola el valor inicial de limitsBall de su right es de 411 y en cambio el valor inicial de limitsStage de su right es 726, por eso la condicion de (limitsBall.right < limitsStage.right)
            //x++;//cuando pulse flecha derecha aumentamos el "x" 
            break;
    
        default: //con default no hacemos nada pero le dejamos
            break;

        }
        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;//con style usamos el css y la propiedad transform movemos la pelota, ya que es mas fluido
        //a cada que pulse una tecla hacia la direccion que sea, pues vamos a mover la funcion translate(X=10px, Y=10px) de css, este movimiento le voy a controlar con variables
        //translate(${x*10}px, ${y*10}px), con esto le multiplicamos por 10 el valor de X e Y, podemos multiplicar * 5 si deseamos va depender de como quieres q se mueve, rapido o despacio
}