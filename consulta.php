<?php
try{
    $conexion=new PDO('mysql:host=localhost;port=3306;dbname=usuarios', 'Edgar', 'ju4OY8MR84xyTI8U');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $consulta=$conexion->query('SELECT * FROM encuesta') or die(print($conexion->errorInfo()));
    $data=[];
    while($objeto=$consulta->fetch(PDO::FETCH_OBJ)){
        $data[]=[
            'id'=>$objeto->ID,
            'codigo'=>$objeto->Codigo,
            'dibujo'=>$objeto->Dibujo
        ];
    }
    echo json_encode($data);
} catch(PDOException $error){
    echo $error->getMessage();
    die();
}
?>
