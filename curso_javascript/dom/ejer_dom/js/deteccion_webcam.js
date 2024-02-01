const d = document,
    n= navigator;

export default function webCam(id){

    const $video = d.getElementById(id);
    //se hace la comprobacion en las 2 sig. lines
    //console.log(n.mediaDevices);//imprime un objeto:MediaDevices {ondevicechange: null}
    //console.log(n.mediaDevices.getUserMedia);//imprime:ƒ getUserMedia() { [native code] }, 
    
    if(n.mediaDevices.getUserMedia){
        //getUserMedia, recibe param. como activar el video, activar el audio, pero en este caso ponemos audio no activamos
        n.mediaDevices.getUserMedia({video:true, audio:false})//esta linea de cod. es como promesa:class 47
        .then((stream) =>{//en este metodo van recibir los trozos de la visualizacion de la camara, metodo then es para que van hacer con el stream de datos que devuelve la funcion getUserMedia
            console.log(stream);//stream, es un objeto y dicho obj, vamos a mandar al src dentro del etiqueta video con ayuda de srcObject, ya que el stream es:...
            //Stream es una colección de datos que no esta disponible de una sola vez, ya que se transmite fragmento a fragmento
            $video.srcObject = stream; //mandamos el url pero a manera de objeto
            $video.play();//con esto decimos que capte la camara en tiempo real, sin esto ariamos que la camara tome una captura y se quede ahi
        }) 
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin",`<p>¡Sucedió el sig. error!<br><mark>${err}</mark></p>`);//beforebegin(hermano anterior)
            console.log(`¡Sucedió el sig. error!:${err}`)
        
        });//catch para capturar el error
        
    }
}