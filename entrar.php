<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <?php
    
    if (isset($_POST['entrar'])) {
        if (isset($_POST['user'])) {
            if ($_POST['user'] == "alumno") {
                echo '<META HTTP-EQUIV="REFRESH" CONTENT="0;URL=paginas/alumno.html">';
            } else if ($_POST['user'] == "profesor") {
                echo '<META HTTP-EQUIV="REFRESH" CONTENT="0;URL=paginas/profesor.html">';
            } else {
                echo '<META HTTP-EQUIV="REFRESH" CONTENT="0;URL=index.html">';
            }
        }
    }

    if (isset($_POST['cerrarsesion'])){
        //
    }

    ?>
    <h1>e</h1>
</body>

</html>