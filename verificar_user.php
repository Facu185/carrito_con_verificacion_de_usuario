<?php
    include_once("conect.php");

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // Consulta de un único dato
        $Nombre = $_POST["inputUsuario"];
        $Password = $_POST["inputContraseña"];
        
        $consulta = $conn->query("SELECT * from usuario");
        while($dato = $consulta->fetch()) {
            $si= 0;
            if ($Nombre == $dato["username"] && $Password == $dato["password"]) {       
                $si=1;
                
                break;
        }
    }
        
        header('Content-Type: application/json');
        echo json_encode($si);
}

?>