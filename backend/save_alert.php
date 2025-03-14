<?php
require 'db_connect.php'; // Include your database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST["title"];
    $description = $_POST["description"];
    $assignTo = $_POST["assignTo"];
    $priority = $_POST["priority"];

    $query = "INSERT INTO alerts (title, description, assigned_to, priority, created_at) VALUES ($1, $2, $3, $4, NOW())";
    $result = pg_query_params($conn, $query, [$title, $description, $assignTo, $priority]);

    if ($result) {
        echo "Alert created successfully!";
    } else {
        echo "Error creating alert: " . pg_last_error($conn);
    }

    pg_close($conn);
}
?>
