export function ajax(props){

    //objeto a destructurar props
    //para peticion ajax es necesario url, tbm el metodo para consultar es necesario:POST, GET, HEADS, METODOS en particulares, pero en este caso no es necesario porque solo voy a consumir data
    //si van usar post, get ponemos methos, headers
    //en este caso solo necesitamos url, cbSucces:callback de exito, 
    let { url, cbSucces } = props; 

    fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSucces(json)) //la funcion q el usuario me pase en caso de exito y eso ejecuto y le paso toda la data q la peticion fetch
    .catch(err=>{

        console.log(err);
        let message = err.statusText || "Ocurrió un error al acceder al API"; //si el statusText viene vacio Ó ponemos el mensaje Ocurrio un error
        document.getElementById("root").innerHTML = `
            <div class="error">
                <p>Error ${err.status}: ${message}</p>
            </div>
            `;//recordamos que xhr.status: es cod. de exito o error

    })
}