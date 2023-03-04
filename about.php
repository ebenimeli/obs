<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Observaciones de evaluación</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
  </head>
  <body>
    <div id="header">
        <div id="menu">
            <a href="index.php">Inicio</a> · 
            <a href="about.php" class="selected">Acerca de...</a> · 
            <a href="https://www.esferatic.com" target="_blank">Blog</a>

        </div>
        <!--<div id="obscounter"></div>-->
    </div>
    <div class="content">
    <h1>Sobre esta aplicación</h1>
    <img src="images/libreta.png" class="logo"/>

    <p>
        <ul>
            <li>Esta aplicación web es <strong>gratuita</strong>.</li>
            <li>Esta herramienta <strong>no almacena la información</strong> que el usuario marca o introduce; tampoco el texto que genera.</li>
            <li>Recuerda que <strong>solo es un asistente</strong> para redactar una observación sobre el rendimiento académico de un estudiante.</li>
            <li>Es importante escribir en el cuadro de <strong>texto personalizado</strong> de la observación.</li>
            <li>Utiliza solo los campos y opciones más <strong>relevantes</strong>.</li>
            <li>Mantén una <strong>extensión adecuada</strong> para la observación. Puedes personalizar el <strong>número mínimo y máximo de caracteres</strong> y recibir un aviso cuando excedas el límite.</li>
            <li>Cuando tengas el texto definitivo, haz clic en <strong>«Copiar observación»</strong> para pegarla en tu documento o plataforma.</li>
            <li>También puedes hacer clic en <strong>«Añadir observación a la lista»</strong> para agregarla a una lista de observaciones que podrás descargar en formato texto más tarde.</li>
            <li>Si haces clic en <strong>«Nueva observación»</strong> se borrarán todos los campos excepto la lista de observaciones.</li>
        </ul>
    </p>

    <h1>Sobre el autor</h1>
    <p>Soy <a href="https://www.ebenimeli.org/">Enrique Benimeli</a>, profesor de Informática en Secundaria. Si te interesa la educación, la tecnología, la productividad y la organización personal, te invito a visitar un par de blogs en los que escribo de vez en cuando: <a href="https://www.esferatic.com/" target="_blank">Esfera TIC</a> y <a href="https://www.ochoenpunto.com/" target="_blank">Ocho en punto</a>.</p>

        <!--
    <h1>¿Cómo apoyar este proyecto?</h1>

    <p>Puedes ayudar a mantener esta herramienta y el blog Esfera TIC <a href="https://ko-fi.com/esferatic">invitándome a un café</a> o adquiriendo alguno de estos libros que te recomiendo leer.</p>
    -->
    <?php include_once("php/books.php") ?>
    
    </div>
    <div class="footer">&copy; Enrique Benimeli <a href="http://www.ebenimeli.org" target="_blank">www.ebenimeli.org</a> · 2023</div>

    <!--
    <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
<script>
  kofiWidgetOverlay.draw('esferatic', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': '¿Un café?',
    'floating-chat.donateButton.background-color': '#00b9fe',
    'floating-chat.donateButton.text-color': '#fff'
  });
</script>
-->
</body>
</html>