
export default function hamburgerMenu(panelBtn,panel,menuLink,hamburgerInner,hamburgerBox){//si usamos la 2da forma no necesitamos pasarle estos dos parametros:hamburgerInner,hamburgerBox
    const d= document; //guardamos en variable "d", el document 

    //usamos la delegacion de eventos que evita la propagacion de los eventos y problemas que tenemos cuando asignamos a un elemento en particular a los eventos
    d.addEventListener("click",(e)=>{//si doy click en el boton de clase(.panel-btn) que le pasamos en index_dom.js, luego ejecutamos el if()
        
        // ------------- primera forma -------------
        if(e.target.matches(panelBtn) || e.target.matches(hamburgerInner) || e.target.matches(hamburgerBox)){  //si el obj.(target) que origina el evento, coincide con el selector que me estas dando en el panelBtn
            d.querySelector(panel).classList.toggle("is-active");//con esto le decimos que selecionamos la clase(.panel guardado en varible panel), con classList para entrar en su lista de clase y utiliza el metodo toogle y intercambiar esa clase "is-active"
            d.querySelector(panelBtn).classList.toggle("is-active");//con esto le añadimos una clase 
        }

        // ------------- segunda forma -------------
        // if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){  //si el obj.(target) que origina el evento, coincide con el selector que me estas dando en el panelBtn
            // e.target.matches(`${panelBtn} *, con esto le decimos que cualquier elemento hijo que pulses va activar ese intercambio de clases, ademas no es necesario pasarle como parametro: hamburgerInner, hamburgerBox

            //d.querySelector(panel).classList.toggle("is-active");//con esto le decimos que selecionamos la clase(.panel guardado en varible panel), con classList para entrar en su lista de clase y utiliza el metodo toogle y intercambiar esa clase "is-active"
        // }

        //------ para ocultar el boton ----
        if(e.target.matches(menuLink)){ //si el evento coincide lo que viene la clase en menuLink(".menu a"), entonces que ejecute lo siguiente
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}