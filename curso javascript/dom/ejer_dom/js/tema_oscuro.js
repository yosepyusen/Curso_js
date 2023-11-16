const d = document;
//classDark:le va quitar o poner atributo
export default function darkTheme(btn, classDark){ //se puede aplicar el modo oscuro al body o html, pero si vas a aplicar este modo oscuro a varios elementos de html, para eso ayudamos de data atribute
    const $themeBtn = d.querySelector(btn),//seleccionamos la clase pasada en btn
        $selectors = d.querySelectorAll("[data-dark]"); //seleccionamos todo los elementos que tiene este atributo, cuando quieres aplicar por tipo de atributo especifican corchetes y sirven mas cuando quieres agregar modo oscuro a varios elementos html a la vez

    //la sig. linea descomentamos para entender merjor
    //console.log($selectors); //imprime:NodeList(2) [html, body], ya que a estos dos aplicamos el atributp "data-dark"

    let moon = "🌙", //este luna o sol va cambiar de acuerdo al modo 
        sun ="☀️";

    d.addEventListener("click",e=>{ //agregamos el evento cuando dea click
        if(e.target.matches(btn)){
            //la sig. linea descomentamos para entender merjor
            //console.log($themeBtn.textContent); //imprime:🌙, $themeBtn(es el boton de sol o luna), textContent:es la propiedad textual
            if($themeBtn.textContent === moon) {//si el $themeBtn en su propiedad textContent es igual a moon
                $selectors.forEach(element => element.classList.add(classDark)); //por cada selector que tenga ese atributo($selectors), y vas a entrar a cada elemento por el forEach y vas a entrar a su lista de clases y le vas agregar la classDark
                //adicional cambiamos el boton a sol
                $themeBtn.textContent = sun;
            }else{
                $selectors.forEach(element => element.classList.remove(classDark)); //por cada selector que tenga ese atributo($selectors), y vas a entrar a cada elemento por el forEach y vas a entrar a su lista de clases y le vas quitar la classDark
                //adicional cambiamos el boton a luna
                $themeBtn.textContent = moon;
            }
        }
    });
}