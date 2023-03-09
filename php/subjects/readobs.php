<?php
if (file_exists($currentSubject)) {

$archivo = fopen( $currentSubject, 'r' );
$vector = array();
while( !feof( $archivo ) ) {
    $linea = fgets( $archivo );
    //echo $linea;
    array_push( $vector, $linea );
}
fclose( $archivo );
$vsize = count( $vector );
$i = 0;
$j = 0;
for ( $i = 0; $j < ( $vsize/2 );
$i += 2 ) {
    $o[ $j ] = $vector[ $i ];
    $o[ $j ] = str_replace("\n", "", $o[ $j ]);

    $ot[ $j ] = $vector[ $i+1 ];
    $ot[ $j ] = str_replace("\n", "", $ot[ $j ]);

    $j = $j + 1;
}
}
?>