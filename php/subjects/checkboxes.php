<table>
    <tr>
        <td>
            <?php $chknum += 1; ?>
            <div id="checkboxes<?php echo $chknum; ?>">
            <?php for ($i = 0; $i < ($vsize/4); $i++) { ?>
                    <input type="checkbox" value="<?php echo $ot[$i];?>" onchange="updateText()"><?php print($o[$i]); ?><br/>
            <?php } ?>
            </div>
        </td>
        <td>
            <?php $chknum += 1; ?>    
            <div id="checkboxes<?php echo $chknum?>">
            <?php
                $j = $i;
                for ($i = $j; $i < ($vsize/2); $i++) {
            ?>
            <input type="checkbox" value="<?php echo $ot[$i];?>" onchange="updateText()"><?php print($o[$i]); ?><br/>
            <?php } ?>
            </div>
        </td>
    </tr>
</table>