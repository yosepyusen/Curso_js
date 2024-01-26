const d = document,
    w = window;

export default function speechReader(){

    //selecionamos los tres etiquetas del html con id siguientes
    const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),

        // SpeechSynthesisUtterance de la API de voz web representa una solicitud de voz. Contiene el contenido que el servicio de voz debe leer e información sobre cómo leerlo (por ejemplo, idioma, tono y volumen).
        speechMessage = new SpeechSynthesisUtterance(); //nueva instancia del obj. iterance, SpeechSynthesisUtterance, q nos va permitir interactuar con las voces
        
        //console.log(speechMessage);//imprime: SpeechSynthesisUtterancelang, tiene varios eventos entre ellas esta "voice: null"(para asignar una voz en particular)
        
        let voices = []; //creamos un arreglo vacio 
        //SpeechSynthesis {pending: false, speaking: false, paused: false, onvoiceschanged: null}, es un objeto de varios eventos y el onvoiceschanged(cambio de voz de una a otra)
        //speechSynthesis.getVoices(); al momento de ejecutar nos devuelve varias voces dependiendo del navegador y cada una de estas voces tienes sus objetos
        //0:SpeechSynthesisVoice... tiene su propiedad ejem: voiceURI: Microsoft Helena - Spanish (Spain)

        //DOMContentLoaded:cuando carga el documento; 
        //change:cada que cambiamos una opcion del select, para cambiar la voz; 
        //click:al momento de dar click al boton el narrador lea el texto
        d.addEventListener("DOMContentLoaded",(e)=>{ //
            //console.log(w.speechSynthesis.getVoices());//a la carga del doc trae voz, imprime un arreglo vacio, 
            
            //para que nos salga varias voces tenemos que ejecutarlo en su propiedad: onvoiceschanged
            w.speechSynthesis.addEventListener("voiceschanged",e=>{
                //console.log(e); //si ejecutamos el evento de voiceschanged imprime:Event {isTrusted: true, type: 'voiceschanged', target: SpeechSynthesis, currentTarget: SpeechSynthesis, eventPhase: 2, …}
                
                //una vez detectado el evento... guardamos las voces con getvoices en la variable voices
                voices = w.speechSynthesis.getVoices();

                //si mandamos imprimir ahora si nos imprime la voces q encuentra
                //console.log(voices);

                voices.forEach(voice =>{ //por cada voz encontrada vas hacer lo siguiente...
                    const $option = d.createElement("option");
                    $option.value = voice.name//cel valor dentro etiqueta option ponemos, lo que venga en cada una de los nombres de las voces
                    $option.textContent = `${voice.name} *** ${voice.lang}`//en su contenido ponemos el nombre del voz con voice.name(name:"Microsoft Helena - Spanish (Spain)") y voice.lang tiene de valor(lang:"es-ES")
                    
                    //en la sig. linea cargamos las voces obtenidas
                    $speechSelect.appendChild($option); //dentro de la etiqueta $speechSelect, pasamos el valor con appendChild el valor de $option
                    
                });
            });
        });

        d.addEventListener("change",e=>{
            if(e.target === $speechSelect){ //si el objt. q origina el evento es el $speechSelect
                //console.log(e.target);//imprime los selects que tiene cada uno con su valor
                
                //SpeechSynthesisUtterance, hay una propiedad voice o speak q vamos usar(speechMessage.voice)
                speechMessage.voice = voices.find(voice => voice.name === e.target.value); //ejecutamos el metodo find(buscar el nombre de la voz con el valor)
                //voice => voice.name === e.target.value , si la propieda voice.name coinccide con el valor del option del select, entonces te asignas esa voz
                
                //comentamos a modo de aprendizaje la sig. linea
                //console.log(speechMessage); //speechMessage inicial mente empieza con voice : null ahora tiene voice: SpeechSynthesisVoice {voiceURI: 'Microsoft Laura...
                

            }
        });
        d.addEventListener("click",e=>{ //cuando dea click
            if(e.target === $speechBtn){ //si el target es igual al $speechBtn
                speechMessage.text = $speechTextarea.value;//en su propiedad text de speechMessage, ese valor lo obtenemos del valor lo q escribe en $speechTextarea 
               
                //speechSynthesis q hable con speak y le paso el texto q va hablar q esta dentro de speechMessage
                w.speechSynthesis.speak(speechMessage);
            }
        });

}