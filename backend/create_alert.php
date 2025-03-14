<?php
include "../config/db_config.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST["title"];
    $description = $_POST["description"];
    $priority = $_POST["priority"];
    $assign_to = $_POST["assign_to"];
    $created_by = $_POST["created_by"];

    $query = "INSERT INTO alerts (title, description, priority, assign_to, created_by, created_at) 
              VALUES ($1, $2, $3, $4, $5, NOW())";

    $result = pg_query_params($conn, $query, [$title, $description, $priority, $assign_to, $created_by]);

    if ($result) {
        echo "Alert created successfully!";
    } else {
        echo "Error creating alert: " . pg_last_error($conn);
    }

    pg_close($conn);
}
?>
