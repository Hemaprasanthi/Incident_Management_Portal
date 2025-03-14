<?php
$host = "localhost";
$dbname = "incident_management";
$user = "your_db_user";
$password = "your_db_password";

$conn = pg_connect("host=$host dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Database connection failed: " . pg_last_error());
}
?>
