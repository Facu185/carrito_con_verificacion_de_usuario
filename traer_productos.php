<?php
include_once("conect.php");
try {
    // Ejecutar una consulta SELECT
    $sql = "SELECT nombre, precio, stock, detalle, imagen FROM productos";
    $stmt = $conn->query($sql);
    // Recuperar los resultados de la consulta
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolver los resultados como una respuesta JSON
    header('Content-Type: application/json');
    echo json_encode($results);
} catch (PDOException $e) {
    echo "Error de consulta: " . $e->getMessage();
}

// Cerrar la conexión con la base de datos
$conn = null;
?>