<?php  
  $lines = file($argv[1], FILE_SKIP_EMPTY_LINES | FILE_IGNORE_NEW_LINES);
  foreach ($lines as $l) {
   $l = explode(',',$l);
   echo $l[0] - $l[1] * floor($l[0]/$l[1]) . "\n";
  }

?>

 
