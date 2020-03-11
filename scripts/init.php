<?php
//*CONNECT TO MYSQL AND DATABASE
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mis-project";

//create connection
$conn = new mysqli($servername, $username, $password, $dbname);
