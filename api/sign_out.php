<?php
SESSION_START();

// empty all session variables
$_SESSION = array();
session_destroy();

// redirect to the login page using php built-in header method
header("Location: /");
