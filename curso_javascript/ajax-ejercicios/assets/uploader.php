<?php

    //echo "Hola, desde el servidor "; //si descomentamos nos va dar error

    //var_dump — Muestra información sobre una variable
    //$_FILES — Variables de subida de ficheros HTTP

    //descomentar a modo de aprender mas...
    //var_dump($_FILES["file"]); //con esto imprime un array: array(1) {...  , si subiste un solo archivo:array de tamaño 1 y si subes 2 o 3 archivos, array de tamaño 2,3
    
    if(isset($_FILES["file"])){ //isset evalua si una variable en php existe, nombre de "file", viene del script, creada dentro del formData
        //ese nombre "file", es como le recibe php y viene de formData
        $name = $_FILES["file"]["name"]; //guardamos el nombre del archivo
        $file = $_FILES["file"]["tmp_name"]; //guardamos el archivo
        $err = $_FILES["file"]["error"]; //guardamos el err de cada archivo
        $destino = "files/$name"; //subas una carpeta ../ , despues entras a file y despues guarda con el mismo nombre:$name

        //move_uploaded_file, recibe 1mer parametro: el archivo como tal y 2do parametro: el destino
        $upload = move_uploaded_file($file, $destino);//para mover es file del directorio temporal del servidor al que queremos
        //si se sube el archivo devuleve un bolean a verdadero y falso cuando no se sube
        
        if($upload){ //si la variable se ejecuta a true

            $res = array( //creamos una variable en formato arreglo, con las siguientes propiedades
                "err" => false, //ponemos "err":variable a falso pq no hubo error
                "status" => http_response_code(200), //cuando es exitosa se pone 200
                "statusText" =>"Archivo $name subido con éxito", //statusText, es idependiente si usamos ajax o fetch o axios este es como estandar
                "files" => $_FILES["file"]//mandamos todo el obj. files (mandar de php a js informacion)
            );
        }else{

            $res = array( //creamos una variable en formato arreglo, con las siguientes propiedades
                "err" => true, //ponemos "err":variable a true pq hubo error
                "status" => http_response_code(400), //cuando es error se pone 400
                "statusText" =>"Error al subir el archivo $name", //statusText, es idependiente si usamos ajax o fetch o axios este es como estandar
                "files" => $_FILES["file"]//mandamos todo el obj. files (mandar de php a js informacion)
            );
        }

        echo json_encode($res); //codificamos el arreglo asociativo de $res a formato json, lo q va leer js y lo mandamos en formato json
    }

    // Si un fichero contiene código PHP puro, es preferible omitir la etiqueta de cierre de PHP al final del fichero. 
    // Esto impide que se añadan espacios en blanco o nuevas líneas después de la etiqueta de cierre de PHP, 
    // los cuales pueden causar efectos no deseados debido a que PHP iniciará la salida del buffer cuando no había 
    // intención por parte del programador de enviar ninguna salida en ese punto del script.

