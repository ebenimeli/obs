<!DOCTYPE html>
<html>
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-R9RBG8ZLDM"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-R9RBG8ZLDM');
    </script>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Observaciones de evaluación</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</head>
<body>
    <?php 
        function isMobileDevice() {
            return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i",$_SERVER["HTTP_USER_AGENT"]);
        }
        
        if(isMobileDevice()) {
            ?>
            <h1>Accede con el navegador de un ordenador</h1>
            <p>Para utilizar la aplicación, accede desde el navegador de un ordenador, no con un dispositivo móvil.</p>
            <a href="https://www.esferatic.com/obs/">www.esferatic.com/obs</a>
            <?php 
        } else {
            echo "Normal";

            include('content.php');
        }
    ?>
</body>
</html>
