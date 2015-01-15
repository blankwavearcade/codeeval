<?php
  $lines = file($argv[1], FILE_SKIP_EMPTY_LINES | FILE_IGNORE_NEW_LINES);
  foreach ($lines as $l) {
    echo strtolower($l) . "\n";
  }

?>

