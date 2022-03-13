<?php

$connect = mysqli_connect('127.0.0.1','root','','bdd_ecf');

if(!$connect){
    echo 'erreur de connexion'.mysqli_connect_error($connect)." ".mysqli_connect_errno($connect);
}

?>