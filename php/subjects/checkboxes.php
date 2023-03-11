<!-- Checkboxes for subject -->
<table>
    <tr>
        <td>
            <?php $chknum += 1; ?>
            <div id="checkboxes<?php echo $chknum; ?>">
            <?php 
            for ($i = 0; $i < ($vsize/4); $i++) {
                    $theobs = $ot[$i];
                    $theobs = rtrim(rtrim(rtrim($theobs, "\n"), "\r\n"), "\r");

                    echo "<input type='checkbox' value='";
                    echo $theobs;
                    echo "' onchange='updateText()'>";
                    echo $o[$i];
                    echo "<br/>";
            }
            ?>
            </div>
        </td>
        <td>
            <?php $chknum += 1; ?>    
            <div id="checkboxes<?php echo $chknum?>">
            <?php
                $j = $i;
                for ($i = $j; $i < ($vsize/2); $i++) {
                    $theobs = $ot[$i];
                    $theobs = rtrim(rtrim(rtrim($theobs, "\n"), "\r\n"), "\r");

                    echo "<input type='checkbox' value='$theobs' onchange='updateText()'>" . $o[$i];
                    echo "<br/>";

                }
             ?>
            </div>
        </td>
    </tr>
</table>