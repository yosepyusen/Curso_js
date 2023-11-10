
export default function hamburgerMenu(panelBtn,panel){
    const d= document; //guardamos en variable "d", el document 
    d.addEventListener("click",e=>{
        if(e.target.matches(panelBtn)); //si el obj.(target) que origina el evento, coincide con el selector que me estas dando en el panelBtn
    })
}