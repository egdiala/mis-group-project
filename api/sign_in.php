<?php
require_once('../scripts/init.php');

if (!$conn) {
    die('Could not connect to the database.');
}

$email = $_POST['email'];
$password = $_POST['password'];
$salt = "kdf84kh38" . $password . "khjsfiw97r924j";
$newpsw = password_hash($salt, PASSWORD_DEFAULT);


//query to check if email and password match with what's in the database
$sql = "SELECT password FROM users WHERE email='$email'";
$result = $conn->query($sql);

//if num rows is greater than 0, then user exists
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        unset($hash_pass);
        $hash_pass = $row['password'];
    }
    if (password_verify($salt, $hash_pass)) {

        $reply = $conn->query("SELECT id, name FROM users WHERE email='$email'");


        while ($row = $reply->fetch_assoc()) {
            unset($name, $id, $type);
            $id = $row['id'];
            $name = $row['name'];
            $fullname = explode(' ', $name);
            $fname = end($fullname);
        }

        SESSION_START();
        $_SESSION['id'] = $id;
        $_SESSION['name'] = $fname;

        // if login is successful, send response to frontend as JSON format
        $msg = 'Login Successful.';
        echo json_encode(['code' => 200, 'msg' => $msg]);
    } else {
        // error
        $err = 'Invalid user details.';
        echo json_encode(['code' => 404, 'msg' => $err]);
    }
} else {
    // error
    $err = 'No such user exists.';
    echo json_encode(['code' => 404, 'msg' => $err]);
}
