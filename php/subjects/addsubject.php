<?php 
    $o = array();
    $ot = array();
    $currentSubject = 'php/subjects/obs/' . $id . '.txt';
    include( "readobs.php" );
    echo "<div id = '" . $id . "' class = 'group hidden'>";
    echo "<h3>Área de " . $name . "</h3>";
    include( 'checkboxes.php' );
    echo "<br/>";
    echo "<div id = 'close-" .  $id . "' class = 'obsbutton close' onclick = \"closeSubject('" . $id . "')\">Cerrar</div>";
    echo "</div>"; 
?>