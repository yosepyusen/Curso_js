const d = document,
    w = window,
    n = navigator;

export default function networkStatus(){
    
    const isOnline = () =>{ //1ro creamos como arrow function
        const $div = d.createElement("div"); //despues creamos un etiqueta div y almacenamos en $div 

        if(n.onLine){//si la propiedad n.navigator es verdadera ejecuta el if, caso contrario el else
            $div.textContent = "Conexión Restablecida";/* es como poner texto dentro del div con el textcontend */
            $div.classList.add("online");//agregamos una clase:online a la variable $div
            $div.classList.remove("offline");//quitamos la clase offline
        }else{
            $div.textContent = "Conexión Perdida";/* es como poner texto dentro del div con el textcontend */
            $div.classList.add("offline");//agregamos una clase:offline a la variable $div
            $div.classList.remove("online");//quitamos la clase online
        }

        //despues creada ese div, dinamicamente, apegamos al body del html
        d.body.insertAdjacentElement("afterbegin",$div);
        // en la pestaña de elementos de html, implicitamente esta creada ya los dos div, una que dice:Conexión Restablecida y el otro:Conexión Perdida
        //Pero como la div de online, predomina y tapa al el otro div:Conexión Restablecida, para evitar ello creamos un setTimeout...
        setTimeout(() =>d.body.removeChild($div),2000); //removeChild, es para remover la etiqueta div creada dinamicamente  
    };
    
    //al inicio no imprime nada pero despues si desconectas el internet imprime false y si reconectas a true
    // w.addEventListener("online",(e)=>console.log(n.onLine));//con esto imprime true si hay internet
    // w.addEventListener("offline",(e)=>console.log(n.onLine));//con esto imprime false si no hay conexion
    w.addEventListener("online",(e)=>isOnline());
    w.addEventListener("offline",(e)=>isOnline());
}