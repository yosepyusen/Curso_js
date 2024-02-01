const d = document,
    ls = localStorage;
//classDark:le va quitar o poner atributo
export default function darkTheme(btn, classDark){ //se puede aplicar el modo oscuro al body o html, pero si vas a aplicar este modo oscuro a varios elementos de html, para eso ayudamos de data atribute
    const $themeBtn = d.querySelector(btn),//seleccionamos la clase pasada en btn
        $selectors = d.querySelectorAll("[data-dark]"); //seleccionamos todo los elementos que tiene este atributo, cuando quieres aplicar por tipo de atributo especifican corchetes y sirven mas cuando quieres agregar modo oscuro a varios elementos html a la vez

    //la sig. linea descomentamos para entender merjor
    //console.log($selectors); //imprime:NodeList(2) [html, body], ya que a estos dos aplicamos el atributp "data-dark"

    let moon = "🌙", //este luna o sol va cambiar de acuerdo al modo 
        sun ="☀️";

    //---------inicio clase 89 -----------
    const lightMode = ()=>{
        $selectors.forEach(element => element.classList.remove(classDark)); //por cada selector que tenga ese atributo($selectors), y vas a entrar a cada elemento por el forEach y vas a entrar a su lista de clases y le vas quitar la classDark
        //adicional cambiamos el boton a luna
        $themeBtn.textContent = moon;
        //aparte de cambiar modos a los elementos de html y cambiar icono sol a luna 
        //tambien tendriamos para que se almacene el ultimo cambio en local storage
        ls.setItem("theme","light");//establecemos el key con su valor de light 
    }
    const darkMode = ()=>{
        $selectors.forEach(element => element.classList.add(classDark)); //por cada selector que tenga ese atributo($selectors), y vas a entrar a cada elemento por el forEach y vas a entrar a su lista de clases y le vas agregar la classDark
        //adicional cambiamos el boton a sol
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");//establecemos el key con su valor de light 
    }
    //--------- fin clase 89 -----------

    d.addEventListener("click",e=>{ //agregamos el evento cuando dea click
        if(e.target.matches(btn)){
            //la sig. linea descomentamos para entender merjor
            //console.log($themeBtn.textContent); //imprime:🌙, $themeBtn(es el boton de sol o luna), textContent:es la propiedad textual
            if($themeBtn.textContent === moon) {//si el $themeBtn en su propiedad textContent es igual a moon
                //solo llamamos a la funcion
                darkMode();
            }else{
                //solo llamamos a la funcion
                lightMode();
            }
        }
    });

    //---------inicio clase 89 -----------
    //a parte del evento click necesitamos desencadenar un evento de DOMContentLoaded(es para que cuando vuelva a cargar, la pagina se encuentre en modo oscuros, siempre y cuando el usuario dejo en modo oscuro )
    d.addEventListener("DOMContentLoaded",e=>{ //este DOMContentLoaded, no se puede ejecutar dentro de otro DOMContentLoaded
        //console.log(ls.getItem("theme"));//imprime:null
        if(ls.getItem("theme")=== null) { //si de localStorage obten un elemento(getItem de tipo theme), es decir si  no existe ningun variable de tipo localStorage que se llame theme
        //y si es igual a null el item de localStorage, entonces:ls.setItem(), la primera vez que no existe este variabel en el navegador y establecemos un nuevo valor
        //setItem("theme",): primer valor que recibe key(nombre de variable) , y el 2do es value(es el valor):"light" 
            ls.setItem("theme","light");//
        }
        if(ls.getItem("theme") === "light"){ //si item de localStorage su valor es igual a "light" 
            lightMode();//ejecutamos la funcion de modo normal, ya que internamente dentro de la funcion esta llamando a localStorage para que conserva el cambio a modo normal o light
        }

        if(ls.getItem("theme") === "dark"){ //si item de localStorage su valor es igual a "dark" 
            darkMode();//ejecutamos la funcion de modo oscuro, ya que internamente dentro de la funcion esta llamando a localStorage para que conserva el cambio a modo dark
        }

    });
    //--------- fin clase 89 -----------
}

//explicacion breve: 1mero carga el DOMContentLoaded, como es 1ra vez va entrar en el primer if, dentrado del if, asigna:ls.setItem("theme","light")
//ahora si vueleve a recargar va entrar en el 2do o 3cer if, dependiendo del valor de si es light o dark
//el 2do y 3cer if son llamados para conserve el modo cuando la pagina es recargada o es cerrada y es vuelta a abrir
//estos dos funciones darkMode() y lightMode(), internamente establecen el valor de local storage: ls.setItem("theme","dark") ó ls.setItem("theme","light"), respectivamente
//es como un cache el localStorage