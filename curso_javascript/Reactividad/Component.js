
// creamos una f. anonima autoejecutable o auto imbocable
//como estos trabajando con prototipos aqui no usamos arrow functions, porque necesito usar el "this"
const Component = (function (){

    //Creamos el contructor de este componente
    const Constructor = function(options){ //f. q recibe ciertas opciones:options

        this.el = options.el; //cual es el elemento del dom q va hacer referencia este:"this.el", es lo q venga en options.el
        this.data = options.data; //cual es el elemento del dom q va hacer referencia este:"this.data", es lo q venga en options.data, "this.data" es un estado
        this.template = options.template; //lo mismo explica de anterior, this.template(el cod. del template html q quieres ejecutar) 
    };

    //Agregamos los métodos al prototipo del constructor del componente
    //para no hacer una duplicacion de instancias y mejorar el rendimiento de nuestra app en js; vamos asignar cada uno de los metodos q vamos a generar al prototipo de este constructor
    //para generar instancias no se dupliquen sino accedan directamente al prototypo 
    

    //Render UI
    Constructor.prototype.render = function(){ //al Constructor. agregams en su prototype asignmos un metodo llamado render y le asignams una funcion

        const $el = document.querySelector(this.el); //como m pueden pasar un name  de id, class,... por eso usamos querySelector, la propiedad donde se guarda el selector es: this.el
        if(!$el) return; //si no existe el $list en el dom no hagas nada y salte de la funcion

        //si existe
        $el.innerHTML = this.template(this.data); //inserta contenido lo q tenemos en nuestra funcion template()
        //y le pasamos this.data, para q renderice dinamicamente la UI, this.data = template.data

        console.log(this.data);//imprime inicialmente: {todoList: Array(3)}
    };

    //Actualizar el State de forma Reactiva
    Constructor.prototype.setState = function( obj ){ //setState recibe un obj. o array q va reemplazar el nuevo estado

        for(let key in obj){// obj: es un objeto o array q le estamos pasando y dentro de este tenemos propiedad que esta definido por "key"
                
            //hasOwnProperty: evalua q una llave existe dentro de un obj.
            //si this.data.hasOwnProperty tiene alguna propiedad q coincida con los q estamos iterando del "obj" q recibe la f. setState
            if(this.data.hasOwnProperty(key)) {
                //cuando eso se cumpla
                //vamos a reemplazar la propiedad original del template.data, por uno new q viene de "obj" y este  a su vez esta dentro de setState
                this.data[key] = obj[key];//al "this.data" original en esa llave quiero q reemplces su valor por el "obj" q esta recibiendo la funcion setState en esa llave
            }
        }
        //al final de este for ejecutamos...
        this.render(); //como "render", tenemos dentro del mismo constructor solos ponemos "this.render()"

    };

    //Obtenemos una copia inmutable del State
    Constructor.prototype.getState = function(){
        //f. anonimas no retornan implicitamente como las arrow function
        return JSON.parse(JSON.stringify(this.data)); //como quiero una copia quiero q este desvinculado del "this.data"
        //JSON.parse(JSON.stringify(this.data)) : es un obj. total mente diferente al "this.data"
        //el metodo parse(): permite si una cadena de texto esta en formato json lo convierte a obj. javascript
        //stringify(): hace lo contrario; de un obj. javascript, lo convierte a una cadena de texto en formato json 
        //y este obj. a convertir en cadena de texto es "this.data"
    };

    return Constructor; //retorna este constructor
    //este constructor va tener ciertos metodos
})();