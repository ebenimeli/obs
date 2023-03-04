<?php
$file = 'count.txt';

// Open the file to get existing content
$current = file_get_contents($file);

// Increment the number stored in the file
$current = $current + 1;

// Write the updated number back to the file
file_put_contents($file, $current);

?>
