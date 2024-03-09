
<?php

//isset evalua si una variable en php existe
//cuando mandas datos por POST, la variale $_POST se crea
if (isset($_POST)) { //cuando la variable de tipo post este definida

    //echo $_SERVER["HTTP_HOST"]; //imprime: localhost

    //error_reporting(0); //no me mandes reportes de errores cuando colocas 0
    
    //variables del formulario
    $name = $_POST["name"];//viene del name que es del input del formulario
    $email = $_POST["email"]; //
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
    
    //variables que necesito para la peticion trabaje
    $domain = $_SERVER["HTTP_HOST"]; //para obtener URL del sitio usamos $_SERVER, HTTP_HOST: obtiene el dominio de esta pagina
    $to = "yuchinnaxe@gmail.com"; //el correo yaguirreobregon@gmail.com ; te envia con form submit porque este correo esta registrado
    
    //reescribimos la variable de $subject
    $subject_mail = "Contacto desde el formulario del sitio $domain."; //el <b></b> : no reconoce si le pongo en esta linea de cod.
    $message = "
    <p>
    Datos enviados desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
        <li>Nombre: <b> $name</b></li>
        <li>Email: <b> $email</b></li>
        <li>Asunto: $subject</li>
        <li>Comentarios: $comments</li>
    </ul>
    ";

    $header = "MIME-Version: 1.0\r\n"."Content-Type:text/html; charset=utf-8\r\n"."From: Envío automatico No Responder <no-reply@$domain>"; //el dominio lo tenemos en variable $domain 
    //la primera comilla de $header, especifica el tipo de mime-type, como de contenido que se envian dentro de las cabeceras cuando hacemos una peticion a la web: 
    //"MIME-Version: 1.0\r\n" , especificamos la version a usar \r: enter(retorno de carro) y \n:salto de linea

    //2da especificamos comilla: Content-Type:text/html; charset=utf-8\r\n, donde decimos q el tipo de contenido q sea en formato de texto html y que sea codificado en utf-8

    //3ra ayuda para q no llegue a bandeja de span que aunque es correo q se envia automaticamente, te llegue una cabecera de from: de quien te esta enviando

    //para ejecutar la funcion mail de php, se llama mail y recibe $to:aquien va dirigido el correo, $subject:asunto, mensaje:$message, ...
    //... $header:cabeceras (donde podemos aqui mecionar el remitente del email, que sea en formato html, con codificacion utf8, etc.)
    $send_email = mail($to,$subject_mail,$message,$header); //si se envia se marca a true y sino a false:err

    //para ejecutar el mail, tendria q tener un servidor q localmente que envie peticiones por SMTP(que es el protovolo del envio de correo electronico)
    if($send_email){ //$send_email evalua a verdadero, esto es lo que ya vamos a mandar a la peticion fetch
        $res =[
            "err"=>false, //no hubo error
            "message" => "Tus datos han sido enviados"
        ];
    }else{
        $res =[
            "err"=>true, //error a verdadero
            "message" => "Error al enviar tus datos. Intenta nuevamente"
        ]; 
    }

    //agregar cabecera a este cod. php, para q pueda soportar(NO SALGA EL ERROR DE CROS) el intercambio desde cualquier origen desde el cualquier servidor 
    //header("Access-Control-Allow-Origin:*");//cual va ser el control de acceso origen, el asterisco es para recibir peticiones de cualquier lado
    //header("Access-Control-Allow-Origin:https://jonmircha.com/");// pero si es para recibir peticion de cualquier lado, va consumir recurso de tu servidor pero en ese caso especificamos el dominio

    //el tipo de cabecera que esta respondiendo este php esta en formato json
    header('Content-type:application/json');
    
    //imprimimos la $res:respuesta, pero la respuesta tiene que estar codificado en json 
    echo json_encode($res);

    exit;//final mente decimos salte
}
