
export default function hamburgerMenu(panelBtn,panel){
    const d= document; //guardamos en variable "d", el document 

    d.addEventListener("click",(e)=>{//si doy click en el boton de clase(.panel-btn) que le pasamos en index_dom.js, luego ejecutamos el if()
        
        if(e.target.matches(panelBtn)){  //si el obj.(target) que origina el evento, coincide con el selector que me estas dando en el panelBtn
            d.querySelector(panel).classList.toggle("is-active");//con esto le decimos que selecionamos la clase(.panel guardado en varible panel), con classList para entrar en su lista de clase y utiliza el metodo toogle y intercambiar esa clase "is-active"
        }
    })
}