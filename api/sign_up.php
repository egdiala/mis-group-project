<?php
require_once('../scripts/init.php');

if (!$conn) {
    die('Could not connect to the database.');
}

// get all post data from the frontend
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$salt = "kdf84kh38" . $password . "khjsfiw97r924j";
$newpsw = password_hash($salt, PASSWORD_DEFAULT);

// insert the form data into the table in the database
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$newpsw')";
$result = $conn->query($sql);

// after successful signup, send response to front end in JSON format
if ($result) {
    $msg = 'Account created successfully.';
    echo json_encode(['code' => 200, 'msg' => $msg]);
} else {
    $msg = 'There was an error creating account.';
    echo json_encode(['code' => 201, 'msg' => $msg]);
}
