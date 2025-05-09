<?php
// Verificar que se envió el formulario por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y sanitizar datos
    $nombre = htmlspecialchars(trim($_POST["nombre"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $telefono = htmlspecialchars(trim($_POST["telefono"]));
    $asunto = htmlspecialchars(trim($_POST["asunto"]));
    $mensaje = htmlspecialchars(trim($_POST["mensaje"]));
    $aceptaTerminos = isset($_POST["terminos"]);

    // Validar datos obligatorios
    if (!$nombre || !$email || !$asunto || !$mensaje || !$aceptaTerminos) {
        echo "Por favor, completa todos los campos obligatorios.";
        exit;
    }

    // Componer el mensaje
    $destinatario = "info@chasqui.com"; // Cambia esto por tu correo real
    $titulo = "Nuevo mensaje de contacto: $asunto";
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Asunto: $asunto\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";

    // Enviar el correo
    if (mail($destinatario, $titulo, $contenido, $cabeceras)) {
        echo "Mensaje enviado correctamente. ¡Gracias por contactarnos!";
    } else {
        echo "Ocurrió un error al enviar el mensaje. Intenta más tarde.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
