//algunas paginas web, no tienen un mismo enlace ejem: 
// para contenido pc es: https://www.huffpost.com/ y para mobile es:https://www.huffpost.com/, pero otras paginas cuando es para mobile cambian de url, estos w son reemplazados por m, ejem: https://m.huffpost.com/

//El objeto navigator se emplea habitualmente para detectar el tipo y/o versión del navegador en las aplicaciones cuyo código difiere para cada navegador.
//Navigator.userAgent devuelve la cadena del agente de usuario para el navegador actual.

const d = document,
    n = navigator,
    ua = n.userAgent
    //d,n, ua : son variables donde se guardan forma abreviada document, navigator, useragent 
export default function userDeviceInfo(id){//id donde captura toda la informacion que se va extraer del user-agent
    
    const $id = d.getElementById(id),

    isMobile = { //isMobile: si viene de un dispositivo, isMobile, tiene propiedades 
        //la variable: android, ios y window esta declarado en una arrow function
        //El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
        android: () => ua.match(/android/i), //ua.match(/android/), user agent o que va tratar de buscar si en la cadena del texto del user agent, encontro la palabra "android", y la bandera: i(ignora mayusc y minculas), se esta usando expresion regular: /android/
        ios: ()=> ua.match(/iphone|ipad|ipod/i),//detectar si tiene la palabra iphone,ipad,ipod el user agent
        windows: ()=> ua.match(/windows phone/i),//detectar si tiene la palabra windows phone, para dispositivos de windows
        any: function(){ //esta declara en una funcion anonima, porque hace referencia a los 3 propiedades de este obj. por eso uso f.anonima y si ponemos arrow function nos va dar el this del contexto global
            return this.android() || this.ios() || this.windows();
        },
    }, 
    
    //isDesktop: si viene de un pc
    isDesktop = {
        linux: () => ua.match(/linux/i), 
        mac: ()=> ua.match(/mac os/i),
        windows: ()=> ua.match(/windows nt/i),
        any: function(){ 
            return this.linux() || this.mac() || this.windows();//
        }   
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i), 
        safari: ()=> ua.match(/safari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera|opera mini/i),
        ie: ()=> ua.match(/msie|iemobile/i),
        edge: ()=> ua.match(/edge/i),
        any: function(){ //
            return (

                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera() ||
                this.ie() ||
                this.edge()
                
            );
        }, 
    };
    console.log(isMobile.android());//si sale null en consola es porque no hay ese tipo de celular o pc, es mas para validar
    //console.log(ua);//imprime: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 , nos buen info. del dispositivo desde que nos visita el usuario, la info. va cambiar segun el navegador en que estas y el pc o mobil  
    //en inspeccionar si cambiamos a mobil nos imprime: Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 , en este caso dice que estmos en moobil

    $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${ua}</b></li>
    </ul>
    `;
}   