<?php  
  $lines = file($argv[1], FILE_SKIP_EMPTY_LINES | FILE_IGNORE_NEW_LINES);
  foreach ($lines as $l) {
    $l = explode(' ',$l);
    $arrs = array();
    for($i = 1; $i <= $l[2]; $i++){
      if($i %  $l[0] == 0 && $i % $l[1] == 0) {
        array_push($arrs,'FB');
      } else if($i % $l[0] == 0) {
        array_push($arrs,'F');
      } else if( $i % $l[1] == 0) {
        array_push($arrs,'B');
      } else {
        array_push($arrs,$i);
      }
    }
    echo implode(" ", $arrs) . "\n";
  }

?>

 
 
