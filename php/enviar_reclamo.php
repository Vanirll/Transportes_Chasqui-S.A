<?php
// Verifica que se haya enviado el formulario por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura los datos del formulario de forma segura
    $nombre    = htmlspecialchars($_POST['nombre']);
    $email     = htmlspecialchars($_POST['email']);
    $telefono  = htmlspecialchars($_POST['telefono']);
    $tipo      = htmlspecialchars($_POST['tipo']);
    $fecha     = htmlspecialchars($_POST['fecha']);
    $mensaje   = htmlspecialchars($_POST['mensaje']);

    // Aquí puedes hacer varias cosas: guardar en BD, enviar correo, etc.
    // En este ejemplo, vamos a simular el envío y mostrar un mensaje

    // Simulación de éxito
    echo "<script>
        alert('Tu reclamo fue enviado correctamente. Gracias por contactarnos.');
        window.location.href = 'index.html'; // Redirecciona al inicio
    </script>";
} else {
    // Si alguien accede directamente, lo redirigimos al formulario
    header("Location: Libro de reclamaciones.html");
    exit();
}
?>
