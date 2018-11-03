<?php

$recepient = "accauamoro@gmail.com";
$sitename = "Julen Uribe Fotografo";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Nombre: $name \nTelefono: $phone \nE-mail: $email \nMensaje: $text";

$pagetitle = "Nuevo mensaje desde \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
