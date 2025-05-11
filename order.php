<?php
require_once 'db_config.php';

header("Content-Type: application/json");
if (isset($_GET["id"])) {
    $id = intval($_GET["id"]); // sanitize input
    $stmt = $conn->prepare("SELECT * FROM product WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $product = $result->fetch_assoc();

        if ($product) {
            echo json_encode($product);
        } else {
            echo json_encode(["error" => "Product not found"]);
        }
    } else {
        echo json_encode(["error"=> "Missing ID"]);
}
}
?>