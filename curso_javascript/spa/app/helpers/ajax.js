export async function ajax(props){ //peticion ajax sea asincrona, internamente esta funcion ya funciona con async await
//se agrega async porque el loader tiene que aparecer en la seccion de home pero no en seccion de búsqueda y contacto

    //objeto a destructurar props
    //para peticion ajax es necesario url, tbm el metodo para consultar es necesario:POST, GET, HEADS, METODOS en particulares, pero en este caso no es necesario porque solo voy a consumir data
    //si van usar post, get ponemos methos, headers
    //en este caso solo necesitamos url, cbSucces:callback de exito, 
    let { url, cbSucces } = props; 

    await fetch(url) //este fetch tiene q esperar q hasta q no devuelva la ejecucion del run time de nuestro codigo, hasta q nuestro peticion fetch se haya cumplido
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSucces(json)) //la funcion q el usuario me pase en caso de exito y eso ejecuto y le paso toda la data q la peticion fetch
    .catch(err=>{

        console.log(err);
        //ahora el error se mostrara en etiqueta con id "main" 
        let message = err.statusText || "Ocurrió un error al acceder al API"; //si el statusText viene vacio Ó ponemos el mensaje Ocurrio un error
        document.getElementById("main").innerHTML = `
            <div class="error">
                <p>Error ${err.status}: ${message}</p>
            </div>
            `;//recordamos que xhr.status: es cod. de exito o error
        
        //ocultamos el loader
        document.querySelector(".loader").style.display = "none";

    })
}