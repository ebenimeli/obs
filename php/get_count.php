<?php
// Open the file for reading
$file = fopen("count.txt", "r");

// Read the value from the file
$count = intval(fread($file, filesize("count.txt")));

// Close the file
fclose($file);

// Output the count value
echo $count;
?>
