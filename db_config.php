<?php
$host = "localhost";
$user = "root";
$password = "usbw";
$dbname = "webA_test";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>