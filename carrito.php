<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <div class="atras">
        <a href="./index.php">Market</a>
    </div>
    <div class="carrito" id="carrito__container">
        <h1>Carrito:</h1>
    </div>
    <div class="carrito" id="ingresar">
        <form method="post">
            <input type="text" placeholder="usuario" id="inputUsuario" name="inputUsuario">
            <input type="password" placeholder="contraseña" id="inputContraseña" name="inputContraseña">
            <button type="submit" class="button--secundary" id="inputSubmit">Enviar</button>
        </form>
    </div>
    
    <script src="./carrito.js"></script>
</body>
</html>