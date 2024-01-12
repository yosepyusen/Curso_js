const d = document;

export default function slider(){
    // si tu respetas el etiqueta html, y tienes  invocado css y js, todos componentes funcionan

    //seleccionamos los botones de clase .prev y .next, .slider-slide
    const $nextBtn = d.querySelector(".slider-boton .next"),
        $prevBtn = d.querySelector(".slider-boton .prev"),
        $slides = d.querySelectorAll(".slider-slide");//es un node list qie trae toda las slides

        let i=0;

        d.addEventListener("click",e=>{
            if(e.target ===$prevBtn){ //si el obj. que origino el evento es igual a $prevBtn
                e.preventDefault(); //prevenimos el comportamiento por defecto y no nos lleve a la parte arriba de la pagina web cuando demos click en la etique a con clase .prev o .next
                $slides[i].classList.remove("active"); //empieza en el slider cero y quitamos la clase active, la que hace que se muestre
                
                i--; //esto es para que regrese a un slider anerior
                if(i<0){//cuando es menos de cero que regrese a la ultima slider
                    i= $slides.length-1; //$slider.length=4, pero em posicion ultima del slider seria 3 por eso menos 1
                }

                //despues de quitar hay que agregarle a la nueva slider q tiene el valor de i
                $slides[i].classList.add("active");

            }
            if(e.target ===$nextBtn){ //si el obj. que origino el evento es igual a $prevBtn
                e.preventDefault(); //prevenimos el comportamiento por defecto y no nos lleve a la parte arriba de la pagina web cuando demos click en la etique a con clase .prev o .next
                $slides[i].classList.remove("active"); //empieza en el slider cero y quitamos la clase active, la que hace que se muestre
                
                i++; //esto es para q vaya a slider siguiente
                if(i>=$slides.length){//cuando i es mayor o igual al tamaño del slides, es decir en este caso >= a 4
                    i= 0; //entonces reseteamos al primer slider
                }

                //despues de quitar hay que agregarle a la nueva slider q tiene el valor de i
                $slides[i].classList.add("active");
            }
        });
}

/* se puede agregar un set interval para q el slider cada cierto tiempo cambie 
o tbm podemos darle efecto de transiciones cuando cambia el slider a cambio de opaciti */