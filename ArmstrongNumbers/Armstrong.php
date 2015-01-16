<?php    
  $lines = file($argv[1], FILE_SKIP_EMPTY_LINES | FILE_IGNORE_NEW_LINES);
  foreach ($lines as $l) {
   $l = str_split($l);
   $len = count($l);
   $count = 0;
   for($j = 0; $j < $len; $j++){
    $count+=pow((int)$l[$j], $len); 
   }
   if($count == implode('',$l)){
    echo 'True'."\n"; 
   }else{
    echo 'False'."\n"; 
   }
  }
?>
