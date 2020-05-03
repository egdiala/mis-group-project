<?php
require_once('../scripts/init.php');

if (!$conn) {
    die('Could not connect to the database.');
}

// get all post data from the frontend
$title = $_POST['title'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$name = $title . ' ' . $fname . ' ' . $lname;
$email = $_POST['email'];
$token = $_POST['token'];
$job = $_POST['job'];
$password = $_POST['password'];
$cpassword = $_POST['c_password'];
if ($password === $cpassword) {
    $salt = "kdf84kh38" . $password . "khjsfiw97r924j";
    $newpsw = password_hash($salt, PASSWORD_DEFAULT);
}

// insert the form data into the table in the database
$sql = "INSERT INTO users (name, email, password, job, token) VALUES ('$name', '$email', '$newpsw', '$job', '$token')";
$result = $conn->query($sql);

// redirect after successful signup
header('Location: ../index.html');
// after successful signup, send response to front end in JSON format
// if ($result) {
//     $msg = 'Account created successfully.';
//     echo json_encode(['code' => 200, 'msg' => $msg]);
// } else {
//     $msg = 'There was an error creating account.';
//     echo json_encode(['code' => 201, 'msg' => $msg]);
// }
