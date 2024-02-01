const d = document,
    n = navigator;

export default function getGeolocation(id){//va recibir el id:geolocation, del div 

    const $id = d.getElementById(id), //la funcion que ejecuta la geolocalizacion, necesita una serie de opciones
        options = {//es un objeto
            enableHighAccuracy: true, //al poner en true le estamos diciendo q el dispositivo trate de hacer la mejor lectura posible, por default viene en false esta propiedad de enableHighAccuracy
            timeout: 5000, //tiempo de espera para poder tomar la lectura, 5000 milisegundos
            maximumAge:0 //para evitar que no se guarden cache las lecturas
        };

    //definimos funcion en caso de exito en la lectura
    //sucess y error son constantes declarados pueden ser otros nombres y position y err: son variables que son pasadas 
    const sucess = (position) =>{
        let cords = position.coords; //del obj. position traeme las coordenadas
        //mandamos imprimir ese posicion
        //console.log(position);//imprime:GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1704824823134}

        //innerHTML, es para escribir dentro de la etiqueta div de geolocalizacion 
        //accuracy: q tan presica es la lectura
        //en google maps 1z posicion mas alejada la escala es de 1-20
        $id.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: <b>${cords.latitude}</b></li>
            <li>Longitud: <b>${cords.longitude}</b></li>
            <li>Presición: <b>${cords.accuracy}</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${cords.latitude},${cords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    }
    
    //definimos funcion en caso de que hay error en la lectura
    const error = (err) =>{
        //console.log(err);
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.mensage}`);
    }

    //accedems a la funcion de geolocalizacion atravez de obj. navigator
    //getCurrentPosition: para obtener la ubicacion actual, este se va ejecutar en caso de exito(1mer parametro), una funcion en caso de error(2do parametro) y las opciones (3cer parametro) 
    n.geolocation.getCurrentPosition(sucess, error, options);
    //getCurrentPosition, si ejecuta error imprime:GeolocationPositionError {code: 1, message: 'User denied Geolocation'}
    //getCurrentPosition, si ejecuta primero, nos da cordenadas GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1704823467016}

    //hay otro posicion: watchPosition, que permite ver la posicion segun va cambiando
}