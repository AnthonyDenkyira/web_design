<?php
require_once 'db_config.php';

header("Content-Type: application/json");

$sql = "SELECT id, name, image, price FROM product";
$result = $conn->query($sql);

$product = [];
while ($row = $result->fetch_assoc()) {
    $product[] = $row;
}

echo json_encode($product);
$conn->close();
?>