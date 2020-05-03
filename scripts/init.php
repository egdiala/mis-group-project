<?php
//*CONNECT TO MYSQL AND DATABASE
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "csc201";

//create connection
$conn = new mysqli($servername, $username, $password, $dbname);
