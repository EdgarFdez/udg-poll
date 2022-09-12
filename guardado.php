<?php
$codigo=isset($_POST['codigo']) ? $_POST['codigo'] : '';
$dibujo=isset($_POST['dibujo']) ? $_POST['dibujo'] : '';

try{
    $conexion=new PDO('mysql:host=localhost;port=3306;dbname=usuarios', 'Edgar', 'ju4OY8MR84xyTI8U');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    
    $pdo=$conexion->prepare('INSERT INTO encuesta(Codigo, Dibujo) VALUES(?,?)');
    $pdo->bindParam(1,$codigo);
    $pdo->bindParam(2,$dibujo);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode("true");
} catch(PDOException $error){
    echo $error->getMessage();
    die();
}
?>
