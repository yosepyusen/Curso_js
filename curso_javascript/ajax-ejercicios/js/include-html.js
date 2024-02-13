document.addEventListener("DOMContentLoaded",(e)=>{
    const includeHTML = (el, url)=>{ //creamos una f. expresada y espera recibir el elemento y se va ejecutar por cada elemento q traiga el data-atribute: el y la url: q tiene q cargar
        
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange",(e)=>{

            if(xhr.readyState !== 4) return; // cuando el readyState del xhr sea diferente de 4

            if(xhr.status >= 200 && xhr.status <300){  //cuando el xhr.status tiene exito

                el.outerHTML = xhr.responseText //el elemento q recibes en su contenido outerHTML, ponle el xhr.responseText, que es una propiedad el responseText, del obj. xhr, donde trae el contenido html

            } else{
                //
                let message = xhr.statusText || "Error al cargar el archivo, verifica si la peticion debe ser por http o https";
                el.outerHTML = `<div><p>Error ${xhr.status} : ${message}</p></div>`;    
            }

        });

        //abrimos la peticion, tiene q ser por metod GET y la url
        xhr.open("GET",url);

        //establecemos la misma cabecera
        xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");

        //enviams la peticion y no necesita datos por eso no enviamos nada
        xhr.send();
    }

    document
        .querySelectorAll("[data-include]") //traeme todo los selectores que taigan el atributo [data-include]
        .forEach(el=> includeHTML(el, el.getAttribute("data-include"))); //por cada uno de ellos, por cada elemento que traiga un data include, entonces vamos ejecutar la funcion html
        //el elemnto es:"el" 1mer parametro del foreach y 2do parametro es url:el.getAttribute("data-include"), getAttribute:para obtener el atributo
});