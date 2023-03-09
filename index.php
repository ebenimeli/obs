<!DOCTYPE html>
<html>
<?php include_once("header.php"); ?>
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
            include('content.php');
        }
    ?>

    <!-- Scripts -->
    <script src="js/obs.js"></script>
    <script src="js/functions.js"></script>
    <script src="js/dragandmove.js"></script>
    <script src="js/dropdown.js"></script>
    <script src="js/buttons.js"></script>
    <script src="js/rating.js"></script>

</body>
</html>